'use client';

import { useId } from 'react';
import { conditionsForRegion } from '../../content/conditions';
import { regions, type RegionId } from '../../content/regions';
import { SiteLink } from '../site-link';

interface RegionGeometry {
  id: RegionId;
  /** Target point on the SVG figure (viewBox 0 0 420 420) */
  cx: number;
  cy: number;
  /** Which column of leader labels on Home ('left' | 'right') */
  column: 'left' | 'right';
}

const REGION_POINTS: Record<RegionId, RegionGeometry> = {
  shoulder: { id: 'shoulder', cx: 74, cy: 118, column: 'left' },
  'elbow-wrist': { id: 'elbow-wrist', cx: 52, cy: 184, column: 'left' },
  hip: { id: 'hip', cx: 90, cy: 224, column: 'left' },
  knee: { id: 'knee', cx: 88, cy: 296, column: 'left' },
  neck: { id: 'neck', cx: 310, cy: 92, column: 'right' },
  back: { id: 'back', cx: 310, cy: 186, column: 'right' },
  'ankle-foot': { id: 'ankle-foot', cx: 132, cy: 368, column: 'right' },
  'whole-body': { id: 'whole-body', cx: 110, cy: 162, column: 'right' },
};

function TapeShapes({
  coralHatch,
  tealHatch,
  activeRegion,
  onSelect,
  mode,
}: {
  coralHatch: string;
  tealHatch: string;
  activeRegion?: RegionId | null;
  onSelect?: (id: RegionId) => void;
  mode: 'home' | 'filter';
}) {
  const renderInteractiveWrap = (id: RegionId, label: string, children: React.ReactNode) => {
    const isActive = activeRegion === id;
    const count = conditionsForRegion(id).length;

    if (mode === 'filter' && onSelect) {
      return (
        <g
          key={id}
          className="body-map-region cursor-pointer"
          data-active={isActive ? 'true' : undefined}
          onClick={() => onSelect(id)}
        >
          <title>{`${label} (${count} conditions)`}</title>
          {children}
        </g>
      );
    }

    return (
      <g key={id} className="body-map-region" data-active={isActive ? 'true' : undefined}>
        {children}
      </g>
    );
  };

  return (
    <>
      {/* 1. SHOULDER (front figure, coral Y-strip on left deltoid) */}
      {renderInteractiveWrap(
        'shoulder',
        'Shoulder',
        <>
          <circle
            className="joint-arc"
            cx="74"
            cy="118"
            r="22"
            stroke="var(--coral)"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          <g className="tape-piece">
            <path
              d="M 60 107 L 80 112 C 84 113, 84 120, 79 121 L 60 116 C 56 115, 56 107, 60 107 Z"
              fill={`url(#${coralHatch})`}
              stroke="var(--coral-edge)"
              strokeWidth="1.2"
            />
            <path
              d="M 65 114 L 78 134 C 80 137, 74 141, 71 138 L 58 118 Z"
              fill={`url(#${coralHatch})`}
              stroke="var(--coral-edge)"
              strokeWidth="1.2"
            />
          </g>
        </>,
      )}

      {/* 2. ELBOW & WRIST (front figure, teal forearm I-strip) */}
      {renderInteractiveWrap(
        'elbow-wrist',
        'Elbow & wrist',
        <>
          <circle
            className="joint-arc"
            cx="52"
            cy="184"
            r="20"
            stroke="var(--tape-teal)"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          <g className="tape-piece">
            <rect
              x="44"
              y="163"
              width="12"
              height="40"
              rx="6"
              transform="rotate(14 50 183)"
              fill={`url(#${tealHatch})`}
              stroke="var(--tape-teal-edge)"
              strokeWidth="1.2"
            />
          </g>
        </>,
      )}

      {/* 3. WHOLE BODY (front figure, diagonal conditioning tape across ribs + subtle ring) */}
      {renderInteractiveWrap(
        'whole-body',
        'Whole body',
        <>
          <circle
            className="joint-arc"
            cx="110"
            cy="160"
            r="34"
            stroke="var(--coral)"
            strokeWidth="2"
            strokeDasharray="5 5"
            fill="none"
          />
          <g className="tape-piece">
            <rect
              x="89"
              y="153"
              width="42"
              height="11"
              rx="5.5"
              transform="rotate(-16 110 158)"
              fill={`url(#${coralHatch})`}
              stroke="var(--coral-edge)"
              strokeWidth="1.2"
            />
            <rect
              x="95"
              y="166"
              width="32"
              height="8"
              rx="4"
              transform="rotate(-16 110 170)"
              fill={`url(#${tealHatch})`}
              stroke="var(--tape-teal-edge)"
              strokeWidth="1.1"
            />
          </g>
        </>,
      )}

      {/* 4. HIP (front figure, teal fan strip on lateral hip/glute) */}
      {renderInteractiveWrap(
        'hip',
        'Hip',
        <>
          <circle
            className="joint-arc"
            cx="90"
            cy="224"
            r="22"
            stroke="var(--tape-teal)"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          <g className="tape-piece">
            <path
              d="M 76 213 L 106 218 C 110 219, 109 227, 104 226 L 75 222 C 71 221, 72 212, 76 213 Z"
              fill={`url(#${tealHatch})`}
              stroke="var(--tape-teal-edge)"
              strokeWidth="1.2"
            />
            <path
              d="M 76 221 L 102 233 C 106 235, 102 241, 98 239 L 74 228 Z"
              fill={`url(#${tealHatch})`}
              stroke="var(--tape-teal-edge)"
              strokeWidth="1.2"
            />
          </g>
        </>,
      )}

      {/* 5. KNEE (front figure, coral fan strip over patella) */}
      {renderInteractiveWrap(
        'knee',
        'Knee',
        <>
          <circle
            className="joint-arc"
            cx="88"
            cy="296"
            r="22"
            stroke="var(--coral)"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          <g className="tape-piece">
            <path
              d="M 76 286 C 82 280, 94 280, 100 286 L 96 293 C 91 289, 85 289, 80 293 Z"
              fill={`url(#${coralHatch})`}
              stroke="var(--coral-edge)"
              strokeWidth="1.2"
            />
            <path
              d="M 76 306 C 82 312, 94 312, 100 306 L 96 299 C 91 303, 85 303, 80 299 Z"
              fill={`url(#${coralHatch})`}
              stroke="var(--coral-edge)"
              strokeWidth="1.2"
            />
            <circle cx="88" cy="296" r="5" fill="var(--surface)" stroke="var(--coral-edge)" strokeWidth="1.4" />
          </g>
        </>,
      )}

      {/* 6. ANKLE & FOOT (front figure, teal stirrup around right ankle) */}
      {renderInteractiveWrap(
        'ankle-foot',
        'Ankle & foot',
        <>
          <circle
            className="joint-arc"
            cx="132"
            cy="368"
            r="22"
            stroke="var(--tape-teal)"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          <g className="tape-piece">
            <rect
              x="121"
              y="353"
              width="22"
              height="10"
              rx="5"
              fill={`url(#${tealHatch})`}
              stroke="var(--tape-teal-edge)"
              strokeWidth="1.2"
            />
            <rect
              x="127"
              y="357"
              width="10"
              height="24"
              rx="5"
              fill={`url(#${tealHatch})`}
              stroke="var(--tape-teal-edge)"
              strokeWidth="1.2"
            />
          </g>
        </>,
      )}

      {/* 7. NECK (back figure, teal cervical Y-strip) */}
      {renderInteractiveWrap(
        'neck',
        'Neck',
        <>
          <circle
            className="joint-arc"
            cx="310"
            cy="92"
            r="22"
            stroke="var(--tape-teal)"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          <g className="tape-piece">
            <path
              d="M 304 78 L 310 104 L 301 106 L 296 81 C 295 77, 303 75, 304 78 Z"
              fill={`url(#${tealHatch})`}
              stroke="var(--tape-teal-edge)"
              strokeWidth="1.2"
            />
            <path
              d="M 316 78 L 310 104 L 319 106 L 324 81 C 325 77, 317 75, 316 78 Z"
              fill={`url(#${tealHatch})`}
              stroke="var(--tape-teal-edge)"
              strokeWidth="1.2"
            />
          </g>
        </>,
      )}

      {/* 8. BACK (back figure, dual coral I-strips flanking lumbar spine) */}
      {renderInteractiveWrap(
        'back',
        'Back',
        <>
          <circle
            className="joint-arc"
            cx="310"
            cy="186"
            r="28"
            stroke="var(--coral)"
            strokeWidth="2"
            strokeDasharray="4 4"
            fill="none"
          />
          <g className="tape-piece">
            <rect
              x="293"
              y="162"
              width="12"
              height="48"
              rx="6"
              fill={`url(#${coralHatch})`}
              stroke="var(--coral-edge)"
              strokeWidth="1.2"
            />
            <rect
              x="315"
              y="162"
              width="12"
              height="48"
              rx="6"
              fill={`url(#${coralHatch})`}
              stroke="var(--coral-edge)"
              strokeWidth="1.2"
            />
            <rect
              x="288"
              y="181"
              width="44"
              height="10"
              rx="5"
              fill={`url(#${coralHatch})`}
              stroke="var(--coral-edge)"
              strokeWidth="1.2"
            />
          </g>
        </>,
      )}
    </>
  );
}

