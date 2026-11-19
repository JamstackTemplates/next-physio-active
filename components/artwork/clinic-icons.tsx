import type { RebateId } from '../../content/rebates';

/* ── First-visit stage icons (4 bespoke line drawings) ────────────────── */

export function AssessIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true" className={className}>
      {/* Clipboard with body outline */}
      <rect x="10" y="10" width="36" height="42" rx="6" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.2" />
      <rect x="20" y="6" width="16" height="8" rx="3" fill="var(--tape-teal)" stroke="var(--ink)" strokeWidth="2" />
      {/* Body outline sketch */}
      <circle cx="28" cy="22" r="4" stroke="var(--ink)" strokeWidth="2" />
      <path d="M 28 26 V 39 M 20 30 H 36 M 28 39 L 23 47 M 28 39 L 33 47" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      {/* Coral tape dot on shoulder */}
      <circle cx="34" cy="30" r="3" fill="var(--coral)" />
    </svg>
  );
}

export function ExplainIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true" className={className}>
      {/* Spine model */}
      <path d="M 28 7 C 24 16, 32 25, 27 35 C 24 41, 27 46, 29 50" stroke="var(--tape-teal)" strokeWidth="4" strokeLinecap="round" />
      {[12, 20, 28, 36, 44].map((y, idx) => (
        <g key={y} transform={`translate(${idx % 2 === 0 ? 0 : 1.5}, 0)`}>
          <rect
            x="20"
            y={y - 2.5}
            width="16"
            height="5"
            rx="2.5"
            fill={idx === 2 ? 'var(--coral)' : 'var(--surface)'}
            stroke="var(--ink)"
            strokeWidth="2"
          />
          <line x1="14" y1={y} x2="20" y2={y} stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="36" y1={y} x2="42" y2={y} stroke="var(--ink)" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

export function TreatIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true" className={className}>
      {/* Shoulder contour */}
      <path d="M 10 46 C 12 31, 20 24, 30 24 C 39 24, 46 31, 47 46" fill="var(--track)" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
      {/* Coral tape Y-strip on shoulder */}
      <path d="M 26 27 L 36 37 M 32 25 L 39 33" stroke="var(--coral)" strokeWidth="4.5" strokeLinecap="round" />
      {/* Physio hands working over shoulder */}
      <path d="M 11 19 C 16 14, 24 14, 27 21 L 20 26 C 16 27, 12 24, 11 19 Z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M 45 17 C 40 12, 33 13, 30 20 L 37 25 C 41 25, 45 22, 45 17 Z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.1" strokeLinejoin="round" />
    </svg>
  );
}

export function PlanIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true" className={className}>
      {/* Exercise program sheet */}
      <rect x="8" y="8" width="30" height="38" rx="5" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.2" />
      <line x1="14" y1="17" x2="32" y2="17" stroke="var(--tape-teal)" strokeWidth="3" strokeLinecap="round" />
      <line x1="14" y1="25" x2="29" y2="25" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <line x1="14" y1="33" x2="26" y2="33" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      {/* Looped resistance band beside sheet */}
      <ellipse cx="40" cy="36" rx="10" ry="13" transform="rotate(-14 40 36)" fill="none" stroke="var(--coral)" strokeWidth="5" />
      <ellipse cx="40" cy="36" rx="10" ry="13" transform="rotate(-14 40 36)" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
    </svg>
  );
}

/* ── Rebate pathway icons (4 bespoke line drawings) ───────────────────── */

export function PrivateHealthIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true" className={className}>
      {/* Health fund card */}
      <rect x="6" y="14" width="38" height="26" rx="5" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.2" />
      <rect x="6" y="21" width="38" height="6" fill="var(--tape-teal)" />
      <rect x="12" y="31" width="12" height="4" rx="2" fill="var(--coral)" />
      {/* HICAPS contactless tap waves */}
      <path d="M 46 21 A 7 7 0 0 1 46 33" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M 50 17 A 12 12 0 0 1 50 37" stroke="var(--coral)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function MedicareIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true" className={className}>
      {/* GP referral letter */}
      <rect x="11" y="7" width="34" height="42" rx="5" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.2" />
      {/* Medical cross */}
      <path d="M 28 14 V 24 M 23 19 H 33" stroke="var(--tape-teal)" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="18" y1="31" x2="38" y2="31" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <line x1="18" y1="38" x2="32" y2="38" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      {/* Corner coral tape holding referral */}
      <path d="M 35 6 L 47 18" stroke="var(--coral)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function DvaIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true" className={className}>
      {/* Generic service medal ribbon (no official insignia) */}
      <path d="M 18 9 H 38 L 35 28 H 21 Z" fill="var(--tape-teal)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="28" y1="9" x2="28" y2="28" stroke="var(--coral)" strokeWidth="5" />
      <circle cx="28" cy="39" r="10" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.2" />
      <circle cx="28" cy="39" r="4.5" fill="var(--coral)" />
    </svg>
  );
}

