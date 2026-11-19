import type { Metadata } from 'next';
import { TeamMotif } from '../../components/artwork/clinic-icons';
import { TapeDivider } from '../../components/artwork/dividers';
import { PageHead } from '../../components/page-head';
import { TeamSheet } from '../../components/team-sheet';
import { WhoShouldISee } from '../../components/who-should-i-see';
import { absoluteUrl } from '../../lib/paths';

export const metadata: Metadata = {
  title: 'Our team',
  description:
    'Meet the six physiotherapists and accredited exercise physiologist at Momentum Physio in Milton, Brisbane — their focus areas, qualifications and clinic days.',
  alternates: { canonical: absoluteUrl('/team/') },
};

export default function TeamPage() {
  return (
    <>
      <PageHead eyebrow="Five physios and an exercise physiologist" tape="teal" title="The team sheet" motif={<TeamMotif />}>
        <p>
          Six clinicians, one plan for you. Check each practitioner&apos;s focus areas, languages and
          days in clinic on their jersey below.
        </p>
      </PageHead>

      <TeamSheet />

      <TapeDivider color="coral" />

      <WhoShouldISee
        heading="Who should I see?"
        actionLabel="Ask reception to match you"
        note="Not sure who fits best? Send an enquiry with a quick line about what is sore and reception will match you with the right clinician."
      >
        <WhoShouldISee.Lane
          lane="01"
          situation="Desk neck, headaches or a stiff shoulder"
          match="Start with hands-on musculoskeletal physio to settle pain and fix the workstation or lifting mechanics behind it."
          clinicianIds={[
            { id: 'priya-raman', label: '#1 Priya Raman' },
            { id: 'tom-okafor', label: '#7 Tom Okafor' },
          ]}
        />
        <WhoShouldISee.Lane
          lane="02"
          situation="Running niggles, field sports or ACL rehab"
          match="Work with our sports and running physios for gait analysis, calf and tendon loading, and staged return-to-sport testing."
          clinicianIds={[
            { id: 'mia-santos', label: '#11 Mia Santos' },
            { id: 'jordan-lee', label: '#21 Jordan Lee' },
          ]}
        />
        <WhoShouldISee.Lane
          lane="03"
          situation="Joint replacement, post-surgery or long-term back conditioning"
          match="Combine post-operative physio with structured strength and gym programming from our accredited exercise physiologist."
          clinicianIds={[
            { id: 'grace-whitfield', label: '#4 Grace Whitfield' },
            { id: 'ben-ashworth', label: '#9 Ben Ashworth' },
          ]}
        />
      </WhoShouldISee>
    </>
  );
}