function AnatomicalFiguresSvg({
  activeRegion,
  onSelect,
  mode,
}: {
  activeRegion?: RegionId | null;
  onSelect?: (id: RegionId) => void;
  mode: 'home' | 'filter';
}) {
  const uid = useId().replace(/:/g, '');
  const coralHatch = `bm-coral-${uid}`;
  const tealHatch = `bm-teal-${uid}`;

  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Front and back anatomical diagrams with kinesiology tape applied over eight body regions"
      className="mx-auto block h-auto w-full max-w-[420px]"
    >
      <defs>
        <pattern id={coralHatch} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="5" height="5" fill="var(--coral)" />
          <path d="M0 0v5M0 0h5" stroke="var(--ink)" strokeOpacity="0.1" strokeWidth="0.9" />
        </pattern>
        <pattern id={tealHatch} width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="5" height="5" fill="var(--tape-teal)" />
          <path d="M0 0v5M0 0h5" stroke="var(--ink)" strokeOpacity="0.1" strokeWidth="0.9" />
        </pattern>
      </defs>

      {/* Clinical chart frame marks */}
      <text x="110" y="24" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-mono)" fontWeight="700" fontSize="11" letterSpacing="2">
        FRONT
      </text>
      <text x="310" y="24" textAnchor="middle" fill="var(--muted)" fontFamily="var(--font-mono)" fontWeight="700" fontSize="11" letterSpacing="2">
        BACK
      </text>
      <line x1="210" y1="36" x2="210" y2="394" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 6" />

      {/* ── FRONT FIGURE (centred at x = 110) ── */}
      <g stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Head & neck */}
        <circle cx="110" cy="60" r="20" fill="var(--surface)" />
        <path d="M 103 80 V 96 M 117 80 V 96" />
        {/* Shoulders, arms, torso & legs in clean single-line athletic proportions */}
        <path
          d="M 103 96 L 76 104 C 66 107, 61 115, 58 126 L 44 198 C 43 204, 49 208, 54 204 L 68 152 L 73 142 L 77 204 L 72 228 L 76 300 L 78 368 L 70 384 C 68 389, 73 394, 82 394 L 96 392 C 100 391, 102 387, 100 382 L 97 368 L 103 296 L 108 242 H 112 L 117 296 L 123 368 L 120 382 C 118 387, 120 391, 124 392 L 138 394 C 147 394, 152 389, 150 384 L 142 368 L 144 300 L 148 228 L 143 204 L 147 142 L 152 152 L 166 204 C 171 208, 177 204, 176 198 L 162 126 C 159 115, 154 107, 144 104 L 117 96"
          fill="var(--surface)"
        />
        {/* Clavicle & midline reference */}
        <path d="M 86 112 Q 110 118, 134 112" stroke="var(--line)" strokeWidth="1.5" />
        <line x1="110" y1="116" x2="110" y2="220" stroke="var(--line)" strokeWidth="1.2" strokeDasharray="3 5" />
        {/* Kneecap outlines */}
        <ellipse cx="88" cy="296" rx="7" ry="9" stroke="var(--line)" strokeWidth="1.4" />
        <ellipse cx="132" cy="296" rx="7" ry="9" stroke="var(--line)" strokeWidth="1.4" />
      </g>

      {/* ── BACK FIGURE (centred at x = 310) ── */}
      <g stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Head & neck */}
        <circle cx="310" cy="60" r="20" fill="var(--surface)" />
        <path d="M 303 80 V 96 M 317 80 V 96" />
        {/* Back silhouette */}
        <path
          d="M 303 96 L 276 104 C 266 107, 261 115, 258 126 L 244 198 C 243 204, 249 208, 254 204 L 268 152 L 273 142 L 277 204 L 272 228 L 276 300 L 278 368 L 272 384 C 270 389, 275 394, 283 394 L 296 392 C 300 391, 302 387, 300 382 L 297 368 L 303 296 L 308 242 H 312 L 317 296 L 323 368 L 320 382 C 318 387, 320 391, 324 392 L 337 394 C 345 394, 350 389, 348 384 L 342 368 L 344 300 L 348 228 L 343 204 L 347 142 L 352 152 L 366 204 C 371 208, 377 204, 376 198 L 362 126 C 359 115, 354 107, 344 104 L 317 96"
          fill="var(--surface)"
        />
        {/* Spine & shoulder blade lines */}
        <line x1="310" y1="88" x2="310" y2="232" stroke="var(--line)" strokeWidth="1.6" strokeDasharray="3 4" />
        <path d="M 284 126 C 290 144, 298 150, 302 146" stroke="var(--line)" strokeWidth="1.4" />
        <path d="M 336 126 C 330 144, 322 150, 318 146" stroke="var(--line)" strokeWidth="1.4" />
      </g>

      {/* Kinesio tape overlays on all 8 regions */}
      <TapeShapes
        coralHatch={coralHatch}
        tealHatch={tealHatch}
        activeRegion={activeRegion}
        onSelect={onSelect}
        mode={mode}
      />
    </svg>
  );
}

