'use client';

import { useEffect, useState } from 'react';
import { openingLabel, type OpeningHours } from '../lib/hours';
import { site } from '../lib/site';

/**
 * Neutral static/no-JS output ("See opening hours"); updates in the browser
 * using Australia/Brisbane (or configured site.timeZone) every minute.
 */
export function OpenBadge({
  hours,
  variant = 'default',
}: {
  hours: readonly OpeningHours[];
  variant?: 'default' | 'on-dark';
}) {
  const [label, setLabel] = useState('See opening hours');

  useEffect(() => {
    const update = () => setLabel(openingLabel(hours, site.timeZone));
    update();
    const timer = setInterval(update, 60_000);
    return () => clearInterval(timer);
  }, [hours]);

  const isOpen = label.startsWith('Open now');
  const isClosed = label.startsWith('Closed');

  const dotColor = isOpen
    ? 'bg-tape-teal'
    : isClosed
      ? 'bg-coral'
      : 'bg-muted';

  const containerClass =
    variant === 'on-dark'
      ? 'border-track-dark-line bg-track-dark-surface text-track-dark-ink'
      : 'border-line bg-surface text-ink';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-xs font-bold ${containerClass}`}
    >
      <span aria-hidden="true" className={`h-2.5 w-2.5 shrink-0 rounded-full ${dotColor}`} />
      <span>{label}</span>
    </span>
  );
}
