'use client';

import { useEffect, useState } from 'react';
import {
  practitioners,
  ROLE_LABELS,
  type PractitionerRole,
} from '../content/practitioners';
import { PractitionerJersey } from './practitioner-jersey';

type RoleFilter = 'all' | PractitionerRole;

/**
 * Interactive Team sheet of training jerseys:
 * - Role filter chips (All, Physiotherapists, Exercise physiology) appear once hydrated;
 *   without JS, all practitioners render and chips remain hidden.
 * - Grid: 3 across at 1440px, 2 at tablet, 1 at 390px, alternating ±1° rotations.
 */
export function TeamSheet() {
  const [hydrated, setHydrated] = useState(false);
  const [filter, setFilter] = useState<RoleFilter>('all');

  useEffect(() => {
    setHydrated(true);
  }, []);

  const visible =
    filter === 'all' ? practitioners : practitioners.filter(p => p.role === filter);

  const options: { value: RoleFilter; label: string; count: number }[] = [
    { value: 'all', label: 'All', count: practitioners.length },
    {
      value: 'physiotherapist',
      label: ROLE_LABELS.physiotherapist,
      count: practitioners.filter(p => p.role === 'physiotherapist').length,
    },
    {
      value: 'exercise-physiologist',
      label: ROLE_LABELS['exercise-physiologist'],
      count: practitioners.filter(p => p.role === 'exercise-physiologist').length,
    },
  ];

  return (
    <section className="wrap py-10 sm:py-14" aria-label="Practitioners">
      {/* Role filter chips — progressive enhancement (hidden without JS) */}
      {hydrated ? (
        <div
          role="group"
          aria-label="Filter team by discipline"
          className="no-print mb-8 flex flex-wrap items-center gap-2.5"
        >
          {options.map(opt => {
            const active = filter === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(opt.value)}
                className={`inline-flex min-h-11 items-center gap-2 rounded-full border-2 px-4 py-2 font-display text-sm font-extrabold transition-colors ${
                  active
                    ? 'border-primary bg-primary text-on-primary'
                    : 'border-line bg-surface text-ink hover:border-primary'
                }`}
              >
                <span>{opt.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-xs ${
                    active ? 'bg-on-primary/20 text-on-primary' : 'bg-track text-ink'
                  }`}
                >
                  {opt.count}
                </span>
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((person, idx) => (
          <PractitionerJersey
            key={person.id}
            practitioner={person}
            tilt={idx % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
}
