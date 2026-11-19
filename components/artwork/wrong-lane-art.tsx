import { useId } from 'react';

/**
 * 404 illustration "Wrong lane":
 * Running sneaker stepping across track lines onto lane "?",
 * tangled loop of coral kinesio tape, and a goniometer needle swinging past its limit.
 */
export function WrongLaneArt({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');
  const hatchId = `wrong-tape-${uid}`;

  return (
    <svg
      viewBox="0 0 460 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of a running sneaker stepping across track lines onto a lane marked with a question mark, surrounded by tangled coral tape and a goniometer dial"
      className={`block h-auto w-full ${className}`}
    >
      <defs>
        <pattern id={hatchId} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="var(--coral)" />
          <path d="M0 0v6M0 0h6" stroke="var(--ink)" strokeOpacity="0.09" strokeWidth="1" />
        </pattern>
      </defs>

      {/* Track floor background */}
      <rect x="16" y="24" width="428" height="312" rx="22" fill="var(--track)" stroke="var(--line)" strokeWidth="2" />

      {/* Slanted track lanes */}
      <g strokeLinecap="round">
        <line x1="36" y1="248" x2="424" y2="196" stroke="var(--tape-teal)" strokeWidth="3" />
        <line x1="36" y1="258" x2="424" y2="206" stroke="var(--coral)" strokeWidth="2" />
        <line x1="36" y1="308" x2="424" y2="256" stroke="var(--line)" strokeWidth="2.5" strokeDasharray="10 8" />
      </g>

      {/* Lane "?" chalk marking */}
      <text
        x="325"
        y="302"
        fill="var(--ink)"
        fillOpacity="0.22"
        fontFamily="var(--font-display)"
        fontWeight="900"
        fontSize="68"
        transform="skewX(-12)"
      >
        ?
      </text>
      <text
        x="86"
        y="314"
        fill="var(--ink)"
        fillOpacity="0.16"
        fontFamily="var(--font-display)"
        fontWeight="900"
        fontSize="38"
        transform="skewX(-12)"
      >
        04
      </text>

      {/* Over-swung goniometer gauge in top right */}
      <g transform="translate(282, 46)">
        <path d="M 16 84 A 64 64 0 0 1 144 84" stroke="var(--line)" strokeWidth="8" strokeLinecap="round" />
        <path d="M 118 32 A 64 64 0 0 1 144 84" stroke="var(--coral)" strokeWidth="8" strokeLinecap="round" />
        <line x1="12" y1="84" x2="148" y2="84" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
        {/* Needle pushed past 180° limit */}
        <line x1="80" y1="84" x2="152" y2="96" stroke="var(--coral-edge)" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="80" cy="84" r="6" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
        <text x="58" y="64" fill="var(--ink)" fontFamily="var(--font-mono)" fontWeight="700" fontSize="16">
          404°
        </text>
      </g>

      {/* Tangled loop of coral kinesio tape */}
      <path
        d="M 74 176 C 48 134, 108 82, 162 110 C 204 132, 152 198, 204 206 C 254 214, 286 154, 338 170"
        stroke="var(--coral-edge)"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 74 176 C 48 134, 108 82, 162 110 C 204 132, 152 198, 204 206 C 254 214, 286 154, 338 170"
        stroke={`url(#${hatchId})`}
        strokeWidth="12.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Running sneaker stepping sideways across the lane */}
      <g transform="translate(110, 148) rotate(-8)" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Shoe upper */}
        <path
          d="M 24 44 L 68 18 L 106 42 L 178 58 C 194 62, 198 84, 180 90 L 22 96 C 8 94, 10 54, 24 44 Z"
          fill="var(--surface)"
        />
        {/* Teal collar & heel counter */}
        <path d="M 22 46 L 64 22 L 78 46 L 34 72 Z" fill="var(--primary)" />
        {/* Laces */}
        <line x1="94" y1="38" x2="108" y2="48" stroke="var(--coral)" strokeWidth="3" />
        <line x1="112" y1="44" x2="126" y2="54" stroke="var(--coral)" strokeWidth="3" />
        <line x1="130" y1="50" x2="144" y2="58" stroke="var(--coral)" strokeWidth="3" />
        {/* Chunky cushioned midsole */}
        <path d="M 16 86 L 184 80 C 192 80, 192 94, 178 96 L 22 102 C 12 102, 10 88, 16 86 Z" fill="var(--tape-teal)" />
        <path d="M 28 93 L 172 88" stroke="var(--chalk)" strokeWidth="2" strokeOpacity="0.7" />
      </g>
    </svg>
  );
}