export function WorkCoverIcon({ className = 'h-11 w-11' }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 56" fill="none" aria-hidden="true" className={className}>
      {/* Hard hat */}
      <path d="M 9 30 C 9 18, 17 12, 26 12 C 35 12, 42 18, 42 30 Z" fill="var(--coral)" stroke="var(--ink)" strokeWidth="2.2" strokeLinejoin="round" />
      <line x1="26" y1="12" x2="26" y2="27" stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" />
      <path d="M 6 30 H 45" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Car key beside it */}
      <circle cx="38" cy="43" r="6.5" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.2" />
      <circle cx="38" cy="43" r="2" fill="var(--tape-teal)" />
      <path d="M 31 43 H 15 L 15 47 M 20 43 V 46" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function RebateIcon({ id, className }: { id: RebateId; className?: string }) {
  switch (id) {
    case 'private-health':
      return <PrivateHealthIcon className={className} />;
    case 'medicare-cdm':
      return <MedicareIcon className={className} />;
    case 'dva':
      return <DvaIcon className={className} />;
    case 'workcover-ctp':
      return <WorkCoverIcon className={className} />;
  }
}

/* ── Small UI icons ───────────────────────────────────────────────────── */

export function ClockIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M 12 7 V 12 L 15.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PinIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M 12 21 C 12 21, 19 14.5, 19 9.5 A 7 7 0 1 0 5 9.5 C 5 14.5, 12 21, 12 21 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.5" fill="var(--coral)" />
    </svg>
  );
}

export function PhoneIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M 6.5 4.5 L 9.5 4.5 L 11 9 L 8.5 10.5 A 11 11 0 0 0 13.5 15.5 L 15 13 L 19.5 14.5 L 19.5 17.5 C 19.5 18.8, 18.4 19.8, 17 19.5 C 10.2 18.4, 5.6 13.8, 4.5 7 C 4.2 5.6, 5.2 4.5, 6.5 4.5 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M 4 7 L 12 13 L 20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ParkingIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2" />
      <path d="M 9 17 V 7 H 13.5 C 15.2 7, 16.5 8.2, 16.5 9.8 C 16.5 11.4, 15.2 12.6, 13.5 12.6 H 9" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TrainIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <rect x="5" y="4" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="5" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" />
      <circle cx="9" cy="14.5" r="1.2" fill="var(--coral)" />
      <circle cx="15" cy="14.5" r="1.2" fill="var(--coral)" />
      <path d="M 8 18 L 6 21 M 16 18 L 18 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WheelchairIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="5.5" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M 11.5 9.5 V 14 H 16.5 L 18 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 14.5 16 A 5 5 0 1 1 8.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function TapeRollBullet({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`shrink-0 ${className}`}>
      <circle cx="9" cy="10" r="6.5" fill="var(--coral)" stroke="var(--coral-edge)" strokeWidth="1.5" />
      <circle cx="9" cy="10" r="2.6" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.3" />
      <path d="M 12.5 15.5 H 18" stroke="var(--coral)" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

/* ── PageHead motifs (right-side artwork per inner page) ──────────────── */

