import type { Metadata } from 'next';
import { ConditionsMotif } from '../../components/artwork/clinic-icons';
import { TapeDivider } from '../../components/artwork/dividers';
import { ConditionsDirectory, NotOnListBand } from '../../components/conditions-directory';
import { PageHead } from '../../components/page-head';
import { conditions } from '../../content/conditions';
import { regions } from '../../content/regions';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Conditions we treat',
  description:
    'Sports injuries, neck and lower back pain, shoulder and knee rehab, running injuries and post-surgery physiotherapy grouped by body region at Momentum Physio Milton.',
  alternates: { canonical: absoluteUrl('/conditions/') },
};

export default function ConditionsPage() {
  return (
    <>
      <PageHead eyebrow={`${conditions.length} conditions across ${regions.length} regions`} title="Conditions we treat" motif={<ConditionsMotif />}>
        <p>
          Start where it hurts. Pick a taped region on the body map to filter the list, check the
          typical session range and see which clinicians handle it every week.
        </p>
      </PageHead>

      <ConditionsDirectory />

      <TapeDivider color="teal" />

      <NotOnListBand heading="Not on the list?" actionLabel="Ask us about your injury">
        <p>
          We treat plenty of niggles and post-operative rehabs beyond the eighteen common conditions
          above. Tell us what is sore and how long it has been bothering you.
        </p>
        <p>
          If your symptoms point to something that needs imaging, a GP or a specialist first, your
          physiotherapist will assess you carefully and refer you on with a clear summary.
        </p>
      </NotOnListBand>
    </>
  );
}
