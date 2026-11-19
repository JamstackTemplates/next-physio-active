import type { CSSProperties, ReactNode } from 'react';
import { business, telHref } from '../content/business';
import { featuredPractitioners } from '../content/practitioners';
import { rebates } from '../content/rebates';
import {
  AssessIcon,
  ExplainIcon,
  ParkingIcon,
  PhoneIcon,
  PinIcon,
  PlanIcon,
  RebateIcon,
  TrainIcon,
  TreatIcon,
  WheelchairIcon,
} from './artwork/clinic-icons';
import { LaneNumeral, TapeSeam } from './artwork/dividers';
import { asset } from '../lib/paths';
import { StreetSketch } from './artwork/street-sketch';
import { HomeTapedBodyMap } from './artwork/taped-body-map';
import { HoursTimetable } from './hours-timetable';
import { OpenBadge } from './open-badge';
import { PractitionerJersey } from './practitioner-jersey';
import { SiteLink } from './site-link';
import { TimeZoneNote } from './time-zone-note';

type ChildrenProps = { children: ReactNode };

/*
 * Home is a run down seven lanes. Each section is a lane with a painted floor numeral,
 * and wide kinesio tape strips are pulled across the boundaries between lanes.
 */

/* ── Lane 01 · Hero: headline left, runner bleeding off the right edge ── */

function HeroRoot({ children }: ChildrenProps) {
  // Photo URLs go in as custom properties so the base path applies; CSS picks the one for
  // the active theme, so only that image is downloaded.
  const photo = {
    '--hero-light': `url(${asset('/images/hero-light.webp')})`,
    '--hero-dark': `url(${asset('/images/hero-dark.webp')})`,
  } as CSSProperties;

  return (
    <section className="relative isolate overflow-x-clip bg-bg">
      {/* Taped runner photo: a banner above the heading on small screens, bleeding off the right edge on desktop */}
      <div
        aria-hidden="true"
        style={photo}
        className="hero-photo no-print pointer-events-none h-[17rem] sm:h-[26rem] lg:absolute lg:inset-y-0 lg:left-0 lg:-right-[12vw] lg:-z-20 lg:h-auto"
      />
      <LaneNumeral className="top-0 -left-[1.5vw] -z-10 max-lg:hidden">01</LaneNumeral>

      <div className="wrap relative -mt-16 flex flex-col justify-center pb-28 sm:-mt-24 lg:mt-0 lg:min-h-[min(calc(100svh-5rem),58rem)] lg:pt-14 lg:pb-32">
        <div className="hero-rise max-w-[44rem] lg:max-w-none">{children}</div>
      </div>
    </section>
  );
}

function HeroHeading({ children }: ChildrenProps) {
  return (
    <h1 className="display-xl text-[clamp(3.4rem,7.2vw,7.6rem)] text-ink">
      {children}
    </h1>
  );
}

function HeroIntro({ children }: ChildrenProps) {
  return (
    <p className="mt-8 max-w-[30rem] text-[clamp(1.1rem,1.55vw,1.32rem)] leading-relaxed font-semibold text-pretty text-ink/80">
      {children}
    </p>
  );
}

function HeroActions({ children }: ChildrenProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      {children}
    </div>
  );
}

function HeroPrimaryAction({ children }: ChildrenProps) {
  return (
    <SiteLink
      href="/contact/"
      className="button min-h-14 w-full px-7 text-[1.08rem] shadow-[0_10px_24px_-12px_rgba(11,122,117,0.8)] sm:w-auto"
    >
      {children}
    </SiteLink>
  );
}

function HeroPhoneAction({ children }: ChildrenProps) {
  return (
    <a
      href={telHref(business.phone)}
      className="inline-flex min-h-14 items-center justify-center gap-2 rounded-(--radius-ui) px-3 font-mono text-[0.98rem] font-bold text-ink underline decoration-coral decoration-2 underline-offset-[0.3em] hover:decoration-[3px]"
    >
      <PhoneIcon className="h-4 w-4 text-coral-ink" />
      <span>{children}</span>
    </a>
  );
}

function HeroClaims({ children }: ChildrenProps) {
  return (
    <ul className="mt-10 grid gap-2.5 font-mono text-[0.82rem] font-bold text-ink sm:text-[0.88rem]">
      {children}
    </ul>
  );
}

function HeroClaim({ children }: ChildrenProps) {
  return (
    <li className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="tape-surface tape-coral h-3 w-7 shrink-0 -rotate-6 rounded-full"
      />
      <span>{children}</span>
    </li>
  );
}

