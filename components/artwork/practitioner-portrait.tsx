/**
 * Six distinct single-line head-and-shoulder practitioner portraits in the shared
 * clinic style (2px rounded ink, teal clinic polo with coral collar stripe).
 */
export function PractitionerPortrait({ id, name }: { id: string; name: string }) {
  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Line portrait of ${name}`}
      className="h-20 w-20 shrink-0 rounded-full border-2 border-line bg-bg"
    >
      {/* Subtle goniometer ring behind head */}
      <circle cx="48" cy="48" r="44" fill="var(--bg)" />
      <path d="M 16 26 A 38 38 0 0 1 80 26" stroke="var(--line)" strokeWidth="1.5" strokeDasharray="3 4" />

      {/* Shared teal clinic polo with coral collar stripe */}
      <path
        d="M 16 96 C 18 74, 30 68, 48 68 C 66 68, 78 74, 80 96 Z"
        fill="var(--primary)"
        stroke="var(--ink)"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Polo collar & coral stripe */}
      <path d="M 38 68 L 48 79 L 58 68" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 35 71 L 48 82 L 61 71" stroke="var(--coral)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Neck & base head */}
      <rect x="42" y="56" width="12" height="14" rx="4" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2" />
      <circle cx="48" cy="42" r="18" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.2" />

      {/* Distinct facial features & hair per clinician */}
      {id === 'priya-raman' && (
        <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Wavy shoulder-length dark hair & side part */}
          <path d="M 29 44 C 26 24, 42 16, 56 20 C 68 24, 70 40, 66 56" fill="var(--ink)" />
          <path d="M 32 34 C 42 26, 54 27, 63 35" fill="var(--surface)" stroke="none" />
          <circle cx="48" cy="43" r="16.5" fill="var(--surface)" stroke="var(--ink)" strokeWidth="2.1" />
          <path d="M 31 37 C 38 25, 56 24, 64 36 C 58 29, 44 28, 31 37 Z" fill="var(--ink)" />
          {/* Thin round glasses */}
          <circle cx="42" cy="42" r="4.5" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
          <circle cx="54" cy="42" r="4.5" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
          <line x1="46.5" y1="42" x2="49.5" y2="42" strokeWidth="1.8" />
          <circle cx="42" cy="42" r="1.2" fill="var(--ink)" stroke="none" />
          <circle cx="54" cy="42" r="1.2" fill="var(--ink)" stroke="none" />
          <path d="M 43 51 C 46 53.5, 50 53.5, 53 51" />
        </g>
      )}

      {id === 'tom-okafor' && (
        <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Close-cropped high fade & neat short beard */}
          <path d="M 31 36 C 32 23, 64 23, 65 36 C 58 30, 38 30, 31 36 Z" fill="var(--ink)" />
          <path d="M 34 48 C 36 59, 60 59, 62 48 C 57 53, 39 53, 34 48 Z" fill="var(--ink)" fillOpacity="0.85" />
          <circle cx="42" cy="41" r="1.5" fill="var(--ink)" stroke="none" />
          <circle cx="54" cy="41" r="1.5" fill="var(--ink)" stroke="none" />
          <path d="M 43 49.5 C 46 52, 50 52, 53 49.5" stroke="var(--surface)" strokeWidth="2" />
        </g>
      )}

      {id === 'mia-santos' && (
        <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* High athletic ponytail & sporty headband */}
          <path d="M 54 22 C 66 15, 76 24, 71 36" stroke="var(--ink)" strokeWidth="4.5" />
          <path d="M 31 36 C 34 22, 62 22, 65 36 C 58 29, 38 29, 31 36 Z" fill="var(--ink)" />
          <path d="M 32 34 C 42 29, 54 29, 64 34" stroke="var(--coral)" strokeWidth="3" />
          <circle cx="42" cy="42" r="1.5" fill="var(--ink)" stroke="none" />
          <circle cx="54" cy="42" r="1.5" fill="var(--ink)" stroke="none" />
          <path d="M 42.5 50.5 C 46 54, 50 54, 53.5 50.5" />
        </g>
      )}

      {id === 'jordan-lee' && (
        <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Swept fringe & rectangular frames */}
          <path d="M 30 39 C 30 22, 64 20, 66 37 C 56 31, 43 30, 30 39 Z" fill="var(--ink)" />
          <rect x="36.5" y="38.5" width="9.5" height="6.5" rx="2" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
          <rect x="50" y="38.5" width="9.5" height="6.5" rx="2" fill="none" stroke="var(--ink)" strokeWidth="1.8" />
          <line x1="46" y1="41.5" x2="50" y2="41.5" strokeWidth="1.8" />
          <circle cx="41.2" cy="41.8" r="1.2" fill="var(--ink)" stroke="none" />
          <circle cx="54.8" cy="41.8" r="1.2" fill="var(--ink)" stroke="none" />
          <path d="M 43 51 C 46.5 53.5, 49.5 53.5, 53 51" />
        </g>
      )}

      {id === 'grace-whitfield' && (
        <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Classic bob cut */}
          <path d="M 27 52 C 26 24, 40 18, 48 18 C 56 18, 70 24, 69 52 L 64 52 C 64 34, 58 28, 48 28 C 38 28, 32 34, 32 52 Z" fill="var(--ink)" />
          <circle cx="42" cy="42" r="1.5" fill="var(--ink)" stroke="none" />
          <circle cx="54" cy="42" r="1.5" fill="var(--ink)" stroke="none" />
          <path d="M 43 50.5 C 46 53.5, 50 53.5, 53 50.5" />
          {/* Small stud earrings */}
          <circle cx="30" cy="46" r="1.6" fill="var(--tape-teal)" stroke="none" />
          <circle cx="66" cy="46" r="1.6" fill="var(--tape-teal)" stroke="none" />
        </g>
      )}

      {id === 'ben-ashworth' && (
        <g stroke="var(--ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Textured curly crop & friendly stubble */}
          <path
            d="M 31 35 C 29 27, 36 22, 42 24 C 46 19, 54 19, 57 24 C 63 23, 67 29, 65 35 C 58 31, 38 31, 31 35 Z"
            fill="var(--ink)"
          />
          <circle cx="42" cy="42" r="1.5" fill="var(--ink)" stroke="none" />
          <circle cx="54" cy="42" r="1.5" fill="var(--ink)" stroke="none" />
          <path d="M 42 50 C 46 53.5, 50 53.5, 54 50" />
          <path d="M 40 55 H 56" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="2 3" />
        </g>
      )}
    </svg>
  );
}
