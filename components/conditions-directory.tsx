'use client';

import { useEffect, useState, type ReactNode } from 'react';
import { conditionsForRegion } from '../content/conditions';
import { getPractitionerById, practitionerInitials } from '../content/practitioners';
import { regions, type RegionId } from '../content/regions';
import { GoniometerGauge } from './artwork/goniometer-gauge';
import { InteractiveBodyMap } from './artwork/taped-body-map';
import { SiteLink } from './site-link';

const VALID_REGION_IDS = new Set<string>(regions.map(r => r.id));

function readHashRegion(): RegionId | null {
  if (typeof window === 'undefined') return null;
  const raw = window.location.hash.replace(/^#/, '').trim();
  return VALID_REGION_IDS.has(raw) ? (raw as RegionId) : null;
}

/**
 * Interactive Conditions directory:
 * - Desktop: sticky Taped Body Map on left, clinical condition charts scrolling on right.
 * - Mobile: compact horizontal strip of region chips above the condition list.
 * - Without JS: every region control is a plain #region anchor link and all 8 sections render.
 */
export function ConditionsDirectory() {
  const [hydrated, setHydrated] = useState(false);
  const [selected, setSelected] = useState<RegionId | null>(null);

  useEffect(() => {
    setHydrated(true);
    const applyFromHash = () => setSelected(readHashRegion());
    applyFromHash();
    window.addEventListener('hashchange', applyFromHash);
    return () => window.removeEventListener('hashchange', applyFromHash);
  }, []);

  function selectRegion(region: RegionId | null) {
    setSelected(region);
    if (typeof window !== 'undefined') {
      const nextUrl = region
        ? `${window.location.pathname}#${region}`
        : window.location.pathname;
      window.history.replaceState(null, '', nextUrl);
    }
  }

  const visibleRegions = selected ? regions.filter(r => r.id === selected) : regions;

  return (
    <div className="wrap py-10 sm:py-14">
      {/* Mobile compact horizontal strip of region chips */}
      <div
        aria-label="Filter conditions by body region"
        className="no-print -mx-4 mb-8 flex items-center gap-2 overflow-x-auto px-4 pb-2 lg:hidden"
      >
        {hydrated ? (
          <button
            type="button"
            aria-pressed={selected === null}
            onClick={() => selectRegion(null)}
            className={`body-map-control shrink-0 rounded-full border-2 px-4 py-2 font-mono text-xs font-bold ${
              selected === null
                ? 'border-primary bg-primary text-on-primary'
                : 'border-line bg-surface text-ink'
            }`}
          >
            All regions
          </button>
        ) : null}

        {regions.map(region => {
          const count = conditionsForRegion(region.id).length;
          const active = selected === region.id;
          const chipClass = `body-map-control shrink-0 rounded-full border-2 px-3.5 py-2 text-sm font-bold ${
            active
              ? 'border-primary bg-primary text-on-primary'
              : 'border-line bg-surface text-ink'
          }`;

          if (!hydrated) {
            return (
              <a
                key={region.id}
                href={`#${region.id}`}
                className={`${chipClass} no-underline hover:no-underline`}
              >
                {region.label} · {count}
              </a>
            );
          }

          return (
            <button
              key={region.id}
              type="button"
              aria-pressed={active}
              onClick={() => selectRegion(active ? null : region.id)}
              className={chipClass}
            >
              {region.label} · {count}
            </button>
          );
        })}
      </div>

      {/* Desktop two-column split: sticky body map left, clinical chart right */}
      <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-start">
        <aside aria-label="Body map region filter" className="no-print hidden lg:sticky lg:top-24 lg:block">
          <InteractiveBodyMap
            selected={selected}
            hydrated={hydrated}
            onSelect={selectRegion}
          />
        </aside>

        <div className="space-y-12">
          {/* Active filter status bar */}
          {hydrated && selected ? (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border-2 border-primary/40 bg-track px-4 py-3 text-sm"
            >
              <p className="font-semibold text-ink">
                Showing <span className="font-bold">{regions.find(r => r.id === selected)?.label}</span>{' '}
                conditions.
              </p>
              <button
                type="button"
                onClick={() => selectRegion(null)}
                className="text-link font-mono text-xs uppercase"
              >
                Show all 8 regions
              </button>
            </div>
          ) : null}

          {visibleRegions.map(region => {
            const items = conditionsForRegion(region.id);
            const isCoral = region.tapeColor === 'coral';
            return (
              <section
                key={region.id}
                id={region.id}
                aria-labelledby={`heading-${region.id}`}
                className="scroll-mt-24"
              >
                {/* Region header with small tape strip in the region's colour */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-line pb-3">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`h-4 w-10 shrink-0 -rotate-6 rounded-full tape-surface ${
                        isCoral ? 'tape-coral' : 'tape-teal'
                      }`}
                    />
                    <div>
                      <h2
                        id={`heading-${region.id}`}
                        className="font-display text-2xl font-black text-ink sm:text-3xl"
                      >
                        {region.label}
                      </h2>
                      <p className="text-sm text-muted">{region.blurb}</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-track px-2.5 py-1 font-mono text-xs font-bold text-ink">
                    {items.length} {items.length === 1 ? 'condition' : 'conditions'}
                  </span>
                </div>

                {/* Clinical chart rows */}
                <ul className="mt-4 divide-y divide-line overflow-hidden rounded-2xl border-2 border-line bg-surface">
                  {items.map(condition => (
                    <li
                      key={condition.id}
                      id={condition.id}
                      className="grid gap-4 p-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6"
                    >
                      <div>
                        <h3 className="font-display text-lg font-black text-ink sm:text-xl">
                          {condition.name}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {condition.summary}
                        </p>

                        {/* Clinician jersey-number links to /team/#id */}
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[0.7rem] font-bold tracking-wider text-muted uppercase">
                            Clinicians:
                          </span>
                          {condition.practitioners.map(pid => {
                            const person = getPractitionerById(pid);
                            if (!person) return null;
                            return (
                              <SiteLink
                                key={pid}
                                href={`/team/#${person.id}`}
                                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-2.5 py-1 text-xs font-bold text-ink no-underline transition-colors hover:border-primary hover:bg-track hover:no-underline"
                              >
                                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-track-dark font-mono text-[0.65rem] font-bold text-chalk">
                                  #{person.number}
                                </span>
                                <span>
                                  {practitionerInitials(person.name)} · {person.name}
                                </span>
                              </SiteLink>
                            );
                          })}
                        </div>
                      </div>

                      <div className="border-t border-line/70 pt-3 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
                        <GoniometerGauge
                          min={condition.sessions.min}
                          max={condition.sessions.max}
                          color={region.tapeColor}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Coral kinesio-tape note band at the bottom of /conditions/. */
export function NotOnListBand({
  heading,
  children,
  actionLabel,
}: {
  heading: string;
  children: ReactNode;
  actionLabel: string;
}) {
  return (
    <section className="wrap pb-8">
      <div className="skew-accent skew-accent-coral px-6 py-9 sm:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-black text-[#0D2A2E] sm:text-3xl">
              {heading}
            </h2>
            <div className="mt-2.5 space-y-2 text-base font-semibold text-[#0D2A2E]/85">
              {children}
            </div>
          </div>
          <SiteLink href="/contact/" className="button shrink-0 self-start lg:self-center">
            {actionLabel}
          </SiteLink>
        </div>
      </div>
    </section>
  );
}