export function ConditionsMotif() {
  return (
    <svg viewBox="0 0 200 130" fill="none" aria-hidden="true" data-art="decorative" className="h-auto w-44 sm:w-52">
      <path d="M 20 112 H 184" stroke="var(--line)" strokeWidth="2" strokeDasharray="6 6" />
      {/* Mini anatomical torso + knee goniometer */}
      <circle cx="72" cy="28" r="11" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M 52 44 H 92 L 86 92 H 58 Z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 60 92 L 54 120 M 84 92 L 90 120" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
      {/* Tape strips */}
      <rect x="48" y="42" width="16" height="8" rx="4" transform="rotate(-18 48 42)" fill="var(--coral)" stroke="var(--coral-edge)" strokeWidth="1.3" />
      <rect x="64" y="64" width="16" height="7" rx="3.5" fill="var(--tape-teal)" stroke="var(--tape-teal-edge)" strokeWidth="1.3" />
      {/* Goniometer arc on right */}
      <path d="M 118 96 A 42 42 0 0 1 182 96" stroke="var(--line)" strokeWidth="6" strokeLinecap="round" />
      <path d="M 134 62 A 42 42 0 0 1 174 72" stroke="var(--coral)" strokeWidth="6" strokeLinecap="round" />
      <line x1="150" y1="96" x2="164" y2="54" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="150" cy="96" r="4" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
    </svg>
  );
}

export function TeamMotif() {
  return (
    <svg viewBox="0 0 220 124" fill="none" aria-hidden="true" data-art="decorative" className="h-auto w-48 sm:w-56">
      {/* Row of three mini training jerseys */}
      {[
        { x: 14, y: 22, num: '1', rot: -4, fill: 'var(--track-dark)' },
        { x: 78, y: 12, num: '11', rot: 2, fill: 'var(--primary)' },
        { x: 142, y: 26, num: '21', rot: -2, fill: 'var(--track-dark)' },
      ].map(j => (
        <g key={j.num} transform={`translate(${j.x}, ${j.y}) rotate(${j.rot})`}>
          <path
            d="M 14 4 L 24 0 H 38 L 48 4 L 60 18 L 50 28 L 45 24 V 74 H 17 V 24 L 12 28 L 2 18 Z"
            fill={j.fill}
            stroke="var(--ink)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M 24 2 Q 31 10, 38 2" stroke="var(--coral)" strokeWidth="3.5" fill="none" />
          <text
            x="31"
            y="50"
            textAnchor="middle"
            fill="var(--chalk)"
            fontFamily="var(--font-display)"
            fontWeight="900"
            fontSize="22"
          >
            {j.num}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function FeesMotif() {
  return (
    <svg viewBox="0 0 210 124" fill="none" aria-hidden="true" data-art="decorative" className="h-auto w-48 sm:w-52">
      {/* Angled health fund card taped down */}
      <g transform="translate(22, 22) rotate(-5)">
        <rect x="0" y="10" width="140" height="82" rx="12" fill="var(--track-dark)" stroke="var(--ink)" strokeWidth="2.2" />
        <rect x="0" y="28" width="140" height="14" fill="var(--tape-teal)" />
        <text x="16" y="68" fill="var(--chalk)" fontFamily="var(--font-mono)" fontWeight="700" fontSize="15">
          HICAPS · 500
        </text>
        {/* Tap waves */}
        <path d="M 116 56 A 8 8 0 0 1 116 70" stroke="var(--coral)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M 122 52 A 14 14 0 0 1 122 74" stroke="var(--coral)" strokeWidth="2.2" strokeLinecap="round" />
      </g>
      {/* Coral tape holding card corner */}
      <rect x="116" y="12" width="66" height="18" rx="9" transform="rotate(14 116 12)" fill="var(--coral)" stroke="var(--coral-edge)" strokeWidth="1.5" />
    </svg>
  );
}

export function ContactMotif() {
  return (
    <svg viewBox="0 0 210 124" fill="none" aria-hidden="true" data-art="decorative" className="h-auto w-48 sm:w-52">
      <g transform="translate(26, 20) rotate(-3)">
        <rect x="0" y="12" width="148" height="86" rx="10" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.2" />
        <path d="M 4 16 L 74 62 L 144 16" stroke="var(--ink)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 8 92 L 54 56 M 140 92 L 94 56" stroke="var(--line)" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      {/* Coral tape sealing the envelope */}
      <rect x="64" y="54" width="84" height="20" rx="10" transform="rotate(-12 64 54)" fill="var(--coral)" stroke="var(--coral-edge)" strokeWidth="1.5" />
      <rect x="134" y="12" width="54" height="14" rx="7" transform="rotate(24 134 12)" fill="var(--tape-teal)" stroke="var(--tape-teal-edge)" strokeWidth="1.4" />
    </svg>
  );
}
