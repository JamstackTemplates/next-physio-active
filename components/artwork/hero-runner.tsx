import { useId } from 'react';

/**
 * Hero illustration "Mid-stride":
 * Layered composition — curving track lanes, athletic runner in full stride,
 * goniometer knee-angle protractor ("142°" in Space Mono), coral knee tape
 * & teal calf tape on top, motion trails, plus foreground resistance band & foam roller.
 */
export function HeroRunner({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '');
  const coralHatch = `hero-coral-hatch-${uid}`;
  const tealHatch = `hero-teal-hatch-${uid}`;

  return (
    <svg
      viewBox="0 0 680 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      data-art="decorative"
      className={`block h-auto w-full select-none ${className}`}
    >
      <defs>
        <pattern id={coralHatch} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="var(--coral)" />
          <path d="M0 0v6M0 0h6" stroke="var(--ink)" strokeOpacity="0.09" strokeWidth="1" />
        </pattern>
        <pattern id={tealHatch} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="var(--tape-teal)" />
          <path d="M0 0v6M0 0h6" stroke="var(--ink)" strokeOpacity="0.09" strokeWidth="1" />
        </pattern>
      </defs>

      {/* LAYER 1: Curving track lanes sweeping into perspective */}
      <g>
        <path
          d="M 40 485 C 180 410, 410 355, 710 340 L 710 540 L 0 540 Z"
          fill="var(--track)"
        />
        {/* Sweeping double lane lines */}
        <path
          d="M 32 482 C 185 404, 415 352, 705 338"
          stroke="var(--tape-teal)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 38 492 C 192 414, 422 362, 705 348"
          stroke="var(--coral)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M 105 535 C 260 456, 465 408, 705 394"
          stroke="var(--line)"
          strokeWidth="2.5"
          strokeDasharray="10 8"
          strokeLinecap="round"
        />
        <path
          d="M 220 538 C 365 478, 535 446, 705 436"
          stroke="var(--line)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Perspective chalk track lane numerals */}
        <text
          x="560"
          y="390"
          fill="var(--ink)"
          fillOpacity="0.14"
          fontFamily="var(--font-display)"
          fontWeight="900"
          fontSize="38"
          transform="skewX(-18)"
        >
          02
        </text>
        <text
          x="605"
          y="436"
          fill="var(--ink)"
          fillOpacity="0.14"
          fontFamily="var(--font-display)"
          fontWeight="900"
          fontSize="44"
          transform="skewX(-18)"
        >
          03
        </text>

        {/* Subtle geometric clinic wall arcs in upper background */}
        <path
          d="M 330 46 A 210 210 0 0 1 650 180"
          stroke="var(--line)"
          strokeWidth="1.5"
          strokeDasharray="4 7"
        />
        <circle cx="520" cy="118" r="72" stroke="var(--line)" strokeWidth="1.25" strokeOpacity="0.65" />
      </g>

      {/* LAYER 2: Motion trails behind trailing foot & hip */}
      <g strokeLinecap="round">
        <path d="M 96 346 L 195 322" stroke="var(--tape-teal)" strokeWidth="3.5" strokeOpacity="0.65" />
        <path d="M 76 372 L 168 352" stroke="var(--coral)" strokeWidth="2.5" strokeOpacity="0.7" />
        <path d="M 122 396 L 186 382" stroke="var(--line)" strokeWidth="2" />
        <path d="M 145 206 L 236 188" stroke="var(--tape-teal)" strokeWidth="2.2" strokeOpacity="0.55" />
        <path d="M 126 226 L 204 212" stroke="var(--coral)" strokeWidth="2" strokeOpacity="0.5" />
      </g>

      {/* LAYER 3: Runner in full mid-stride (single-line ink + flat activewear fills) */}
      <g stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Back leg (trailing stride) */}
        <path
          d="M 326 270 L 254 316 L 178 350"
          stroke="var(--ink)"
          strokeWidth="22"
          strokeOpacity="0.06"
        />
        <path
          d="M 332 268 C 304 292, 274 314, 246 322 L 184 352"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.6"
        />
        <path
          d="M 304 282 C 280 304, 256 322, 232 336 L 172 364"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.6"
        />
        {/* Trailing sneaker */}
        <path
          d="M 184 352 L 152 344 C 144 343, 141 351, 145 358 L 174 374 C 182 377, 190 368, 186 359 Z"
          fill="var(--surface)"
        />
        <path d="M 145 354 L 174 368" stroke="var(--coral)" strokeWidth="3.5" />

        {/* Shorts (deep teal flat fill) */}
        <path
          d="M 306 232 L 372 226 L 392 274 L 348 286 L 324 274 L 296 276 Z"
          fill="var(--track-dark)"
        />
        {/* Shorts side stripe */}
        <path d="M 358 232 L 375 272" stroke="var(--tape-teal)" strokeWidth="3" />

        {/* Forward leg (lead stride, knee bent at 142°) */}
        {/* Thigh */}
        <path
          d="M 374 252 L 456 296 C 464 301, 468 310, 463 320 L 444 334 L 352 282"
          fill="var(--bg)"
        />
        {/* Lower leg & calf */}
        <path
          d="M 462 315 L 434 404 L 408 400 L 432 320"
          fill="var(--bg)"
        />
        {/* Lead sneaker planted forward */}
        <path
          d="M 406 400 L 438 404 L 468 416 C 476 419, 476 430, 466 432 L 404 426 C 397 424, 398 407, 406 400 Z"
          fill="var(--surface)"
        />
        {/* Sneaker midsole accent */}
        <path d="M 402 421 L 467 427" stroke="var(--tape-teal)" strokeWidth="4" />
        <path d="M 426 408 L 444 416" stroke="var(--coral)" strokeWidth="2.5" />

        {/* Back arm */}
        <path
          d="M 354 150 L 304 178 L 266 156"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.6"
        />
        <path
          d="M 346 164 L 304 192 L 260 168"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.6"
        />
        <circle cx="261" cy="161" r="7" fill="var(--bg)" />

        {/* Torso singlet (teal activewear with coral collar trim) */}
        <path
          d="M 350 132 L 414 140 L 392 232 L 314 234 L 336 146 Z"
          fill="var(--primary)"
        />
        {/* Coral diagonal chest band on singlet */}
        <path d="M 342 152 L 408 164" stroke="var(--coral)" strokeWidth="5" />
        {/* Chalk highlight on singlet */}
        <path d="M 358 176 L 394 182" stroke="var(--chalk)" strokeWidth="2" strokeOpacity="0.65" />

        {/* Head & neck */}
        <path d="M 378 134 L 388 112" stroke="var(--ink)" strokeWidth="2.6" />
        <circle cx="404" cy="92" r="24" fill="var(--bg)" />
        {/* Athletic hair sweep */}
        <path
          d="M 382 86 C 384 65, 412 60, 425 76 C 414 74, 400 76, 389 84"
          fill="var(--ink)"
        />
        {/* Ponytail / movement hair flick */}
        <path d="M 381 84 C 364 80, 354 88, 344 96" stroke="var(--ink)" strokeWidth="3.5" />
        {/* Determined face profile hint */}
        <path d="M 416 90 L 420 90" stroke="var(--ink)" strokeWidth="2.5" />
        <path d="M 414 102 C 418 103, 422 101, 424 98" stroke="var(--ink)" strokeWidth="2" />

        {/* Forward driving arm */}
        <path
          d="M 398 156 L 444 196 L 494 176"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.6"
        />
        <path
          d="M 388 170 L 440 214 L 498 190"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2.6"
        />
        <circle cx="498" cy="182" r="7.5" fill="var(--bg)" />
      </g>

      {/* LAYER 4: Large goniometer protractor arc measuring knee flexion (142°) */}
      <g>
        {/* Outer & inner protractor arcs centred around knee (452, 314) */}
        <path
          d="M 372 254 A 98 98 0 0 1 545 344"
          stroke="var(--primary-ink)"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
        />
        <path
          d="M 388 266 A 78 78 0 0 1 524 338"
          stroke="var(--coral)"
          strokeWidth="2.5"
          fill="none"
        />
        {/* Degree tick marks radiating along the arc */}
        <g stroke="var(--ink)" strokeWidth="1.6" strokeLinecap="round" strokeOpacity="0.65">
          <line x1="398" y1="242" x2="404" y2="250" />
          <line x1="426" y1="224" x2="429" y2="234" />
          <line x1="458" y1="218" x2="458" y2="229" />
          <line x1="490" y1="226" x2="486" y2="236" />
          <line x1="518" y1="246" x2="511" y2="254" />
          <line x1="538" y1="274" x2="528" y2="280" />
          <line x1="548" y1="308" x2="537" y2="310" />
        </g>
        {/* Goniometer axis arms & pivot ring */}
        <line x1="452" y1="314" x2="368" y2="256" stroke="var(--primary-ink)" strokeWidth="1.5" strokeDasharray="3 4" />
        <line x1="452" y1="314" x2="420" y2="412" stroke="var(--primary-ink)" strokeWidth="1.5" strokeDasharray="3 4" />
        <circle cx="452" cy="314" r="6" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
        <circle cx="452" cy="314" r="2" fill="var(--coral)" />

        {/* Readout badge "142°" in Space Mono */}
        <g transform="translate(514, 212)">
          <rect
            x="0"
            y="0"
            width="84"
            height="36"
            rx="8"
            fill="var(--surface)"
            stroke="var(--line)"
            strokeWidth="2"
          />
          <rect x="6" y="6" width="4" height="24" rx="2" fill="var(--coral)" />
          <text
            x="19"
            y="24"
            fill="var(--ink)"
            fontFamily="var(--font-mono)"
            fontWeight="700"
            fontSize="17"
          >
            142°
          </text>
        </g>
      </g>

      {/* LAYER 5: Kinesio tape strips on top (coral knee Y-strip + teal calf I-strip) */}
      <g>
        {/* Coral kinesio tape around lead knee */}
        <path
          d="M 418 282 L 456 304 C 463 308, 462 318, 454 320 L 414 296 C 408 292, 411 280, 418 282 Z"
          fill={`url(#${coralHatch})`}
          stroke="var(--coral-edge)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 442 296 L 474 322 C 479 326, 474 335, 467 332 L 434 307 Z"
          fill={`url(#${coralHatch})`}
          stroke="var(--coral-edge)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Chalk sheen line on coral tape */}
        <path d="M 421 287 L 451 305" stroke="var(--chalk)" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" />

        {/* Teal kinesio tape strip along calf */}
        <path
          d="M 442 332 C 446 330, 453 333, 451 339 L 436 392 C 434 397, 426 395, 427 389 L 442 332 Z"
          fill={`url(#${tealHatch})`}
          stroke="var(--tape-teal-edge)"
          strokeWidth="1.5"
        />
        <path d="M 444 340 L 433 382" stroke="var(--chalk)" strokeWidth="1.4" strokeOpacity="0.6" strokeLinecap="round" />
      </g>

      {/* LAYER 6: Foreground rehab equipment — foam roller & looped resistance band */}
      <g transform="translate(30, 434)">
        {/* Foam roller */}
        <g stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M 18 22 L 138 14 C 148 14, 152 28, 150 42 C 148 54, 142 60, 134 60 L 18 66 Z"
            fill="var(--tape-teal)"
          />
          <ellipse cx="18" cy="44" rx="11" ry="22" fill="var(--track-dark)" />
          <ellipse cx="18" cy="44" rx="5" ry="11" fill="var(--bg)" />
          {/* Textured foam ridges */}
          <line x1="48" y1="22" x2="48" y2="62" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="1.6" strokeDasharray="4 4" />
          <line x1="78" y1="20" x2="78" y2="60" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="1.6" strokeDasharray="4 4" />
          <line x1="108" y1="18" x2="108" y2="58" stroke="var(--ink)" strokeOpacity="0.35" strokeWidth="1.6" strokeDasharray="4 4" />
          {/* Chalk highlight */}
          <line x1="36" y1="27" x2="128" y2="21" stroke="var(--chalk)" strokeWidth="2" strokeOpacity="0.65" />
        </g>

        {/* Looped coral rehab resistance band resting next to roller */}
        <g transform="translate(158, 22)" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round">
          <path
            d="M 14 26 C 14 10, 56 6, 86 12 C 114 18, 118 34, 96 42 C 74 50, 26 48, 16 36 C 12 32, 14 28, 14 26 Z"
            fill="none"
            stroke="var(--coral-edge)"
            strokeWidth="12"
          />
          <path
            d="M 14 26 C 14 10, 56 6, 86 12 C 114 18, 118 34, 96 42 C 74 50, 26 48, 16 36 C 12 32, 14 28, 14 26 Z"
            fill="none"
            stroke="var(--coral)"
            strokeWidth="8.5"
          />
          <path
            d="M 28 18 C 52 14, 78 15, 96 20"
            fill="none"
            stroke="var(--chalk)"
            strokeWidth="1.5"
            strokeOpacity="0.65"
          />
        </g>
      </g>
    </svg>
  );
}
