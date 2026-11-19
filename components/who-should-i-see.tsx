import type { ReactNode } from 'react';
import { SiteLink } from './site-link';

/* ── "Who should I see?" 3-lane matching diagram ─────────────────────── */

function MatchGuideRoot({
  heading,
  note,
  actionLabel,
  children,
}: {
  heading: string;
  note: ReactNode;
  actionLabel: string;
  children: ReactNode;
}) {
  return (
    <section className="track-floor border-y border-line py-14 sm:py-18">
      <div className="wrap">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Matching guide</p>
            <h2 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">
              {heading}
            </h2>
          </div>
          <SiteLink href="/contact/" className="button self-start md:self-auto">
            {actionLabel}
          </SiteLink>
        </div>

        <ol className="mt-8 space-y-4">{children}</ol>

        <p className="mt-6 max-w-2xl rounded-xl border border-line bg-surface px-5 py-4 text-sm font-semibold text-ink">
          {note}
        </p>
      </div>
    </section>
  );
}

function MatchLane({
  lane,
  situation,
  match,
  clinicianIds,
}: {
  lane: string;
  situation: string;
  match: string;
  clinicianIds: readonly { id: string; label: string }[];
}) {
  return (
    <li className="grid items-center gap-4 rounded-2xl border-2 border-line bg-surface p-5 sm:grid-cols-[auto_1fr_auto] sm:gap-6">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-track-dark font-display text-xl font-black text-tape-teal">
        {lane}
      </span>
      <div>
        <h3 className="font-display text-lg font-black text-ink">{situation}</h3>
        <p className="mt-1 text-sm text-muted">{match}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {clinicianIds.map(c => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="rounded-full border border-line bg-bg px-3 py-1.5 font-mono text-xs font-bold text-ink no-underline transition-colors hover:border-primary hover:bg-track hover:no-underline"
          >
            {c.label}
          </a>
        ))}
      </div>
    </li>
  );
}

export const WhoShouldISee = Object.assign(MatchGuideRoot, {
  Lane: MatchLane,
});
