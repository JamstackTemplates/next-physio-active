import type { CSSProperties } from 'react';

const MAX_SCALE = 20;

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const start = polar(cx, cy, r, startDeg);
  const end = polar(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

/**
 * Half-circle goniometer protractor gauge displaying a condition's typical
 * session range (1 to 20 sessions) with shaded band and sweeping needle.
 */
export function GoniometerGauge({
  min,
  max,
  color = 'coral',
}: {
  min: number;
  max: number;
  color?: 'coral' | 'teal';
}) {
  // Semi-circle spans -180deg (left, 0 sessions) to 0deg (right, 20 sessions)
  const startDeg = -180 + (min / MAX_SCALE) * 180;
  const endDeg = -180 + (max / MAX_SCALE) * 180;
  const midSessions = (min + max) / 2;
  // Needle points straight up (0deg rotation) at 10 sessions; -90deg at 0; +90deg at 20
  const needleRotation = -90 + (midSessions / MAX_SCALE) * 180;
  const accent = color === 'coral' ? 'var(--coral)' : 'var(--tape-teal)';

  const ticks = [0, 4, 8, 10, 12, 16, 20];

  return (
    <div className="flex items-center gap-3">
      <svg
        viewBox="0 0 96 54"
        width="88"
        height="50"
        aria-hidden="true"
        className="shrink-0 overflow-visible"
      >
        {/* Protractor baseline & outer scale arc */}
        <line x1="8" y1="46" x2="88" y2="46" stroke="var(--line)" strokeWidth="1.5" strokeLinecap="round" />
        <path d={arcPath(48, 46, 36, -180, 0)} stroke="var(--line)" strokeWidth="6" fill="none" strokeLinecap="round" />

        {/* Shaded min..max session range */}
        <path
          d={arcPath(48, 46, 36, startDeg, endDeg)}
          stroke={accent}
          strokeWidth="7"
          fill="none"
          strokeLinecap="round"
        />

        {/* Radial protractor tick marks */}
        {ticks.map(val => {
          const deg = -180 + (val / MAX_SCALE) * 180;
          const inner = polar(48, 46, val % 10 === 0 ? 25 : 28, deg);
          const outer = polar(48, 46, 31, deg);
          return (
            <line
              key={val}
              x1={inner.x.toFixed(1)}
              y1={inner.y.toFixed(1)}
              x2={outer.x.toFixed(1)}
              y2={outer.y.toFixed(1)}
              stroke="var(--muted)"
              strokeWidth={val === 10 ? '1.6' : '1.1'}
              strokeLinecap="round"
            />
          );
        })}

        {/* Sweeping needle */}
        <g
          className="goniometer-needle"
          style={{ '--needle-deg': `${needleRotation.toFixed(1)}deg` } as CSSProperties}
        >
          <line x1="48" y1="46" x2="48" y2="15" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
        </g>

        {/* Pivot */}
        <circle cx="48" cy="46" r="4.2" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="48" cy="46" r="1.5" fill={accent} />
      </svg>

      <div className="leading-tight">
        <span className="block font-mono text-sm font-bold text-ink">
          {min}–{max} sessions
        </span>
        <span className="block font-mono text-[0.7rem] tracking-wide text-muted uppercase">
          typical plan
        </span>
      </div>
    </div>
  );
}