/**
 * Signature Taped Body Map for Home ("Where does it hurt?"):
 * Centred front & back figures with labelled region callouts on leader lines
 * extending left and right like a sports injury chart. Each region links to
 * /conditions/#<region> and shows its condition count.
 */
export function HomeTapedBodyMap() {
  const leftRegions = regions.filter(r => REGION_POINTS[r.id].column === 'left');
  const rightRegions = regions.filter(r => REGION_POINTS[r.id].column === 'right');

  const callout = (region: (typeof regions)[number], side: 'left' | 'right') => {
    const count = conditionsForRegion(region.id).length;
    const isCoral = region.tapeColor === 'coral';
    return (
      <li key={region.id} className="relative">
        <SiteLink
          href={`/conditions/#${region.id}`}
          className={`body-map-control group relative grid grid-cols-[1fr_auto] items-end gap-x-4 gap-y-1 border-b-2 border-dashed border-line py-4 no-underline hover:no-underline ${
            side === 'left' ? 'lg:text-right lg:grid-cols-[auto_1fr]' : ''
          }`}
        >
          <span className={side === 'left' ? 'lg:order-2' : ''}>
            <span className="flex items-center gap-3 font-display text-[1.6rem] leading-none font-black tracking-tight text-ink transition-colors group-hover:text-primary-ink lg:inline-flex">
              <span
                aria-hidden="true"
                className={`h-3.5 w-8 shrink-0 rounded-full tape-surface transition-transform group-hover:-translate-y-0.5 group-hover:-rotate-12 ${
                  isCoral ? 'tape-coral -rotate-6' : 'tape-teal rotate-6'
                } ${side === 'left' ? 'lg:order-2' : ''}`}
              />
              <span>{region.label}</span>
            </span>
            <span className="mt-1.5 block text-[0.92rem] leading-snug text-muted">{region.blurb}</span>
          </span>
          <span
            className={`font-mono text-[2.1rem] leading-none font-bold text-coral-ink ${
              side === 'left' ? 'lg:order-1' : ''
            }`}
          >
            {count}
            <span className="visually-hidden"> conditions</span>
          </span>
        </SiteLink>
      </li>
    );
  };

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1fr_minmax(360px,460px)_1fr] lg:gap-10">
      <ul className="grid gap-x-8 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
        {leftRegions.map(r => callout(r, 'left'))}
      </ul>

      {/* Front and back figures under a spotlight, on a gym-floor disc */}
      <div className="relative order-first lg:order-2">
        <div
          aria-hidden="true"
          className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--tape-teal)_14%,transparent),transparent_68%)]"
        />
        <div className="relative mx-auto max-w-[460px]">
          <AnatomicalFiguresSvg mode="home" />
        </div>
      </div>

      <ul className="grid gap-x-8 sm:grid-cols-2 lg:order-3 lg:grid-cols-1">
        {rightRegions.map(r => callout(r, 'right'))}
      </ul>
    </div>
  );
}

