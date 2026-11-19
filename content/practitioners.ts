export type PractitionerRole = 'physiotherapist' | 'exercise-physiologist';

export const CLINIC_DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;
export type ClinicDay = (typeof CLINIC_DAYS)[number];

/** Full week keys for rendering the seven-dot roster strip (Sunday is always closed). */
export const WEEK_DAYS = [
  { key: 'mon', short: 'M', label: 'Monday' },
  { key: 'tue', short: 'T', label: 'Tuesday' },
  { key: 'wed', short: 'W', label: 'Wednesday' },
  { key: 'thu', short: 'T', label: 'Thursday' },
  { key: 'fri', short: 'F', label: 'Friday' },
  { key: 'sat', short: 'S', label: 'Saturday' },
  { key: 'sun', short: 'S', label: 'Sunday' },
] as const;

export const ROLE_LABELS: Record<PractitionerRole, string> = {
  physiotherapist: 'Physiotherapists',
  'exercise-physiologist': 'Exercise physiology',
};

/** Clinician entry shown on /team/, featured on Home, and linked from conditions. */
export interface Practitioner {
  /** URL-safe unique ID used for /team/#id anchors and condition cross-references. */
  id: string;
  /** Full display name. */
  name: string;
  /** Discipline used for role filter chips and fee eligibility checks. */
  role: PractitionerRole;
  /** Role title shown on the jersey card and in schema.org employee.jobTitle. */
  title: string;
  /** Clinical qualifications and post-graduate credentials. */
  qualifications: string;
  /** Two or three short clinical focus areas rendered as kinesio-tape tags. */
  focus: readonly string[];
  /** Regular clinic roster days (subset of mon..sat; must fall on days the clinic is open). */
  days: readonly ClinicDay[];
  /** Languages spoken in consultations. */
  languages: readonly string[];
  /** One personal line about how they stay active outside the clinic. */
  offDuty: string;
  /** Unique training jersey number between 1 and 99. */
  number: number;
  /** Exactly three practitioners are featured in the staggered Home trio. */
  featured?: boolean;
}

export const practitioners: readonly Practitioner[] = [
  {
    id: 'priya-raman',
    name: 'Priya Raman',
    role: 'physiotherapist',
    title: 'Principal physiotherapist',
    qualifications: 'B.Phty (Hons), APA Titled Musculoskeletal Physiotherapist',
    focus: ['necks & headaches', 'desk-worker backs', 'dry needling'],
    days: ['mon', 'tue', 'wed', 'thu'],
    languages: ['English', 'Tamil'],
    offDuty: 'Trains for the Bridge to Brisbane every year',
    number: 1,
    featured: true,
  },
  {
    id: 'tom-okafor',
    name: 'Tom Okafor',
    role: 'physiotherapist',
    title: 'Physiotherapist',
    qualifications: 'B.Phty, M.Manip.Phty',
    focus: ['shoulders', 'frozen shoulder', 'manual therapy'],
    days: ['mon', 'wed', 'fri', 'sat'],
    languages: ['English'],
    offDuty: 'Coaches under-12s rugby on Saturday afternoons',
    number: 7,
  },
  {
    id: 'mia-santos',
    name: 'Mia Santos',
    role: 'physiotherapist',
    title: 'Sports physiotherapist',
    qualifications: 'B.Phty, M.SportsPhty',
    focus: ['ACL rehab', 'return-to-sport testing', 'netball & football'],
    days: ['tue', 'thu', 'fri', 'sat'],
    languages: ['English', 'Portuguese'],
    offDuty: 'Plays wing attack in a Wednesday-night netball league',
    number: 11,
    featured: true,
  },
  {
    id: 'jordan-lee',
    name: 'Jordan Lee',
    role: 'physiotherapist',
    title: 'Running physiotherapist',
    qualifications: 'B.Phty, Running Gait Analysis cert.',
    focus: ["runners' knee", 'Achilles', 'gait analysis'],
    days: ['mon', 'tue', 'thu', 'sat'],
    languages: ['English', 'Korean'],
    offDuty: 'Paces the Saturday parkrun at Kurilpa Point',
    number: 21,
    featured: true,
  },
  {
    id: 'grace-whitfield',
    name: 'Grace Whitfield',
    role: 'physiotherapist',
    title: 'Physiotherapist',
    qualifications: 'B.Phty, Cert. Clinical Pilates',
    focus: ['joint replacements', 'post-op rehab', 'falls prevention'],
    days: ['mon', 'wed', 'thu', 'fri'],
    languages: ['English'],
    offDuty: 'Swims laps at the Spring Hill Baths at dawn',
    number: 4,
  },
  {
    id: 'ben-ashworth',
    name: 'Ben Ashworth',
    role: 'exercise-physiologist',
    title: 'Accredited exercise physiologist',
    qualifications: 'B.ExSc, M.ClinExPhys, AEP',
    focus: ['back-pain conditioning', 'chronic conditions', 'gym programs'],
    days: ['tue', 'wed', 'fri'],
    languages: ['English'],
    offDuty: 'Keeps a five-a-side team going for the whole clinic',
    number: 9,
  },
];

export const featuredPractitioners = practitioners.filter(p => p.featured);

export function getPractitionerById(id: string): Practitioner | undefined {
  return practitioners.find(p => p.id === id);
}

/** Two-letter initials used on compact clinical chart badges. */
export function practitionerInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('');
}
