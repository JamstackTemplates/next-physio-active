import type { RegionId } from './regions.ts';

/** Clinical condition treated at Momentum Physio, grouped under a body region on /conditions/. */
export interface Condition {
  /** URL-safe unique identifier. */
  id: string;
  /** Visitor-facing condition name. */
  name: string;
  /** Body region ID from content/regions.ts. */
  region: RegionId;
  /** One-sentence plain-English explanation of how we help. */
  summary: string;
  /** Typical course of appointments (whole numbers, 1 <= min <= max <= 20). */
  sessions: {
    min: number;
    max: number;
  };
  /** Practitioner IDs from content/practitioners.ts who commonly treat this condition. */
  practitioners: readonly string[];
  /** Optional highlight flag (at most six featured conditions). */
  featured?: boolean;
}

export const conditions: readonly Condition[] = [
  {
    id: 'neck-pain',
    name: 'Neck pain & stiffness',
    region: 'neck',
    summary: 'Loosen a locked neck and fix the desk set-up behind it.',
    sessions: { min: 3, max: 6 },
    practitioners: ['priya-raman', 'tom-okafor'],
    featured: true,
  },
  {
    id: 'tension-headache',
    name: 'Tension headaches',
    region: 'neck',
    summary: 'Hands-on treatment for headaches that start in the neck.',
    sessions: { min: 3, max: 5 },
    practitioners: ['priya-raman'],
  },
  {
    id: 'rotator-cuff',
    name: 'Rotator cuff injuries',
    region: 'shoulder',
    summary: 'Strength work for painful lifting and overhead reach.',
    sessions: { min: 6, max: 12 },
    practitioners: ['tom-okafor', 'mia-santos'],
    featured: true,
  },
  {
    id: 'frozen-shoulder',
    name: 'Frozen shoulder',
    region: 'shoulder',
    summary: 'Steady range-of-motion work through each stage.',
    sessions: { min: 8, max: 16 },
    practitioners: ['tom-okafor'],
  },
  {
    id: 'tennis-elbow',
    name: "Tennis & golfer's elbow",
    region: 'elbow-wrist',
    summary: 'Load the tendon back to full grip strength.',
    sessions: { min: 4, max: 8 },
    practitioners: ['mia-santos'],
  },
  {
    id: 'carpal-tunnel',
    name: 'Wrist pain & carpal tunnel',
    region: 'elbow-wrist',
    summary: 'Splinting advice, nerve glides and workstation tweaks.',
    sessions: { min: 3, max: 6 },
    practitioners: ['priya-raman'],
  },
  {
    id: 'low-back-pain',
    name: 'Lower back pain',
    region: 'back',
    summary: 'Calm the flare-up, then build a back that copes.',
    sessions: { min: 4, max: 8 },
    practitioners: ['priya-raman', 'ben-ashworth'],
    featured: true,
  },
  {
    id: 'sciatica',
    name: 'Sciatica',
    region: 'back',
    summary: 'Ease nerve pain down the leg and get walking again.',
    sessions: { min: 5, max: 10 },
    practitioners: ['ben-ashworth'],
  },
  {
    id: 'hip-replacement',
    name: 'Hip replacement rehab',
    region: 'hip',
    summary: 'Before- and after-surgery strength to get you home sooner.',
    sessions: { min: 8, max: 14 },
    practitioners: ['grace-whitfield', 'ben-ashworth'],
  },
  {
    id: 'groin-strain',
    name: 'Groin & hip flexor strains',
    region: 'hip',
    summary: 'Return-to-run plans for kicking and change-of-direction sports.',
    sessions: { min: 4, max: 8 },
    practitioners: ['mia-santos'],
  },
  {
    id: 'acl-rehab',
    name: 'ACL reconstruction rehab',
    region: 'knee',
    summary: 'A staged, tested return to sport over the long haul.',
    sessions: { min: 12, max: 20 },
    practitioners: ['mia-santos', 'jordan-lee'],
    featured: true,
  },
  {
    id: 'runners-knee',
    name: "Runner's knee",
    region: 'knee',
    summary: 'Fix the load and gait habits behind kneecap pain.',
    sessions: { min: 4, max: 8 },
    practitioners: ['jordan-lee'],
    featured: true,
  },
  {
    id: 'knee-replacement',
    name: 'Knee replacement rehab',
    region: 'knee',
    summary: 'Bend, strength and walking confidence after surgery.',
    sessions: { min: 8, max: 14 },
    practitioners: ['grace-whitfield'],
  },
  {
    id: 'ankle-sprain',
    name: 'Ankle sprains',
    region: 'ankle-foot',
    summary: 'Taping, balance and strength so it stops rolling.',
    sessions: { min: 3, max: 6 },
    practitioners: ['jordan-lee', 'mia-santos'],
    featured: true,
  },
  {
    id: 'achilles',
    name: 'Achilles tendinopathy',
    region: 'ankle-foot',
    summary: 'Progressive calf loading for a tendon that hates mornings.',
    sessions: { min: 6, max: 12 },
    practitioners: ['jordan-lee'],
  },
  {
    id: 'plantar-heel',
    name: 'Plantar heel pain',
    region: 'ankle-foot',
    summary: 'Footwear, loading and taping for first-step heel pain.',
    sessions: { min: 4, max: 8 },
    practitioners: ['jordan-lee'],
  },
  {
    id: 'post-op-general',
    name: 'General post-surgery rehab',
    region: 'whole-body',
    summary: 'Rebuild strength and confidence after an operation.',
    sessions: { min: 6, max: 12 },
    practitioners: ['grace-whitfield'],
  },
  {
    id: 'return-to-sport',
    name: 'Return-to-sport testing',
    region: 'whole-body',
    summary: 'Hop, strength and agility tests before you play again.',
    sessions: { min: 1, max: 3 },
    practitioners: ['mia-santos', 'jordan-lee'],
  },
];

export const featuredConditions = conditions.filter(c => c.featured);

export function conditionsForRegion(regionId: RegionId): readonly Condition[] {
  return conditions.filter(c => c.region === regionId);
}
