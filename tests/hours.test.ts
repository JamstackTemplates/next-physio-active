import assert from 'node:assert/strict';
import { test } from 'node:test';
import { business } from '../content/business.ts';
import { DAYS, currentWeekday, openingLabel, validateHours, type OpeningHours } from '../lib/hours.ts';

const sampleHours: OpeningHours[] = DAYS.map(day => (day === 'Monday' ? { day } : { day, opens: '09:00', closes: '17:00' }));
const atSample = (date: string, zone = 'America/New_York') => openingLabel(sampleHours, zone, new Date(date));
const atClinic = (date: string, zone = 'Australia/Brisbane') => openingLabel(business.hours, zone, new Date(date));

test('opening inclusive, closing exclusive; business zone wins over visitor zone', () => {
  assert.equal(atSample('2026-11-17T13:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(atSample('2026-11-17T14:00:00Z'), 'Open now · until 17:00');
  assert.equal(atSample('2026-11-17T22:00:00Z'), 'Closed · opens Wednesday at 09:00');
  assert.equal(atSample('2026-11-17T14:00:00Z', 'Asia/Tokyo'), 'Closed · opens Wednesday at 09:00');
});

test('Momentum Physio clinic schedule boundaries in Australia/Brisbane', () => {
  // Monday 2026-06-15 in Brisbane (UTC+10): opens 06:30, closes 19:30
  assert.equal(atClinic('2026-06-14T20:29:00Z'), 'Closed · opens today at 06:30');
  assert.equal(atClinic('2026-06-14T20:30:00Z'), 'Open now · until 19:30');
  assert.equal(atClinic('2026-06-15T09:29:00Z'), 'Open now · until 19:30');
  assert.equal(atClinic('2026-06-15T09:30:00Z'), 'Closed · opens Tuesday at 06:30');

  // Friday 2026-06-19 in Brisbane (UTC+10): closes 17:00
  assert.equal(atClinic('2026-06-19T06:59:00Z'), 'Open now · until 17:00');
  assert.equal(atClinic('2026-06-19T07:00:00Z'), 'Closed · opens Saturday at 07:00');

  // Saturday 2026-06-20 in Brisbane (UTC+10): opens 07:00, closes 12:00
  assert.equal(atClinic('2026-06-19T20:59:00Z'), 'Closed · opens today at 07:00');
  assert.equal(atClinic('2026-06-19T21:00:00Z'), 'Open now · until 12:00');
  assert.equal(atClinic('2026-06-20T01:59:00Z'), 'Open now · until 12:00');
  assert.equal(atClinic('2026-06-20T02:00:00Z'), 'Closed · opens Monday at 06:30');

  // Sunday 2026-06-21 in Brisbane (UTC+10): closed all day
  assert.equal(atClinic('2026-06-20T14:00:00Z'), 'Closed · opens Monday at 06:30');
  assert.equal(atClinic('2026-06-21T00:00:00Z'), 'Closed · opens Monday at 06:30');
  assert.equal(atClinic('2026-06-21T13:59:00Z'), 'Closed · opens Monday at 06:30');
});

test('Australia/Brisbane does not shift across southern-hemisphere DST changeovers when Sydney does', () => {
  // First Sunday of April 2026 (2026-04-05): Sydney falls back from UTC+11 to UTC+10.
  // First Monday after (2026-04-06) vs Monday before (2026-03-30):
  // Brisbane opens at 06:30 local = 20:30 UTC the evening prior on BOTH dates.
  assert.equal(atClinic('2026-03-29T20:30:00Z', 'Australia/Brisbane'), 'Open now · until 19:30');
  assert.equal(atClinic('2026-04-05T20:30:00Z', 'Australia/Brisbane'), 'Open now · until 19:30');
  // Meanwhile Sydney is UTC+11 on 2026-03-30 (so 19:30Z is already 06:30 Sydney, whereas Brisbane is 05:30)
  assert.equal(atClinic('2026-03-29T19:30:00Z', 'Australia/Brisbane'), 'Closed · opens today at 06:30');
  assert.equal(atClinic('2026-03-29T19:30:00Z', 'Australia/Sydney'), 'Open now · until 19:30');

  // First Sunday of October 2026 (2026-10-04): Sydney springs forward from UTC+10 to UTC+11.
  // Monday 2026-10-05: 19:30Z is 05:30 Brisbane (closed) and 06:30 Sydney (open).
  assert.equal(atClinic('2026-10-04T19:30:00Z', 'Australia/Brisbane'), 'Closed · opens today at 06:30');
  assert.equal(atClinic('2026-10-04T20:30:00Z', 'Australia/Brisbane'), 'Open now · until 19:30');
  assert.equal(atClinic('2026-10-04T19:30:00Z', 'Australia/Sydney'), 'Open now · until 19:30');

  assert.equal(currentWeekday('Australia/Brisbane', new Date('2026-10-04T20:30:00Z')), 'Monday');
});

test('closed weekdays and week wrap find the next service', () => {
  assert.equal(atSample('2026-11-16T18:00:00Z'), 'Closed · opens Tuesday at 09:00');
  assert.equal(atSample('2026-11-15T23:00:00Z'), 'Closed · opens Tuesday at 09:00');
  assert.equal(openingLabel(DAYS.map(day => ({ day })), 'UTC'), 'Closed · see opening hours');
});

test('missing/invalid zones stay neutral and DST changes preserve local service times', () => {
  assert.equal(atSample('2026-11-17T14:00:00Z', ''), 'See opening hours');
  assert.equal(atSample('2026-11-17T14:00:00Z', 'Mars/Base'), 'See opening hours');
  assert.equal(atSample('2026-03-08T12:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(atSample('2026-03-08T13:00:00Z'), 'Open now · until 17:00');
  assert.equal(atSample('2026-11-01T13:59:00Z'), 'Closed · opens today at 09:00');
  assert.equal(atSample('2026-11-01T14:00:00Z'), 'Open now · until 17:00');
});

test('invalid/incomplete/overnight intervals name the weekday to fix', () => {
  assert.doesNotThrow(() => validateHours(sampleHours));
  for (const opens of ['24:00', '9:00', '18:00']) {
    assert.throws(() => validateHours(sampleHours.map(x => (x.day === 'Tuesday' ? { ...x, opens } : x))), /Tuesday/);
  }
  assert.throws(() => validateHours(sampleHours.slice(1)), /Monday/);
  assert.throws(() => validateHours(sampleHours.map(x => (x.day === 'Tuesday' ? { ...x, closes: undefined } : x))), /Tuesday/);
});
