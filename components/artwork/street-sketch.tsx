/**
 * Illustrative street sketch of Milton, Brisbane for the Home "Visit us" panel
 * (not a live map; GoogleMap lives on /contact/). Shows Castlemaine Street,
 * Railway Terrace parking, Suncorp Stadium silhouette and Milton Station rail line.
 */
export function StreetSketch({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrative street sketch showing Momentum Physio at 118 Castlemaine Street, Milton, three minutes' walk from Suncorp Stadium and 400 metres from Milton Station, with free patient parking off Railway Terrace"
      className={`block h-auto w-full rounded-xl border-2 border-line bg-surface ${className}`}
    >
      {/* Base grid / neighbourhood blocks */}
      <rect width="520" height="380" fill="var(--bg)" />
      <rect x="24" y="24" width="146" height="106" rx="10" fill="var(--track)" />
      <rect x="24" y="160" width="146" height="92" rx="10" fill="var(--track)" />
      <rect x="208" y="24" width="140" height="106" rx="10" fill="var(--track)" />
      <rect x="380" y="162" width="116" height="90" rx="10" fill="var(--track)" />

      {/* Suncorp Stadium oval silhouette (top right, 3 min walk) */}
      <g transform="translate(364, 24)">
        <rect x="0" y="0" width="132" height="104" rx="34" fill="var(--track-dark)" stroke="var(--ink)" strokeWidth="2" />
        <rect x="18" y="18" width="96" height="68" rx="22" fill="var(--primary)" stroke="var(--tape-teal)" strokeWidth="2" />
        <line x1="66" y1="18" x2="66" y2="86" stroke="var(--chalk)" strokeOpacity="0.6" strokeWidth="1.5" />
        <circle cx="66" cy="52" r="10" stroke="var(--chalk)" strokeOpacity="0.6" strokeWidth="1.5" />
        <text x="66" y="122" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-display)" fontWeight="800" fontSize="13">
          Suncorp Stadium
        </text>
        <text x="66" y="136" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="10">
          3 min walk
        </text>
      </g>

      {/* Roads: Castlemaine Street (vertical) & Railway Terrace (diagonal/bottom) */}
      <path d="M 188 0 V 380" stroke="var(--surface)" strokeWidth="30" />
      <path d="M 188 0 V 380" stroke="var(--line)" strokeWidth="32" strokeOpacity="0.4" />
      <path d="M 188 0 V 380" stroke="var(--surface)" strokeWidth="28" />
      <line x1="188" y1="8" x2="188" y2="372" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="8 8" />

      {/* Horizontal street: Milton Road / Park Road connector */}
      <path d="M 0 144 H 356" stroke="var(--surface)" strokeWidth="22" />
      <line x1="0" y1="133" x2="356" y2="133" stroke="var(--line)" strokeWidth="1.5" />
      <line x1="0" y1="155" x2="356" y2="155" stroke="var(--line)" strokeWidth="1.5" />

      {/* Railway Terrace & Train Line along the bottom */}
      <path d="M 0 282 L 520 264" stroke="var(--surface)" strokeWidth="24" />
      <line x1="0" y1="270" x2="520" y2="252" stroke="var(--line)" strokeWidth="1.5" />
      <line x1="0" y1="294" x2="520" y2="276" stroke="var(--line)" strokeWidth="1.5" />

      {/* Railway tracks */}
      <path d="M 0 326 L 520 308" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="3" />
      <path d="M 0 326 L 520 308" stroke="var(--bg)" strokeWidth="3" strokeDasharray="4 10" />
      <path d="M 0 336 L 520 318" stroke="var(--ink)" strokeOpacity="0.45" strokeWidth="2" />

      {/* Street labels */}
      <text
        x="179"
        y="94"
        transform="rotate(-90 179 94)"
        fill="var(--muted)"
        fontFamily="var(--font-mono)"
        fontWeight="700"
        fontSize="11"
        letterSpacing="1.2"
      >
        CASTLEMAINE ST
      </text>
      <text
        x="246"
        y="277"
        transform="rotate(-2 246 277)"
        fill="var(--muted)"
        fontFamily="var(--font-mono)"
        fontWeight="700"
        fontSize="10.5"
        letterSpacing="1"
      >
        RAILWAY TERRACE
      </text>

      {/* Free Patient Parking badge off Railway Terrace */}
      <g transform="translate(230, 214)">
        <rect x="0" y="0" width="28" height="28" rx="6" fill="var(--primary)" stroke="var(--ink)" strokeWidth="1.8" />
        <text x="14" y="20" textAnchor="middle" fill="var(--on-primary)" fontFamily="var(--font-display)" fontWeight="900" fontSize="16">
          P
        </text>
        <text x="36" y="13" fill="var(--ink)" fontFamily="var(--font-sans)" fontWeight="700" fontSize="11.5">
          Free patient parking
        </text>
        <text x="36" y="26" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="9.5">
          behind building
        </text>
      </g>

      {/* Milton Station marker (bottom left, 400m) */}
      <g transform="translate(36, 314)">
        <rect x="0" y="0" width="128" height="44" rx="9" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
        <rect x="8" y="9" width="24" height="26" rx="5" fill="var(--tape-teal)" />
        <text x="20" y="27" textAnchor="middle" fill="var(--ink)" fontFamily="var(--font-display)" fontWeight="900" fontSize="14">
          T
        </text>
        <text x="40" y="20" fill="var(--ink)" fontFamily="var(--font-display)" fontWeight="800" fontSize="12">
          Milton Station
        </text>
        <text x="40" y="34" fill="var(--muted)" fontFamily="var(--font-mono)" fontSize="10">
          400 m walk
        </text>
      </g>

      {/* Walking route dotted line from stadium to clinic */}
      <path
        d="M 364 102 C 310 112, 260 132, 224 176"
        stroke="var(--tape-teal)"
        strokeWidth="2.5"
        strokeDasharray="5 5"
        strokeLinecap="round"
      />

      {/* Momentum Physio clinic pin + taped label */}
      <g transform="translate(152, 162)">
        <circle cx="36" cy="36" r="24" fill="var(--coral)" fillOpacity="0.18" />
        <path
          d="M 36 52 C 36 52, 54 35, 54 22 A 18 18 0 1 0 18 22 C 18 35, 36 52, 36 52 Z"
          fill="var(--coral)"
          stroke="var(--ink)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="22" r="6.5" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />

        {/* Taped clinic callout tag */}
        <g transform="translate(-118, -6) rotate(-2)">
          <rect x="0" y="0" width="136" height="48" rx="9" fill="var(--track-dark)" stroke="var(--ink)" strokeWidth="2" />
          <rect x="10" y="-6" width="38" height="10" rx="5" fill="var(--tape-teal)" stroke="var(--tape-teal-edge)" strokeWidth="1.2" />
          <text x="12" y="22" fill="var(--chalk)" fontFamily="var(--font-display)" fontWeight="900" fontSize="13">
            Momentum Physio
          </text>
          <text x="12" y="37" fill="var(--tape-teal)" fontFamily="var(--font-mono)" fontSize="10">
            118 Castlemaine St
          </text>
        </g>
      </g>

      {/* Compass north tick */}
      <g transform="translate(474, 336)" stroke="var(--muted)" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="14" cy="14" r="14" fill="var(--surface)" stroke="var(--line)" />
        <path d="M 14 21 V 7 M 10 11 L 14 7 L 18 11" stroke="var(--ink)" />
      </g>
    </svg>
  );
}
