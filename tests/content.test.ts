import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { business } from '../content/business.ts';
import { conditions } from '../content/conditions.ts';
import { fees } from '../content/fees.ts';
import { practitioners, type ClinicDay } from '../content/practitioners.ts';
import { rebates } from '../content/rebates.ts';
import { regions } from '../content/regions.ts';
import { validateHours } from '../lib/hours.ts';
import { businessStructuredData, jsonLd } from '../lib/structured-data.ts';

const URL_SAFE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const DAY_TO_CLINIC_KEY: Record<string, ClinicDay> = {
  Monday: 'mon',
  Tuesday: 'tue',
  Wednesday: 'wed',
  Thursday: 'thu',
  Friday: 'fri',
  Saturday: 'sat',
};

function assertUniqueUrlSafeIds(collectionName: string, items: readonly { id: string }[]) {
  const seen = new Set<string>();
  for (const item of items) {
    assert.match(
      item.id,
      URL_SAFE_ID,
      `${collectionName}.${item.id}.id: must be lowercase URL-safe slug`,
    );
    assert.ok(!seen.has(item.id), `${collectionName}.${item.id}.id: duplicate ID`);
    seen.add(item.id);
  }
}

test('business content has valid required fields, address, hours and enquiry copy', () => {
  for (const key of ['name', 'tagline', 'introduction', 'email', 'phone', 'emergencyNotice'] as const) {
    assert.ok(business[key].trim(), `business.${key}: required`);
  }
  assert.match(business.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'business.email: valid public email required');
  for (const key of ['street', 'suburb', 'state', 'postcode', 'country', 'countryCode', 'full'] as const) {
    assert.ok(business.address[key].trim(), `business.address.${key}: required`);
  }
  assert.doesNotThrow(() => validateHours(business.hours));
  assert.ok(business.enquiries.title.trim(), 'business.enquiries.title: required');
  assert.ok(business.enquiries.introduction.trim(), 'business.enquiries.introduction: required');
  assert.ok(business.enquiries.usefulToInclude.length >= 4, 'business.enquiries.usefulToInclude: include message guidance');
  for (const tip of business.enquiries.usefulToInclude) {
    assert.ok(tip.trim(), 'business.enquiries.usefulToInclude: empty tip');
  }
});

test('every collection has unique URL-safe IDs', () => {
  assertUniqueUrlSafeIds('regions', regions);
  assertUniqueUrlSafeIds('conditions', conditions);
  assertUniqueUrlSafeIds('practitioners', practitioners);
  assertUniqueUrlSafeIds('fees', fees);
  assertUniqueUrlSafeIds('rebates', rebates);
});

test('regions are valid and every region has at least one condition', () => {
  for (const region of regions) {
    assert.ok(region.label.trim(), `regions.${region.id}.label: required`);
    assert.ok(region.side === 'front' || region.side === 'back', `regions.${region.id}.side: must be front or back`);
    assert.ok(region.blurb.trim(), `regions.${region.id}.blurb: required`);
    const count = conditions.filter(c => c.region === region.id).length;
    assert.ok(count >= 1, `regions.${region.id}: must have at least one condition`);
  }
});

test('practitioners have valid roles, unique jersey numbers (1-99), open clinic days and exactly three featured', () => {
  const openClinicDays = new Set<string>(
    business.hours
      .filter(h => h.opens && h.closes)
      .map(h => DAY_TO_CLINIC_KEY[h.day])
      .filter(Boolean),
  );
  const seenNumbers = new Set<number>();

  for (const person of practitioners) {
    assert.ok(person.name.trim(), `practitioners.${person.id}.name: required`);
    assert.ok(person.title.trim(), `practitioners.${person.id}.title: required`);
    assert.ok(person.qualifications.trim(), `practitioners.${person.id}.qualifications: required`);
    assert.ok(
      person.focus.length >= 2 && person.focus.length <= 3,
      `practitioners.${person.id}.focus: expected 2 or 3 focus phrases`,
    );
    assert.ok(person.languages.length >= 1, `practitioners.${person.id}.languages: required`);
    assert.ok(person.offDuty.trim(), `practitioners.${person.id}.offDuty: required`);
    assert.ok(
      Number.isInteger(person.number) && person.number >= 1 && person.number <= 99,
      `practitioners.${person.id}.number: must be an integer between 1 and 99`,
    );
    assert.ok(!seenNumbers.has(person.number), `practitioners.${person.id}.number: duplicate jersey number ${person.number}`);
    seenNumbers.add(person.number);

    assert.ok(person.days.length >= 1, `practitioners.${person.id}.days: must include at least one day`);
    for (const day of person.days) {
      assert.ok(
        openClinicDays.has(day),
        `practitioners.${person.id}.days: "${day}" must fall on a day the clinic is open`,
      );
    }
  }

  const featuredCount = practitioners.filter(p => p.featured).length;
  assert.equal(featuredCount, 3, `practitioners.featured: expected exactly 3 featured practitioners, got ${featuredCount}`);
});

