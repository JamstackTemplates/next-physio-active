import type { Metadata } from 'next';
import { FeesMotif } from '../../components/artwork/clinic-icons';
import { TapeDivider } from '../../components/artwork/dividers';
import { BringClipboard, FeeScoreboard, RebateFundCards } from '../../components/fees-sections';
import { PageHead } from '../../components/page-head';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Fees & rebates',
  description:
    'Upfront physiotherapy and exercise physiology fees at Momentum Physio Milton, with private health HICAPS claiming, Medicare CDM, DVA and WorkCover/CTP rebate guides.',
  alternates: { canonical: absoluteUrl('/fees/') },
};

export default function FeesPage() {
  return (
    <>
      <PageHead eyebrow="Four ways to claim a rebate" title="Fees & rebates" motif={<FeesMotif />}>
        <p>
          Know the cost before you come in. Every appointment fee, private health item number and
          claiming pathway is laid out below with no surprises at the desk.
        </p>
      </PageHead>

      <FeeScoreboard
        heading="Appointments & rehab classes"
        lead="All fees are in Australian dollars before any private health, Medicare, DVA or insurer rebate applies."
      />

      <TapeDivider color="coral" />

      <RebateFundCards
        heading="How rebates work"
        lead="Bring your fund card or referral and reception will handle the claim while you are at the front desk."
      />

      <BringClipboard
        heading="What to bring"
        items={[
          'Comfortable clothes you can move in — shorts for knees, hips or ankles, and a singlet for shoulders or necks',
          'Your private health fund card (physical or digital) for on-the-spot HICAPS claiming',
          'Any GP care plan referral, DVA card, or WorkCover / CTP claim number and insurer details',
          'Recent scan reports (X-ray, ultrasound or MRI) and the running or everyday shoes you wear most',
        ]}
        cancellation="Please give 24 hours' notice to change an appointment so someone else can take the spot."
        disclaimer="Rebates depend on your fund, cover level and annual limits. Check with your insurer. We'll tell you the fee before your appointment."
        ctaLabel="Ask about fees or rebates"
      />
    </>
  );
}
