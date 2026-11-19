import type { OpeningHours } from '../lib/hours.ts';

/** Core Momentum Physio business details shared across pages, metadata and structured data. */
export interface Business {
  /** Public display name; also update site.config.json's name when renaming. */
  name: string;
  /** Short headline for the home page and fallback titles. */
  tagline: string;
  /** Plain-text description used by metadata and structured data. */
  introduction: string;
  /** Public contact email address, always visible beside the enquiry form. */
  email: string;
  /** Public clinic phone number. */
  phone: string;
  /** Structured street address for pages, GoogleMap and schema.org PostalAddress. */
  address: {
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    country: string;
    /** ISO 3166-1 alpha-2 code for schema.org PostalAddress. */
    countryCode: string;
    /** Formatted single-line address used in directions and map queries. */
    full: string;
  };
  /** Walking, train, parking and access details for visitors arriving at Milton. */
  transport: {
    stadium: string;
    train: string;
    parking: string;
    accessibility: string;
  };
  /** Weekly opening hours (one same-day interval per day; Sunday closed). */
  hours: readonly OpeningHours[];
  /** Clear safety line shown on Contact and in the footer. */
  emergencyNotice: string;
  /** Contact copy; the hosted form supports name, email and message only. */
  enquiries: {
    /** Contact page heading. */
    title: string;
    /** Explains response time and that appointments are only confirmed once the clinic replies. */
    introduction: string;
    /** Suggestions for the message text, never extra form fields. */
    usefulToInclude: readonly string[];
  };
}

export const business: Business = {
  name: 'Momentum Physio',
  tagline: 'Back to moving. Back to you.',
  introduction:
    'Momentum Physio in Milton, Brisbane: sports injury, back and neck pain, post-surgery rehab and running physio, with private health rebates claimed on the spot.',
  email: 'hello@momentumphysio.example',
  phone: '(07) 3555 0142',
  address: {
    street: 'Ground floor, 118 Castlemaine Street',
    suburb: 'Milton',
    state: 'QLD',
    postcode: '4064',
    country: 'Australia',
    countryCode: 'AU',
    full: 'Ground floor, 118 Castlemaine Street, Milton QLD 4064, Australia',
  },
  transport: {
    stadium: "Three minutes' walk from Suncorp Stadium",
    train: 'Milton station is 400 m away',
    parking: 'Free patient parking behind the building off Railway Terrace',
    accessibility: 'Ground-floor step-free entry with wide treatment rooms and accessible restroom',
  },
  hours: [
    { day: 'Monday', opens: '06:30', closes: '19:30' },
    { day: 'Tuesday', opens: '06:30', closes: '19:30' },
    { day: 'Wednesday', opens: '06:30', closes: '19:30' },
    { day: 'Thursday', opens: '06:30', closes: '19:30' },
    { day: 'Friday', opens: '06:30', closes: '17:00' },
    { day: 'Saturday', opens: '07:00', closes: '12:00' },
    { day: 'Sunday' },
  ],
  emergencyNotice: 'Not for emergencies. Call 000 if you need urgent help.',
  enquiries: {
    title: "Ask us anything, then we'll find you a time.",
    introduction:
      "Send an enquiry and reception will reply within one business day to suggest a time. Your appointment is only confirmed once we've replied.",
    usefulToInclude: [
      "What's sore and for how long",
      'Any surgery date or referral (GP care plan, DVA, WorkCover or CTP claim)',
      "Your health fund if you'd like a rebate estimate",
      'Preferred days and times',
      'A practitioner if you have one in mind',
      "A phone number if you'd prefer a call back",
    ],
  },
};

/** Strip punctuation for tel: hrefs while preserving a leading plus if present. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}
