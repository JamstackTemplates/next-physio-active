import { DarkModeToggle } from 'jamstacks';
import { business, telHref } from '../content/business';
import { PhoneIcon } from './artwork/clinic-icons';
import { SiteLink } from './site-link';

const NAV_ITEMS = [
  { href: '/conditions/', label: 'Conditions' },
  { href: '/team/', label: 'Our team' },
  { href: '/fees/', label: 'Fees & rebates' },
  { href: '/contact/', label: 'Contact' },
] as const;

export function SiteHeader() {
  return (
    <header className="double-lane-bottom sticky top-0 z-40 bg-surface/95 backdrop-blur-xs">
      <div className="wrap py-3 md:py-0">
        {/* Top row: wordmark on left; desktop nav + phone + Enquire on right */}
        <div className="flex items-center justify-between gap-3 md:min-h-[4.75rem]">
          <SiteLink
            href="/"
            className="group relative inline-flex items-center gap-2.5 no-underline hover:no-underline"
          >
            <span className="relative inline-flex flex-col leading-none">
              {/* Short angled coral tape strip behind the M */}
              <span
                aria-hidden="true"
                className="tape-surface tape-coral absolute -top-0.5 -left-1.5 h-6 w-7 -rotate-8 rounded-md opacity-90 transition-transform group-hover:-rotate-12"
              />
              <span className="relative font-display text-[1.45rem] font-black tracking-tight text-ink sm:text-[1.6rem]">
                Momentum
              </span>
              <span className="relative mt-0.5 font-mono text-[0.68rem] font-bold tracking-[0.28em] text-primary-ink uppercase">
                PHYSIO
              </span>
            </span>
          </SiteLink>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map(item => (
              <SiteLink
                key={item.href}
                href={item.href}
                markCurrent="page"
                className="py-2 font-display text-[0.98rem] font-bold text-ink no-underline transition-colors hover:text-primary-ink hover:underline"
              >
                {item.label}
              </SiteLink>
            ))}
          </nav>

          {/* Right actions: desktop phone + compact Enquire button on every width */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={telHref(business.phone)}
              className="hidden items-center gap-1.5 rounded-md px-2 py-1.5 font-mono text-sm font-bold text-ink no-underline transition-colors hover:text-primary-ink hover:underline lg:inline-flex"
            >
              <PhoneIcon className="h-4 w-4 text-coral-ink" />
              <span>{business.phone}</span>
            </a>
            <DarkModeToggle className="no-print" style={{ width: '2.5rem', height: '2.5rem' }} />
            <SiteLink href="/contact/" className="button min-h-10 px-4 py-2 text-sm sm:text-[0.95rem]">
              Enquire
            </SiteLink>
          </div>
        </div>

        {/* Mobile horizontally scrollable nav row */}
        <nav
          aria-label="Mobile"
          className="-mx-4 mt-2.5 flex items-center gap-1.5 overflow-x-auto border-t border-line/70 px-4 pt-2 pb-1 md:hidden"
        >
          {NAV_ITEMS.map(item => (
            <SiteLink
              key={item.href}
              href={item.href}
              markCurrent="page"
              className="shrink-0 rounded-full border border-line bg-bg px-3.5 py-1.5 font-display text-sm font-bold text-ink no-underline transition-colors hover:border-primary hover:text-primary-ink"
            >
              {item.label}
            </SiteLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
