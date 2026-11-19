import type { PractitionerRole } from './practitioners.ts';
import type { RebateId } from './rebates.ts';

export type FeeKind = 'appointment' | 'class';

/** Appointment or small-group class entry displayed on the /fees/ scoreboard. */
export interface FeeItem {
  /** URL-safe unique identifier. */
  id: string;
  /** Visitor-facing appointment or class name. */
  name: string;
  /** Scheduled session duration in whole minutes (15 to 90). */
  minutes: number;
  /** Full private fee in whole Australian dollars (50–250 appointments, 20–60 classes). */
  priceAud: number;
  /** Optional Australian private health extras item number (e.g. 500, 505, 560). */
  itemCode?: string;
  /** Rebate pathways that apply to this service. */
  rebates: readonly RebateId[];
  /** Clinician roles that deliver this service. */
  roles: readonly PractitionerRole[];
  /** Distinguishes one-to-one consultations from small-group classes for pricing validation. */
  kind: FeeKind;
  /** Flip to false to pause a service ("Not taking new bookings right now", hides price CTA). */
  available: boolean;
}

export const fees: readonly FeeItem[] = [
  {
    id: 'initial-physio',
    name: 'Initial physio consultation',
    minutes: 60,
    priceAud: 125,
    itemCode: '500',
    rebates: ['private-health', 'medicare-cdm', 'dva', 'workcover-ctp'],
    roles: ['physiotherapist'],
    kind: 'appointment',
    available: true,
  },
  {
    id: 'standard-physio',
    name: 'Standard physio consultation',
    minutes: 45,
    priceAud: 105,
    itemCode: '505',
    rebates: ['private-health', 'medicare-cdm', 'dva', 'workcover-ctp'],
    roles: ['physiotherapist'],
    kind: 'appointment',
    available: true,
  },
  {
    id: 'short-physio',
    name: 'Short review',
    minutes: 30,
    priceAud: 85,
    itemCode: '505',
    rebates: ['private-health', 'dva', 'workcover-ctp'],
    roles: ['physiotherapist'],
    kind: 'appointment',
    available: true,
  },
  {
    id: 'running-assessment',
    name: 'Running gait assessment',
    minutes: 75,
    priceAud: 175,
    itemCode: '500',
    rebates: ['private-health'],
    roles: ['physiotherapist'],
    kind: 'appointment',
    available: true,
  },
  {
    id: 'ep-initial',
    name: 'Exercise physiology initial',
    minutes: 60,
    priceAud: 120,
    itemCode: '500',
    rebates: ['private-health', 'medicare-cdm', 'dva', 'workcover-ctp'],
    roles: ['exercise-physiologist'],
    kind: 'appointment',
    available: true,
  },
  {
    id: 'ep-session',
    name: 'Exercise physiology session',
    minutes: 45,
    priceAud: 95,
    itemCode: '505',
    rebates: ['private-health', 'medicare-cdm', 'dva', 'workcover-ctp'],
    roles: ['exercise-physiologist'],
    kind: 'appointment',
    available: true,
  },
  {
    id: 'rehab-class',
    name: 'Small-group rehab class (max 6)',
    minutes: 45,
    priceAud: 35,
    itemCode: '560',
    rebates: ['private-health'],
    roles: ['exercise-physiologist'],
    kind: 'class',
    available: true,
  },
  {
    id: 'hydro-class',
    name: 'Hydrotherapy class',
    minutes: 45,
    priceAud: 40,
    itemCode: '560',
    rebates: ['private-health'],
    roles: ['physiotherapist'],
    kind: 'class',
    available: false,
  },
];

export function formatAud(amount: number): string {
  return `$${amount}`;
}
