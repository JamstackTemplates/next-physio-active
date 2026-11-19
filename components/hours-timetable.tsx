'use client';

import { useEffect, useState } from 'react';
import { currentWeekday, type Day, type OpeningHours } from '../lib/hours';
import { site } from '../lib/site';

/**
 * Seven-row weekly timetable. Static and no-JS renders stay neutral;
 * today's row in the clinic's IANA time zone highlights only after hydration.
 */
export function HoursTimetable({ hours }: { hours: readonly OpeningHours[] }) {
  const [today, setToday] = useState<Day | null>(null);

  useEffect(() => {
    const update = () => setToday(currentWeekday(site.timeZone));
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <dl className="divide-y divide-line/80 rounded-xl border border-line bg-surface text-sm">
      {hours.map(entry => {
        const isToday = today === entry.day;
        const closed = !entry.opens || !entry.closes;
        return (
          <div
            key={entry.day}
            data-today={isToday ? 'true' : undefined}
            className={`flex items-center justify-between gap-4 px-4 py-2.5 ${
              isToday ? 'bg-track font-bold' : ''
            }`}
          >
            <dt className="flex items-center gap-2 text-ink">
              <span>{entry.day}</span>
              {isToday ? (
                <span className="rounded-full bg-primary px-2 py-0.5 font-mono text-[0.65rem] font-bold text-on-primary uppercase">
                  Today
                </span>
              ) : null}
            </dt>
            <dd className={`font-mono text-xs sm:text-sm ${closed ? 'text-muted' : 'font-bold text-ink'}`}>
              {closed ? 'Closed' : `${entry.opens} – ${entry.closes}`}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
