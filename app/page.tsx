import type { Metadata } from 'next';
import { business } from '../content/business';
import {
  BodyMapLane,
  ClosingTapeCta,
  FeaturedTeamLane,
  FirstVisitTrack,
  HomeHero,
  RebatesBand,
  VisitUsLane,
} from '../components/home-sections';
import { TapeSeam } from '../components/artwork/dividers';
import { absoluteUrl } from '../lib/paths';
import { businessStructuredData, jsonLd } from '../lib/structured-data';

export const metadata: Metadata = {
  title: `${business.name} — Milton, Brisbane`,
  description: business.introduction,
  alternates: { canonical: absoluteUrl('/') },
};

export default function HomePage() {
  return (
    <>
      <HomeHero>
        <HomeHero.Heading>
          Back to moving.
          <br />
          Back to <em className="hero-tape-em hero-pull-late">you</em>.
        </HomeHero.Heading>
        <HomeHero.Intro>
          Hands-on physio and a plan you can actually stick to, from the first appointment to your
          last rep.
        </HomeHero.Intro>
        <HomeHero.Actions>
          <HomeHero.PrimaryAction>Enquire about an appointment</HomeHero.PrimaryAction>
          <HomeHero.PhoneAction>Call {business.phone}</HomeHero.PhoneAction>
        </HomeHero.Actions>
        <HomeHero.Claims>
          <HomeHero.Claim>Private health claimed on the spot</HomeHero.Claim>
          <HomeHero.Claim>Open from 6:30am weekdays</HomeHero.Claim>
          <HomeHero.Claim>3 min from Suncorp Stadium</HomeHero.Claim>
        </HomeHero.Claims>
      </HomeHero>

      <TapeSeam color="coral" angle={-7} className="top-[3vw]" />
      <BodyMapLane>
        <BodyMapLane.Heading>Where does it hurt?</BodyMapLane.Heading>
        <BodyMapLane.Lead>
          Pick a taped region to jump straight to the injuries, aches and post-surgery rehabs we
          treat there — from locked desk necks to staged ACL return-to-sport.
        </BodyMapLane.Lead>
      </BodyMapLane>

      <FirstVisitTrack>
        <FirstVisitTrack.Intro>
          <FirstVisitTrack.Heading>How a first visit runs</FirstVisitTrack.Heading>
          <FirstVisitTrack.Lead>
            No rushed ten-minute turnarounds. Every initial physio appointment runs for a full
            hour across four clear stages.
          </FirstVisitTrack.Lead>
        </FirstVisitTrack.Intro>
        <FirstVisitTrack.Hurdles>
          <FirstVisitTrack.Stage step="01" minutes="15 min" icon="assess" title="Assess">
            We listen to what happened, check how the joint moves and pinpoint what is actually
            driving the pain.
          </FirstVisitTrack.Stage>
          <FirstVisitTrack.Stage step="02" minutes="10 min" color="coral" icon="explain" title="Explain">
            Plain English on what is sore, why it flared up and the realistic timeframe to get it
            settled.
          </FirstVisitTrack.Stage>
          <FirstVisitTrack.Stage step="03" minutes="20 min" icon="treat" title="Treat">
            Hands-on joint work, soft-tissue release, taping or dry needling so you walk out moving
            easier.
          </FirstVisitTrack.Stage>
          <FirstVisitTrack.Stage step="04" minutes="15 min" color="coral" icon="plan" title="Plan">
            Two or three targeted exercises filmed on your phone and a step-by-step load plan for
            the week ahead.
          </FirstVisitTrack.Stage>
          <FirstVisitTrack.Finish>60 min</FirstVisitTrack.Finish>
        </FirstVisitTrack.Hurdles>
      </FirstVisitTrack>

      <TapeSeam color="teal" angle={3} height="clamp(2.25rem,4vw,3.5rem)" />
      <FeaturedTeamLane>
        <div>
          <FeaturedTeamLane.Heading>Clinicians who keep you moving</FeaturedTeamLane.Heading>
          <FeaturedTeamLane.Lead>
            Five physiotherapists and an accredited exercise physiologist working off the same
            rehab plan — whether you are chasing a marathon PB or getting up the stairs
            comfortably.
          </FeaturedTeamLane.Lead>
        </div>
        <FeaturedTeamLane.FooterLink>Meet the whole team</FeaturedTeamLane.FooterLink>
      </FeaturedTeamLane>

      <RebatesBand>
        <div>
          <RebatesBand.Heading>Rebates at a glance</RebatesBand.Heading>
          <RebatesBand.Lead>
            Private health claimed on the spot with HICAPS, plus Medicare care plans, DVA and
            WorkCover or CTP claims.
          </RebatesBand.Lead>
        </div>
        <RebatesBand.Link>See fees &amp; rebates</RebatesBand.Link>
      </RebatesBand>

      <VisitUsLane>
        <VisitUsLane.Heading>Visit us in Milton</VisitUsLane.Heading>
        <VisitUsLane.Lead>
          Ground-floor clinic on Castlemaine Street, three minutes from Suncorp Stadium with free
          patient parking behind the building off Railway Terrace.
        </VisitUsLane.Lead>
      </VisitUsLane>

      <TapeSeam color="coral" angle={-3} height="clamp(2rem,3.5vw,3rem)" />
      <ClosingTapeCta>
        <div>
          <ClosingTapeCta.Heading>
            Not sure if physio is right for you? Ask us first.
          </ClosingTapeCta.Heading>
          <ClosingTapeCta.Lead>
            Send a quick note about what is playing up and reception will match you with the right
            clinician and suggest a time.
          </ClosingTapeCta.Lead>
        </div>
        <ClosingTapeCta.Action>Enquire about an appointment</ClosingTapeCta.Action>
      </ClosingTapeCta>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(businessStructuredData()) }}
      />
    </>
  );
}
