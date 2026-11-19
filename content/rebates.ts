export const REBATE_IDS = ['private-health', 'medicare-cdm', 'dva', 'workcover-ctp'] as const;
export type RebateId = (typeof REBATE_IDS)[number];

/** Claiming pathway shown on Home (at a glance) and Fees & rebates (full fund cards). */
export interface RebatePathway {
  /** Unique rebate identifier referenced by content/fees.ts. */
  id: RebateId;
  /** Full pathway name. */
  name: string;
  /** Compact label used on scoreboard tape tabs. */
  shortLabel: string;
  /** One-line summary for the Home rebates band. */
  oneLiner: string;
  /** Who is eligible for this pathway. */
  forWho: string;
  /** Items to bring to the appointment. */
  bring: readonly string[];
  /** One sentence describing what reception handles on the day. */
  weDo: string;
}

export const rebates: readonly RebatePathway[] = [
  {
    id: 'private-health',
    name: 'Private health',
    shortLabel: 'Private',
    oneLiner: 'Claim on the spot with HICAPS and pay only the gap.',
    forWho: 'Members with extras cover that includes physiotherapy or exercise physiology.',
    bring: ['Your health fund card (physical or digital)'],
    weDo: 'We claim on the spot with HICAPS, so you pay only the gap.',
  },
  {
    id: 'medicare-cdm',
    name: 'Medicare Chronic Disease Management',
    shortLabel: 'Medicare',
    oneLiner: 'Up to five GP-referred allied health visits a calendar year.',
    forWho:
      'People with a chronic condition and a GP care plan; Medicare covers up to five allied health visits a calendar year across all providers.',
    bring: ['GP referral', 'Medicare card'],
    weDo: 'We process the Medicare rebate after your visit and send your GP a report.',
  },
  {
    id: 'dva',
    name: 'DVA',
    shortLabel: 'DVA',
    oneLiner: 'Direct billing for Gold and White card holders with a GP referral.',
    forWho: 'Veterans with a Gold or White card and a GP referral.',
    bring: ['DVA card', 'GP referral'],
    weDo: 'We bill DVA directly, with nothing to pay on the day.',
  },
  {
    id: 'workcover-ctp',
    name: 'WorkCover & CTP',
    shortLabel: 'WorkCover',
    oneLiner: 'Insurer billing and case-manager updates for accepted claims.',
    forWho: 'People with an accepted workplace or motor vehicle injury claim.',
    bring: ['Claim number', 'Insurer and case-manager details'],
    weDo: 'We bill the insurer and keep your case manager updated.',
  },
];

export function getRebateById(id: RebateId): RebatePathway | undefined {
  return rebates.find(r => r.id === id);
}