/**
 * Interactive Taped Body Map for /conditions/:
 * Sticky sidebar panel on desktop with clickable anatomical tape figure and
 * accessible region filter controls (`button` with `aria-pressed` once hydrated;
 * plain anchor links `#<region>` before hydration / without JS).
 */
export function InteractiveBodyMap({
  selected,
  hydrated,
  onSelect,
}: {
  selected: RegionId | null;
  hydrated: boolean;
  onSelect: (region: RegionId | null) => void;
}) {
  return (
    <div className="rounded-2xl border-2 border-line bg-surface p-4 shadow-xs">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="font-mono text-xs font-bold tracking-wider text-muted uppercase">
          Body map filter
        </span>
        {hydrated ? (
          <button
            type="button"
            onClick={() => onSelect(null)}
            aria-pressed={selected === null}
            className={`body-map-control rounded-full border-2 px-3 py-1 font-mono text-xs font-bold transition-colors ${
              selected === null
                ? 'border-primary bg-primary text-on-primary'
                : 'border-line bg-bg text-ink hover:border-primary'
            }`}
          >
            All regions
          </button>
        ) : (
          <span className="font-mono text-xs text-muted">Jump to region</span>
        )}
      </div>

      <AnatomicalFiguresSvg
        mode="filter"
        activeRegion={selected}
        onSelect={hydrated ? id => onSelect(selected === id ? null : id) : undefined}
      />

      {/* Keyboard-accessible region button grid below figure */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {regions.map(region => {
          const count = conditionsForRegion(region.id).length;
          const active = selected === region.id;
          const isCoral = region.tapeColor === 'coral';
          const cls = `body-map-control flex min-h-11 items-center justify-between gap-2 rounded-lg border-2 px-2.5 py-2 text-left text-sm font-bold transition-colors ${
            active
              ? 'border-primary bg-primary text-on-primary'
              : 'border-line bg-bg text-ink hover:border-primary'
          }`;

          if (!hydrated) {
            return (
              <a key={region.id} href={`#${region.id}`} className={`${cls} no-underline hover:no-underline`}>
                <span className="flex items-center gap-2 truncate">
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-4 shrink-0 -rotate-6 rounded-full ${isCoral ? 'bg-coral' : 'bg-tape-teal'}`}
                  />
                  <span className="truncate">{region.label}</span>
                </span>
                <span className="font-mono text-xs opacity-80">{count}</span>
              </a>
            );
          }

          return (
            <button
              key={region.id}
              type="button"
              aria-pressed={active}
              onClick={() => onSelect(active ? null : region.id)}
              className={cls}
            >
              <span className="flex items-center gap-2 truncate">
                <span
                  aria-hidden="true"
                  className={`h-2.5 w-4 shrink-0 -rotate-6 rounded-full ${
                    active ? 'bg-chalk' : isCoral ? 'bg-coral' : 'bg-tape-teal'
                  }`}
                />
                <span className="truncate">{region.label}</span>
              </span>
              <span className="font-mono text-xs opacity-85">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
