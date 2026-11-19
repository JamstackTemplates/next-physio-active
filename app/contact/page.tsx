import type { Metadata } from 'next';
import {
  ContactMotif,
  MailIcon,
  ParkingIcon,
  PhoneIcon,
  PinIcon,
  TapeRollBullet,
  TrainIcon,
} from '../../components/artwork/clinic-icons';
import { CopyEmail } from '../../components/copy-email';
import { GoogleMap } from '../../components/google-map';
import { HoursTimetable } from '../../components/hours-timetable';
import { JamstacksSupportForm } from '../../components/jamstacks-support-form';
import { OpenBadge } from '../../components/open-badge';
import { PageHead } from '../../components/page-head';
import { TimeZoneNote } from '../../components/time-zone-note';
import { business, telHref } from '../../content/business';
import { absoluteUrl } from '../../lib/paths';
import { site } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Enquire about a physiotherapy or exercise physiology appointment at Momentum Physio in Milton, Brisbane. Reception replies within one business day.',
  alternates: { canonical: absoluteUrl('/contact/') },
};

export default function ContactPage() {
  const hosted = Boolean(site.jamstacksSite && site.jamstacksEmbedUrl);

  return (
    <>
      <PageHead eyebrow="Reception replies within one business day" tape="teal" title={business.enquiries.title} motif={<ContactMotif />}>
        <p>{business.enquiries.introduction}</p>
      </PageHead>

      <div className="wrap py-10 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* Left column: white clipboard panel held by angled coral kinesio tape */}
          <section aria-label="Enquiry form" className="relative">
            <div
              aria-hidden="true"
              className="tape-stick tape-surface tape-coral mx-auto -mb-3 h-6 w-28 -rotate-2 rounded-full shadow-xs"
            />
            <div className="rounded-2xl border-2 border-line bg-surface p-6 shadow-sm sm:p-8">
              <div className="mb-6 border-b border-line pb-4">
                <p className="eyebrow">Appointment &amp; clinic enquiry</p>
                <h2 className="mt-1.5 font-display text-2xl font-black text-ink">
                  Send reception a note
                </h2>
                <p className="mt-1.5 text-sm text-muted">
                  Name, email and message — tell us what is sore and the days that suit you.
                </p>
              </div>

              {hosted ? (
                <JamstacksSupportForm
                  siteId={site.jamstacksSite}
                  embedUrl={site.jamstacksEmbedUrl}
                  email={business.email}
                />
              ) : (
                <div className="rounded-xl border-2 border-dashed border-line bg-bg p-6">
                  <h3 className="font-display text-xl font-black text-ink">
                    Write to reception directly
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">
                    The online enquiry form is not connected in this preview. Email{' '}
                    <a className="text-link wrap-anywhere" href={`mailto:${business.email}`}>
                      {business.email}
                    </a>{' '}
                    or call{' '}
                    <a className="text-link font-mono" href={telHref(business.phone)}>
                      {business.phone}
                    </a>{' '}
                    and we will reply within one business day to suggest a time.
                  </p>
                </div>
              )}

              {/* Include in your message checklist */}
              <div className="mt-7 border-t border-line pt-6">
                <h3 className="font-mono text-xs font-bold tracking-[0.14em] text-primary-ink uppercase">
                  Include in your message
                </h3>
                <ul className="mt-3.5 space-y-2.5 text-sm text-ink">
                  {business.enquiries.usefulToInclude.map(tip => (
                    <li key={tip} className="flex items-start gap-2.5">
                      <TapeRollBullet className="mt-0.5 h-4 w-4" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Right column: track lane band with email, phone, hours, emergency notice & map */}
          <aside
            aria-label="Clinic details and directions"
            className="track-floor space-y-6 rounded-2xl border-2 border-line p-6 sm:p-8"
          >
            {/* Emergency safety notice */}
            <div className="rounded-xl border-2 border-coral/60 bg-surface px-4 py-3.5">
              <p className="font-mono text-xs font-bold tracking-wider text-coral-ink uppercase">
                Safety notice
              </p>
              <p className="mt-1 text-sm font-bold text-ink">{business.emergencyNotice}</p>
            </div>

            {/* Always-visible public email & phone */}
            <div className="space-y-4 rounded-xl border border-line bg-surface p-5">
              <div>
                <h2 className="font-mono text-xs font-bold tracking-[0.14em] text-muted uppercase">
                  Email
                </h2>
                <p className="mt-1.5 flex items-center gap-2">
                  <MailIcon className="h-5 w-5 shrink-0 text-primary-ink" />
                  <a
                    className="text-link wrap-anywhere text-base"
                    href={`mailto:${business.email}`}
                  >
                    {business.email}
                  </a>
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <CopyEmail email={business.email} />
                </div>
              </div>

              <div className="border-t border-line pt-4">
                <h2 className="font-mono text-xs font-bold tracking-[0.14em] text-muted uppercase">
                  Phone
                </h2>
                <p className="mt-1.5">
                  <a
                    className="inline-flex items-center gap-2 font-mono text-lg font-bold text-ink no-underline hover:text-primary-ink hover:underline"
                    href={telHref(business.phone)}
                  >
                    <PhoneIcon className="h-4 w-4 text-coral-ink" />
                    <span>{business.phone}</span>
                  </a>
                </p>
              </div>
            </div>

            {/* Address, live open-now badge & 7-day timetable */}
            <div className="space-y-4 rounded-xl border border-line bg-surface p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <p className="flex items-start gap-2.5 text-sm font-bold text-ink">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-primary-ink" />
                  <span>{business.address.full}</span>
                </p>
                <OpenBadge hours={business.hours} />
              </div>

              <ul className="space-y-2 text-xs text-muted sm:text-sm">
                <li className="flex items-start gap-2">
                  <ParkingIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-ink" />
                  <span>{business.transport.parking}.</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrainIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary-ink" />
                  <span>
                    {business.transport.train}; {business.transport.stadium.toLowerCase()}.
                  </span>
                </li>
              </ul>

              <div>
                <h2 className="mb-2 font-mono text-xs font-bold tracking-[0.14em] text-muted uppercase">
                  Opening hours
                </h2>
                <HoursTimetable hours={business.hours} />
                <TimeZoneNote />
              </div>
            </div>

            {/* GoogleMap on Contact only */}
            <div>
              <h2 className="mb-2.5 font-mono text-xs font-bold tracking-[0.14em] text-muted uppercase">
                Find the clinic
              </h2>
              <GoogleMap
                address={business.address.full}
                title="Map showing Momentum Physio at 118 Castlemaine Street, Milton QLD 4064"
                className="overflow-hidden rounded-xl border-2 border-line"
              />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