test('conditions reference valid regions and practitioners, valid session ranges and at most six featured', () => {
  const regionIds = new Set<string>(regions.map(r => r.id));
  const practitionerIds = new Set<string>(practitioners.map(p => p.id));

  for (const condition of conditions) {
    assert.ok(condition.name.trim(), `conditions.${condition.id}.name: required`);
    assert.ok(condition.summary.trim(), `conditions.${condition.id}.summary: required`);
    assert.ok(
      regionIds.has(condition.region),
      `conditions.${condition.id}.region: unknown region "${condition.region}"`,
    );
    const { min, max } = condition.sessions;
    assert.ok(
      Number.isInteger(min) && Number.isInteger(max) && min >= 1 && min <= max && max <= 20,
      `conditions.${condition.id}.sessions: expected integers with 1 <= min <= max <= 20 (got ${min}-${max})`,
    );
    assert.ok(condition.practitioners.length >= 1, `conditions.${condition.id}.practitioners: required`);
    for (const pid of condition.practitioners) {
      assert.ok(
        practitionerIds.has(pid),
        `conditions.${condition.id}.practitioners: unknown practitioner "${pid}"`,
      );
    }
  }

  const featuredCount = conditions.filter(c => c.featured).length;
  assert.ok(featuredCount <= 6, `conditions.featured: at most 6 featured conditions allowed (got ${featuredCount})`);
});

test('fees have valid durations, whole-dollar prices, known rebates and staffed roles', () => {
  const rebateIds = new Set<string>(rebates.map(r => r.id));
  const activeRoles = new Set<string>(practitioners.map(p => p.role));

  for (const fee of fees) {
    assert.ok(fee.name.trim(), `fees.${fee.id}.name: required`);
    assert.ok(
      Number.isInteger(fee.minutes) && fee.minutes >= 15 && fee.minutes <= 90,
      `fees.${fee.id}.minutes: must be an integer between 15 and 90 (got ${fee.minutes})`,
    );
    assert.ok(Number.isInteger(fee.priceAud), `fees.${fee.id}.priceAud: must be a whole dollar amount`);
    if (fee.kind === 'appointment') {
      assert.ok(
        fee.priceAud >= 50 && fee.priceAud <= 250,
        `fees.${fee.id}.priceAud: appointment fee must be 50-250 AUD (got ${fee.priceAud})`,
      );
    } else {
      assert.ok(
        fee.priceAud >= 20 && fee.priceAud <= 60,
        `fees.${fee.id}.priceAud: class fee must be 20-60 AUD (got ${fee.priceAud})`,
      );
    }
    assert.ok(fee.rebates.length >= 1, `fees.${fee.id}.rebates: required`);
    for (const rid of fee.rebates) {
      assert.ok(rebateIds.has(rid), `fees.${fee.id}.rebates: unknown rebate "${rid}"`);
    }
    assert.ok(fee.roles.length >= 1, `fees.${fee.id}.roles: required`);
    for (const role of fee.roles) {
      assert.ok(activeRoles.has(role), `fees.${fee.id}.roles: no practitioner found for role "${role}"`);
    }
  }
});

test('Physiotherapy structured data derives from content and escapes JSON-LD safely', () => {
  const schema = businessStructuredData();
  assert.equal(schema['@type'], 'Physiotherapy');
  assert.equal(schema.name, business.name);
  assert.equal(schema.email, business.email);
  assert.equal(schema.telephone, business.phone);
  assert.equal(schema.address['@type'], 'PostalAddress');
  assert.equal(schema.address.addressLocality, 'Milton');
  assert.equal(schema.openingHoursSpecification.length, 6);
  assert.equal(schema.employee.length, practitioners.length);
  assert.deepEqual(schema.employee[0], {
    '@type': 'Person',
    name: practitioners[0].name,
    jobTitle: practitioners[0].title,
  });

  const value = { name: '</script><script>alert(1)</script>', text: '< & >' };
  const encoded = jsonLd(value);
  assert.ok(!encoded.includes('<'), 'JSON-LD must escape <');
  assert.deepEqual(JSON.parse(encoded), value);
});

test('wording rules: pages use enquiry wording with required safety and rebate disclaimers', () => {
  const pageFiles = [
    '../app/page.tsx',
    '../app/conditions/page.tsx',
    '../app/team/page.tsx',
    '../app/fees/page.tsx',
    '../app/contact/page.tsx',
    '../content/business.ts',
    '../content/rebates.ts',
  ];
  for (const rel of pageFiles) {
    const source = readFileSync(new URL(rel, import.meta.url), 'utf8');
    assert.doesNotMatch(source, /\bbook now\b/i, `${rel}: must not use "book now"`);
    assert.doesNotMatch(source, /\bbooked\b/i, `${rel}: must not use "booked"`);
    assert.doesNotMatch(source, /\bguaranteed rebate\b/i, `${rel}: must not promise a guaranteed rebate`);
  }

  const contactCopy = `${business.enquiries.introduction} ${business.emergencyNotice}`;
  assert.match(contactCopy, /only confirmed once we've replied/i);
  assert.match(contactCopy, /Not for emergencies\. Call 000/i);

  const feesPage = readFileSync(new URL('../app/fees/page.tsx', import.meta.url), 'utf8');
  assert.match(feesPage, /Rebates depend on your fund, cover level and annual limits/i);
});
