import { business, telHref } from '../content/business';
import { MailIcon, PhoneIcon, PinIcon } from './artwork/clinic-icons';
import { OpenBadge } from './open-badge';
import { SiteLink } from './site-link';

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden bg-track-dark text-track-dark-ink">
      {/* Curved track lane lines & faint chalk numerals sweeping across the footer */}
      <svg
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
        data-art="decorative"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d="M -40 310 C 320 220, 760 220, 1480 285"
          stroke="var(--track-dark-line)"
          strokeWidth="2.5"
        />
        <path
          d="M -40 326 C 320 236, 760 236, 1480 301"
          stroke="var(--tape-teal)"
          strokeOpacity="0.28"
          strokeWidth="2"
        />
        <path
          d="M -40 245 C 340 155, 790 155, 1480 218"
          stroke="var(--track-dark-line)"
          strokeWidth="1.5"
          strokeDasharray="10 10"
        />
      </svg>

      {/* Top coral/teal lane stripe */}
      <div
        aria-hidden="true"
        className="h-1.5 w-full"
        style={{
          background:
            'linear-gradient(to right, var(--coral) 0 38%, var(--tape-teal) 38% 100%)',
        }}
      />

      <div className="wrap relative pt-16 pb-[clamp(7rem,15vw,13rem)]">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Column 1: Identity, address & live open-now badge */}
          <div className="space-y-4">
            <div>
              <p className="font-display text-4xl font-black tracking-tight text-chalk">
                Momentum
              </p>
              <p className="font-mono text-xs font-bold tracking-[0.25em] text-tape-teal">
                PHYSIO
              </p>
            </div>
            <p className="flex items-start gap-2.5 text-sm leading-relaxed text-track-dark-muted">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-tape-teal" />
              <span>{business.address.full}</span>
            </p>
            <p className="text-sm text-track-dark-muted">{business.transport.parking}.</p>
            <div className="pt-1">
              <OpenBadge hours={business.hours} variant="on-dark" />
            </div>
          </div>

          {/* Column 2: Opening hours & navigation */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-base font-extrabold text-tape-teal">
                Clinic hours
              </h2>
              <dl className="mt-3 space-y-1.5 font-mono text-xs text-track-dark-muted">
                <div className="flex justify-between gap-3">
                  <dt>Mon–Thu</dt>
                  <dd className="text-track-dark-ink">06:30–19:30</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Friday</dt>
                  <dd className="text-track-dark-ink">06:30–17:00</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Saturday</dt>
                  <dd className="text-track-dark-ink">07:00–12:00</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt>Sunday</dt>
                  <dd>Closed</dd>
                </div>
              </dl>
            </div>

            <nav aria-label="Footer">
              <h2 className="font-display text-base font-extrabold text-tape-teal">
                Explore
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <SiteLink href="/" className="text-track-dark-ink no-underline hover:text-tape-teal hover:underline">
                    Home
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/conditions/" className="text-track-dark-ink no-underline hover:text-tape-teal hover:underline">
                    Conditions
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/team/" className="text-track-dark-ink no-underline hover:text-tape-teal hover:underline">
                    Our team
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/fees/" className="text-track-dark-ink no-underline hover:text-tape-teal hover:underline">
                    Fees &amp; rebates
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/contact/" className="text-track-dark-ink no-underline hover:text-tape-teal hover:underline">
                    Contact
                  </SiteLink>
                </li>
              </ul>
            </nav>
          </div>

          {/* Column 3: Direct contact, emergency line & theme toggle */}
          <div className="flex flex-col justify-between gap-5">
            <div className="space-y-2.5">
              <h2 className="font-display text-base font-extrabold text-tape-teal">
                Reception
              </h2>
              <p>
                <a
                  href={telHref(business.phone)}
                  className="inline-flex items-center gap-2 font-mono text-sm font-bold text-chalk no-underline hover:text-tape-teal hover:underline"
                >
                  <PhoneIcon className="h-4 w-4 text-coral" />
                  <span>{business.phone}</span>
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${business.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-track-dark-ink underline decoration-tape-teal/70 hover:text-tape-teal"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-tape-teal" />
                  <span className="wrap-anywhere">{business.email}</span>
                </a>
              </p>
              <p className="rounded-lg border border-track-dark-line bg-track-dark-surface/80 px-3 py-2 text-xs font-semibold text-track-dark-ink">
                {business.emergencyNotice}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-4 border-t border-track-dark-line pt-4">
              <span className="text-xs text-track-dark-muted">
                with <span role="img" aria-label="love">❤️</span>{' '}
                <a
                  className="text-track-dark-ink no-underline hover:text-tape-teal hover:underline"
                  href="https://jamstacks.net"
                >
                  jamstacks.net
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* The wordmark painted on the track at the finish, lying flat in perspective */}
      <p
        aria-hidden="true"
        className="no-print pointer-events-none absolute inset-x-0 -bottom-[0.18em] -z-10 text-center font-display text-[clamp(6rem,21vw,20rem)] leading-none font-black tracking-[-0.06em] text-chalk/[0.07] select-none [transform:perspective(600px)_rotateX(40deg)] [transform-origin:50%_100%]"
      >
        momentum
      </p>
    </footer>
  );
}
