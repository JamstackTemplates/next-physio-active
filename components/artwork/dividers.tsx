import type React from 'react';
import { useId } from 'react';

/**
 * Home section separator: double track lane line with an oversized chalk-style
 * lane numeral and a short angled kinesio tape strip crossing it.
 */
export function LaneDivider({
  lane,
  tape = 'coral',
  className = '',
}: {
  lane: string;
  tape?: 'coral' | 'teal';
  className?: string;
}) {
  const uid = useId().replace(/:/g, '');
  const hatchId = `lane-tape-${uid}`;
  const fillColor = tape === 'coral' ? 'var(--coral)' : 'var(--tape-teal)';
  const edgeColor = tape === 'coral' ? 'var(--coral-edge)' : 'var(--tape-teal-edge)';

  return (
    <div
      aria-hidden="true"
      className={`no-print relative flex items-center gap-4 py-1 ${className}`}
    >
      <span
        className="shrink-0 font-display text-3xl font-black tracking-tight text-ink/20 sm:text-4xl"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {lane}
      </span>
      <div className="relative h-6 flex-1">
        <svg
          viewBox="0 0 800 24"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
          data-art="decorative"
        >
          <defs>
            <pattern id={hatchId} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <rect width="6" height="6" fill={fillColor} />
              <path d="M0 0v6M0 0h6" stroke="var(--ink)" strokeOpacity="0.08" strokeWidth="1" />
            </pattern>
          </defs>
          <line x1="0" y1="9" x2="800" y2="9" stroke="var(--line)" strokeWidth="2" />
          <line x1="0" y1="15" x2="800" y2="15" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="8 6" />
        </svg>
        <div
          className={`tape-stick tape-surface ${tape === 'coral' ? 'tape-coral' : 'tape-teal'} pointer-events-none absolute top-1/2 left-8 h-3.5 w-16 -translate-y-1/2 -rotate-6 rounded-full shadow-xs sm:left-16 sm:w-20`}
          style={{ borderColor: edgeColor }}
        />
      </div>
    </div>
  );
}

/**
 * Inner-page separator: a single long coral or teal kinesio tape strip
 * pulled across the full width at an angle, with rounded ends and a stretch ripple.
 */
export function TapeDivider({
  color = 'coral',
  className = '',
}: {
  color?: 'coral' | 'teal';
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`no-print py-14 sm:py-20 ${className}`}>
      <TapeSeam color={color} angle={color === 'coral' ? -2.5 : 2} height="clamp(2rem,3.4vw,3rem)" />
    </div>
  );
}

/**
 * Full-bleed kinesio tape strip pulled across a section boundary at an angle.
 * Place it between two sections: it overlaps both, as if the page has been taped.
 * The strip carries a faint repeated print, like a branded tape roll.
 */
export function TapeSeam({
  color = 'coral',
  angle = -4,
  height,
  className = '',
}: {
  color?: 'coral' | 'teal';
  angle?: number;
  /** CSS length for the strip width (thickness). */
  height?: string;
  className?: string;
}) {
  const style = {
    '--seam-angle': `${angle}deg`,
    ...(height ? { '--seam-h': height } : {}),
  } as React.CSSProperties;
  return (
    <div aria-hidden="true" className={`tape-seam no-print ${className}`}>
      <span
        className={`tape-stick tape-surface ${color === 'coral' ? 'tape-coral' : 'tape-teal'}`}
        style={style}
      >
        {Array.from({ length: 16 }, (_, i) => (
          <span key={i}>momentum</span>
        ))}
      </span>
    </div>
  );
}

/** Oversized painted track numeral lying on the floor in perspective. */
export function LaneNumeral({ children, className = '' }: { children: string; className?: string }) {
  return (
    <span aria-hidden="true" className={`lane-numeral no-print ${className}`}>
      {children}
    </span>
  );
}
