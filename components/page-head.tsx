import type { ReactNode } from 'react';
import { TapeSeam } from './artwork/dividers';

/**
 * Inner-page header: a floodlit lane band with a display-scale heading on the left,
 * the page's taped motif enlarged on the right, and a tape strip pulled across its lower edge.
 */
export function PageHead({
  eyebrow,
  title,
  children,
  id,
  motif,
  tape = 'coral',
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  id?: string;
  /** Page-specific inline SVG motif rendered on the right. */
  motif?: ReactNode;
  tape?: 'coral' | 'teal';
}) {
  return (
    <>
      <header className="floodlit print-clean relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="no-print pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_55%_80%_at_85%_10%,rgba(61,217,201,0.17),transparent_70%)]"
        />
        {/* lane lines running the length of the band */}
        <div
          aria-hidden="true"
          className="no-print pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 opacity-60"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to bottom, transparent 0 calc(2.5rem - 2px), color-mix(in oklab, var(--chalk) 22%, transparent) calc(2.5rem - 2px) 2.5rem)',
          }}
        />
        <div className="wrap grid gap-8 pt-14 pb-24 sm:pt-20 sm:pb-28 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">{eyebrow}</p>
            <h1 id={id} className="display-lg mt-5 text-[clamp(2.9rem,7.4vw,6.4rem)] text-ink">
              {title}
            </h1>
            {children ? (
              <div className="mt-6 max-w-(--measure) text-[clamp(1.08rem,1.5vw,1.25rem)] leading-relaxed text-muted">
                {children}
              </div>
            ) : null}
          </div>
          {motif ? (
            <div className="no-print shrink-0 self-end md:-mb-6 [&>svg]:!w-[clamp(11rem,24vw,22rem)]">
              {motif}
            </div>
          ) : null}
        </div>
      </header>
      <TapeSeam color={tape} angle={-2.5} height="clamp(2.25rem,3.6vw,3.25rem)" />
    </>
  );
}
