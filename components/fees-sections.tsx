import type { ReactNode } from 'react';
import { fees, formatAud } from '../content/fees';
import { rebates, type RebateId } from '../content/rebates';
import { RebateIcon, TapeRollBullet } from './artwork/clinic-icons';
import { SiteLink } from './site-link';

const REBATE_TAB_STYLES: Record<RebateId, { label: string; bg: string }> = {
  'private-health': { label: 'Private', bg: 'bg-tape-teal text-[#081B1E]' },
  'medicare-cdm': { label: 'Medicare', bg: 'bg-chalk text-[#081B1E]' },
  dva: { label: 'DVA', bg: 'bg-coral text-[#081B1E]' },
  'workcover-ctp': { label: 'WorkCover', bg: 'bg-[#F4D35E] text-[#081B1E]' },
};

/**
 * Stadium scoreboard fee table:
 * Dark-teal panel with Space Mono duration, price & subtle item code,
 * four colour-coded rebate tape tabs per row, and dimmed unavailable rows.
 */
export function FeeScoreboard({
  heading,
  lead,
}: {
  heading: string;
  lead: ReactNode;
}) {
  return (
    <section className="wrap py-10 sm:py-14">
      <div className="scoreboard-print overflow-hidden rounded-2xl border-2 border-track-dark-line bg-track-dark text-track-dark-ink shadow-md">
        {/* Scoreboard header strip */}
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-track-dark-line bg-track-dark-surface px-6 py-5">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.18em] text-tape-teal uppercase">
              Fee scoreboard · AUD
            </p>
            <h2 className="mt-1 font-display text-2xl font-black text-chalk sm:text-3xl">
              {heading}
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm text-track-dark-muted">{lead}</p>
          </div>

          <SiteLink href="/contact/" className="button no-print">
            Enquire about a session
          </SiteLink>
        </div>

        {/* Semantic accessible table; stacks neatly on narrow mobile viewports */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <caption className="visually-hidden">
              Momentum Physio consultation and small-group class fees, durations, private health item codes and rebate pathways
            </caption>
            <thead className="hidden border-b border-track-dark-line font-mono text-xs tracking-wider text-track-dark-muted uppercase md:table-header-group">
              <tr>
                <th scope="col" className="px-6 py-3.5">
                  Appointment or class
                </th>
                <th scope="col" className="px-4 py-3.5">
                  Duration
                </th>
                <th scope="col" className="px-4 py-3.5">
                  Rebate pathways
                </th>
                <th scope="col" className="px-6 py-3.5 text-right">
                  Fee
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-track-dark-line/80">
              {fees.map(item => (
                <tr
                  key={item.id}
                  data-fee-id={item.id}
                  data-available={item.available ? 'true' : 'false'}
                  className={`block px-5 py-4 md:table-row md:px-0 md:py-0 ${
                    item.available ? '' : 'opacity-65'
                  }`}
                >
                  {/* Row title + item code + mobile price */}
                  <th
                    scope="row"
                    className="block font-normal md:table-cell md:px-6 md:py-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="block font-display text-lg font-extrabold text-chalk">
                          {item.name}
                        </span>
                        <span className="mt-0.5 flex flex-wrap items-center gap-2 font-mono text-xs text-track-dark-muted">
                          <span className="md:hidden">{item.minutes} min</span>
                          {item.itemCode ? <span>Item {item.itemCode}</span> : null}
                          <span className="capitalize">
                            · {item.kind === 'class' ? 'Small-group class' : 'One-to-one'}
                          </span>
                        </span>
                      </div>

                      {/* Mobile price/status column */}
                      <div className="shrink-0 text-right md:hidden">
                        {item.available ? (
                          <span className="font-mono text-xl font-bold text-tape-teal">
                            {formatAud(item.priceAud)}
                          </span>
                        ) : (
                          <span className="inline-block rounded-md border border-coral/60 bg-coral/15 px-2.5 py-1 font-mono text-[0.7rem] font-bold text-coral">
                            Not taking new bookings right now
                          </span>
                        )}
                      </div>
                    </div>
                  </th>

                  {/* Desktop duration */}
                  <td className="hidden px-4 py-4 font-mono text-sm font-bold text-track-dark-ink md:table-cell">
                    {item.minutes} min
                  </td>

                  {/* Rebate tape tabs */}
                  <td className="mt-3 block md:mt-0 md:table-cell md:px-4 md:py-4">
                    <ul className="flex flex-wrap gap-1.5">
                      {item.rebates.map(rid => {
                        const tab = REBATE_TAB_STYLES[rid];
                        return (
                          <li
                            key={rid}
                            className={`rounded-full px-2.5 py-0.5 font-mono text-[0.7rem] font-bold ${tab.bg}`}
                          >
                            {tab.label}
                          </li>
                        );
                      })}
                    </ul>
                  </td>

                  {/* Desktop price or unavailable badge (never a price CTA when unavailable) */}
                  <td className="hidden px-6 py-4 text-right md:table-cell">
                    {item.available ? (
                      <span className="font-mono text-xl font-bold text-tape-teal">
                        {formatAud(item.priceAud)}
                      </span>
                    ) : (
                      <span className="inline-block rounded-md border border-coral/60 bg-coral/15 px-3 py-1 font-mono text-xs font-bold text-coral">
                        Not taking new bookings right now
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/** 2x2 grid of taped health-fund cards explaining the four rebate pathways. */
export function RebateFundCards({
  heading,
  lead,
}: {
  heading: string;
  lead: ReactNode;
}) {
  return (
    <section className="wrap py-8 sm:py-12">
      <div className="max-w-2xl">
        <p className="eyebrow">Claiming pathways</p>
        <h2 className="mt-2 font-display text-3xl font-black text-ink sm:text-4xl">
          {heading}
        </h2>
        <p className="mt-2.5 text-base text-muted">{lead}</p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {rebates.map((pathway, idx) => {
          const coral = idx % 2 === 0;
          return (
            <article
              key={pathway.id}
              id={pathway.id}
              className="relative flex flex-col rounded-2xl border-2 border-line bg-surface p-6 shadow-xs"
            >
              {/* Angled kinesio tape strip holding the top corner of each fund card */}
              <div
                aria-hidden="true"
                className={`tape-stick tape-surface ${
                  coral ? 'tape-coral' : 'tape-teal'
                } absolute -top-2.5 right-6 h-5 w-16 rotate-3 rounded-full`}
              />

              <div className="flex items-center gap-4">
                <RebateIcon id={pathway.id} className="h-12 w-12 shrink-0" />
                <div>
                  <span className="font-mono text-[0.7rem] font-bold tracking-wider text-coral-ink uppercase">
                    Pathway 0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl font-black text-ink">
                    {pathway.name}
                  </h3>
                </div>
              </div>

              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-mono text-xs font-bold tracking-wider text-muted uppercase">
                    Who it&apos;s for
                  </dt>
                  <dd className="mt-1 text-ink">{pathway.forWho}</dd>
                </div>
                <div>
                  <dt className="font-mono text-xs font-bold tracking-wider text-muted uppercase">
                    What to bring
                  </dt>
                  <dd className="mt-1">
                    <ul className="space-y-1 text-ink">
                      {pathway.bring.map(item => (
                        <li key={item} className="flex items-center gap-2">
                          <TapeRollBullet className="h-3.5 w-3.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="rounded-xl bg-track px-4 py-3">
                  <dt className="font-mono text-xs font-bold tracking-wider text-primary-ink uppercase">
                    What we do
                  </dt>
                  <dd className="mt-1 font-semibold text-ink">{pathway.weDo}</dd>
                </div>
              </dl>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/** Clipboard "What to bring" checklist, cancellation note, and boxed rebate disclaimer. */
export function BringClipboard({
  heading,
  items,
  cancellation,
  disclaimer,
  ctaLabel,
}: {
  heading: string;
  items: readonly string[];
  cancellation: ReactNode;
  disclaimer: ReactNode;
  ctaLabel: string;
}) {
  return (
    <section className="wrap py-8 pb-14">
      <div className="relative rounded-2xl border-2 border-line bg-surface p-6 shadow-xs sm:p-8">
        {/* Clipboard top metal clip */}
        <div
          aria-hidden="true"
          className="mx-auto -mt-10 mb-5 h-6 w-28 rounded-t-xl border-2 border-line bg-track-dark"
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="eyebrow">Before your visit</p>
            <h2 className="mt-2 font-display text-2xl font-black text-ink sm:text-3xl">
              {heading}
            </h2>
            <ul className="mt-5 space-y-3 text-base text-ink">
              {items.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <TapeRollBullet className="mt-1 h-4 w-4" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-line bg-track p-5">
              <h3 className="font-mono text-xs font-bold tracking-wider text-primary-ink uppercase">
                Changes &amp; cancellations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{cancellation}</p>
            </div>

            <div className="print-clean rounded-xl border-2 border-coral/50 bg-bg p-5">
              <h3 className="font-mono text-xs font-bold tracking-wider text-coral-ink uppercase">
                Rebate disclaimer
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{disclaimer}</p>
            </div>

            <SiteLink href="/contact/" className="button no-print w-full">
              {ctaLabel}
            </SiteLink>
          </div>
        </div>
      </div>
    </section>
  );
}
