import { business } from '../content/business.ts';
import { practitioners } from '../content/practitioners.ts';
import { absoluteUrl } from './paths.ts';

/** Physiotherapy (MedicalBusiness subtype) JSON-LD derived from typed content collections. */
export function businessStructuredData() {
  const url = absoluteUrl('/');
  const image = url ? `${url.replace(/\/$/, '')}/og.png` : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    name: business.name,
    description: business.introduction,
    email: business.email,
    telephone: business.phone,
    ...(url ? { url } : {}),
    ...(image ? { image } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.suburb,
      addressRegion: business.address.state,
      postalCode: business.address.postcode,
      addressCountry: business.address.countryCode,
    },
    openingHoursSpecification: business.hours
      .filter(entry => entry.opens && entry.closes)
      .map(entry => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${entry.day}`,
        opens: entry.opens,
        closes: entry.closes,
      })),
    employee: practitioners.map(person => ({
      '@type': 'Person',
      name: person.name,
      jobTitle: person.title,
    })),
  };
}

/** Prevent content containing a closing script tag from escaping JSON-LD. */
export function jsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