export const HomeHero = Object.assign(HeroRoot, {
  Heading: HeroHeading,
  Intro: HeroIntro,
  Actions: HeroActions,
  PrimaryAction: HeroPrimaryAction,
  PhoneAction: HeroPhoneAction,
  Claims: HeroClaims,
  Claim: HeroClaim,
});

/* ── Shared lane headings ──────────────────────────────────────────── */

function SectionHeading({ children }: ChildrenProps) {
  return <h2 className="display-lg text-ink">{children}</h2>;
}

function SectionLead({ children }: ChildrenProps) {
  return (
    <p className="mt-5 max-w-[36rem] text-[1.08rem] leading-relaxed text-muted sm:text-[1.15rem]">
      {children}
    </p>
  );
}

/* ── Lane 02 · Floodlit injury chart with the taped body map ───────── */

function BodyMapRoot({ children }: ChildrenProps) {
  return (
    <>
      <section className="floodlit lanes-bottom relative isolate overflow-hidden pt-[calc(6vw+5rem)] pb-20 [clip-path:polygon(0_6vw,100%_0,100%_100%,0_100%)] sm:pb-28">
        <LaneNumeral className="top-[4vw] right-[2vw] -z-10">02</LaneNumeral>
        {/* Floodlight wash from above */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(ellipse_60%_55%_at_50%_0%,rgba(61,217,201,0.16),transparent_70%)]"
        />
        <div className="wrap relative">
          <div className="max-w-3xl">{children}</div>
          <div className="mt-14">
            <HomeTapedBodyMap />
          </div>
        </div>
      </section>
    </>
  );
}

export const BodyMapLane = Object.assign(BodyMapRoot, {
  Heading: SectionHeading,
  Lead: SectionLead,
});

/* ── Lane 03 · First visit as a track: segment widths follow the minutes ── */

export type StageKey = 'assess' | 'explain' | 'treat' | 'plan';

function StageIcon({ kind }: { kind: StageKey }) {
  switch (kind) {
    case 'assess':
      return <AssessIcon className="h-12 w-12" />;
    case 'explain':
      return <ExplainIcon className="h-12 w-12" />;
    case 'treat':
      return <TreatIcon className="h-12 w-12" />;
    case 'plan':
      return <PlanIcon className="h-12 w-12" />;
  }
}

function FirstVisitRoot({ children }: ChildrenProps) {
  return (
    <section className="relative isolate overflow-x-clip bg-bg pt-24 pb-24 sm:pt-32">
      <LaneNumeral className="top-10 -left-[1vw] -z-10">03</LaneNumeral>
      {children}
    </section>
  );
}

function FirstVisitIntro({ children }: ChildrenProps) {
  return (
    <div className="wrap grid gap-2 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
      {children}
    </div>
  );
}

function TrackHurdles({ children }: ChildrenProps) {
  return (
    <div className="track-floor lanes-top lanes-bottom relative mt-14 py-10 sm:py-12">
      <ol className="wrap relative grid gap-0 lg:grid-cols-[15fr_10fr_20fr_15fr_auto]">
        {children}
      </ol>
    </div>
  );
}

function TrackStage({
  minutes,
  icon,
  title,
  children,
  color = 'teal',
}: {
  step?: string;
  minutes: string;
  icon: StageKey;
  title: string;
  children: ReactNode;
  color?: 'teal' | 'coral';
}) {
  return (
    <li className="relative grid grid-cols-[auto_1fr] gap-x-5 border-l-[3px] border-ink/80 py-6 pl-5 lg:block lg:py-0 lg:pr-6 lg:pl-5">
      {/* Tape segment: its length on the track is proportional to the stage's minutes */}
      <span
        aria-hidden="true"
        className={`tape-surface ${color === 'coral' ? 'tape-coral' : 'tape-teal'} absolute top-0 bottom-0 -left-[3px] w-3 rounded-full lg:static lg:mb-6 lg:block lg:h-5 lg:w-full lg:-rotate-1`}
      />
      <div className="lg:flex lg:items-end lg:justify-between lg:gap-3">
        <p className="font-mono text-[clamp(1.9rem,3vw,2.6rem)] leading-none font-bold tracking-tight text-ink">
          {minutes.replace(' min', '')}
          <span className="ml-1 text-sm text-muted">min</span>
        </p>
        <span className="mt-3 hidden text-primary-ink lg:block">
          <StageIcon kind={icon} />
        </span>
      </div>
      <div>
        <h3 className="font-display text-[1.65rem] leading-none font-black tracking-tight text-ink lg:mt-5">
          {title}
        </h3>
        <p className="mt-2.5 max-w-[22rem] text-[0.95rem] leading-relaxed text-muted">{children}</p>
      </div>
    </li>
  );
}

function TrackFinish({ children }: ChildrenProps) {
  return (
    <li className="relative mt-4 flex items-center gap-4 lg:mt-0 lg:flex-col lg:items-stretch lg:pl-2">
      <span
        aria-hidden="true"
        className="block h-10 w-24 rounded-sm lg:h-auto lg:min-h-36 lg:w-12 lg:flex-1"
        style={
          {
            backgroundImage:
              'repeating-conic-gradient(var(--ink) 0 25%, var(--surface) 0 50%)',
            backgroundSize: '16px 16px',
          } as CSSProperties
        }
      />
      <span className="font-mono text-2xl font-bold text-ink lg:text-center lg:text-lg">
        {children}
      </span>
    </li>
  );
}

export const FirstVisitTrack = Object.assign(FirstVisitRoot, {
  Intro: FirstVisitIntro,
  Heading: SectionHeading,
  Lead: SectionLead,
  Hurdles: TrackHurdles,
  Stage: TrackStage,
  Finish: TrackFinish,
});

/* ── Lane 04 · Staggered jerseys pinned over a wide teal strip ─────── */

function FeaturedTeamRoot({ children }: ChildrenProps) {
  return (
    <section className="relative isolate overflow-x-clip bg-surface pt-28 pb-24 sm:pt-32 sm:pb-32">
      <LaneNumeral className="top-6 right-[1vw] -z-10">04</LaneNumeral>
      <div
        aria-hidden="true"
        className="tape-stick tape-surface tape-teal no-print pointer-events-none absolute top-[62%] -right-[6vw] -left-[6vw] -z-10 h-[clamp(5rem,11vw,10rem)] -rotate-[4deg] rounded-full"
      />
      <div className="wrap relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">{children}</div>
        <div className="mt-16 grid gap-8 md:grid-cols-3 md:items-start md:gap-6">
          {featuredPractitioners.map((person, index) => (
            <PractitionerJersey
              key={person.id}
              practitioner={person}
              tilt={index === 0 ? 'left' : index === 2 ? 'right' : 'none'}
              className={index === 1 ? 'md:mt-20' : index === 2 ? 'md:mt-8' : ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedTeamFooter({ children }: ChildrenProps) {
  return (
    <SiteLink href="/team/" className="button button-quiet self-start lg:self-end">
      {children}
    </SiteLink>
  );
}

export const FeaturedTeamLane = Object.assign(FeaturedTeamRoot, {
  Heading: SectionHeading,
  Lead: SectionLead,
  FooterLink: FeaturedTeamFooter,
});

/* ── Lane 05 · Full-bleed coral band leaning forward 4° ────────────── */

function RebatesBandRoot({ children }: ChildrenProps) {
  return (
    <section className="relative isolate py-28 sm:py-36">
      {/* The band itself is a strip of coral tape; its edges lean, the copy stays upright */}
      <div
        aria-hidden="true"
        className="tape-surface tape-coral absolute inset-x-0 top-10 bottom-10 -z-10 -skew-y-[4deg] rounded-none border-x-0"
      />
      <LaneNumeral className="top-14 right-[2vw] -z-10 !text-[rgba(255,255,255,0.3)] ![-webkit-text-stroke:0]">
        05
      </LaneNumeral>
      <div className="wrap relative">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">{children}</div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rebates.map((pathway, i) => (
            <li
              key={pathway.id}
              className={`relative flex aspect-auto flex-col rounded-[1.1rem] bg-surface p-6 shadow-[0_18px_30px_-18px_rgba(13,42,46,0.55)] lg:aspect-[1/1.12] ${
                i % 2 === 1 ? 'lg:translate-y-6' : ''
              }`}
            >
              {/* card chip stripe, like a health-fund card */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-16 h-2.5 bg-track"
              />
              <div className="relative flex items-start justify-between gap-2">
                <span className="text-primary-ink">
                  <RebateIcon id={pathway.id} className="h-11 w-11" />
                </span>
                <span className="font-mono text-[0.72rem] font-bold text-muted">
                  {pathway.shortLabel}
                </span>
              </div>
              <h3 className="mt-9 font-display text-[1.45rem] leading-[1.02] font-black tracking-tight text-ink">
                {pathway.name}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{pathway.oneLiner}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RebatesBandHeading({ children }: ChildrenProps) {
  return <h2 className="display-lg text-[#0D2A2E]">{children}</h2>;
}

function RebatesBandLead({ children }: ChildrenProps) {
  return (
    <p className="mt-4 max-w-xl text-[1.1rem] leading-relaxed font-semibold text-[#0D2A2E]/85">
      {children}
    </p>
  );
}

function RebatesBandLink({ children }: ChildrenProps) {
  return (
    <SiteLink
      href="/fees/"
      className="button shrink-0 self-start border-[#0D2A2E] bg-[#0D2A2E] hover:border-[#0D2A2E] hover:bg-[#123b40] lg:self-end"
    >
      {children}
    </SiteLink>
  );
}

export const RebatesBand = Object.assign(RebatesBandRoot, {
  Heading: RebatesBandHeading,
  Lead: RebatesBandLead,
  Link: RebatesBandLink,
});

/* ── Lane 06 · Two-column visit panel on the gym floor ─────────────── */

function VisitUsRoot({ children }: ChildrenProps) {
  return (
    <section className="track-floor lanes-top relative isolate overflow-x-clip py-24 sm:py-28">
      <LaneNumeral className="top-8 -left-[1vw] -z-10">06</LaneNumeral>
      <div className="wrap relative">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            {children}
            <div className="mt-10 -rotate-1">
              <StreetSketch />
            </div>
          </div>

          <div className="relative space-y-6 rounded-[1.25rem] bg-surface p-6 shadow-[0_24px_40px_-28px_rgba(13,42,46,0.6)] sm:p-8 lg:mt-6">
            <span
              aria-hidden="true"
              className="tape-surface tape-coral no-print absolute -top-4 left-1/2 h-8 w-32 -translate-x-1/2 -rotate-3 rounded-md opacity-95"
            />
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
              <p className="flex items-start gap-2.5 font-display text-lg leading-snug font-extrabold text-ink">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-ink" />
                <span>{business.address.full}</span>
              </p>
              <OpenBadge hours={business.hours} />
            </div>

            <div>
              <h3 className="mb-3 font-display text-xl font-black text-ink">Opening hours</h3>
              <HoursTimetable hours={business.hours} />
              <TimeZoneNote />
            </div>

            <ul className="space-y-2.5 border-t border-line pt-5 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <ParkingIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-ink" />
                <span>{business.transport.parking}.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <TrainIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-ink" />
                <span>
                  {business.transport.train}; {business.transport.stadium.toLowerCase()}.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <WheelchairIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-ink" />
                <span>{business.transport.accessibility}.</span>
              </li>
            </ul>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <SiteLink href="/contact/" className="button">
                Directions &amp; enquiries
              </SiteLink>
              <a href={telHref(business.phone)} className="text-link font-mono text-sm">
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const VisitUsLane = Object.assign(VisitUsRoot, {
  Heading: SectionHeading,
  Lead: SectionLead,
});

/* ── Lane 07 · The closing call to action sits on a strip of tape ──── */

function ClosingTapeRoot({ children }: ChildrenProps) {
  return (
    <section className="relative isolate overflow-x-clip bg-bg pt-32 pb-36 sm:pt-40 sm:pb-44">
      <LaneNumeral className="top-4 right-[2vw] -z-20">07</LaneNumeral>
      <div
        aria-hidden="true"
        className="tape-stick tape-surface tape-teal absolute -inset-x-[12vw] top-16 bottom-20 -z-10 -skew-y-[4deg] rounded-[4rem] sm:rounded-[999px] shadow-[0_30px_50px_-30px_rgba(5,19,22,0.7)] sm:top-20 sm:bottom-24"
      />
      <div className="wrap relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {children}
      </div>
    </section>
  );
}

function ClosingTapeHeading({ children }: ChildrenProps) {
  return <h2 className="display-lg max-w-[16ch] text-[#062022]">{children}</h2>;
}

function ClosingTapeLead({ children }: ChildrenProps) {
  return (
    <p className="mt-5 max-w-xl text-[1.1rem] leading-relaxed font-semibold text-[#062022]/85">
      {children}
    </p>
  );
}

function ClosingTapeAction({ children }: ChildrenProps) {
  return (
    <SiteLink
      href="/contact/"
      className="button min-h-14 shrink-0 self-start border-[#062022] bg-[#062022] px-7 text-[1.05rem] hover:border-[#0d3236] hover:bg-[#0d3236] lg:self-end"
    >
      {children}
    </SiteLink>
  );
}

export const ClosingTapeCta = Object.assign(ClosingTapeRoot, {
  Heading: ClosingTapeHeading,
  Lead: ClosingTapeLead,
  Action: ClosingTapeAction,
});
