import { WEEK_DAYS, type Practitioner } from '../content/practitioners';
import { PractitionerPortrait } from './artwork/practitioner-portrait';

/**
 * Training jersey card for a practitioner:
 * Teal jersey collar panel with oversized jersey number, circular line portrait,
 * qualifications, kinesio-tape focus tags, 7-dot clinic week strip (Mon–Sun,
 * closed Sunday hatched), and footer with languages & off-duty line.
 */
export function PractitionerJersey({
  practitioner,
  tilt = 'none',
  className = '',
}: {
  practitioner: Practitioner;
  tilt?: 'left' | 'right' | 'none';
  className?: string;
}) {
  const tiltClass =
    tilt === 'left'
      ? 'md:-rotate-1 md:hover:rotate-0'
      : tilt === 'right'
        ? 'md:rotate-1 md:hover:rotate-0'
        : '';

  const openDaysList = WEEK_DAYS.filter(d => d.key !== 'sun' && practitioner.days.includes(d.key))
    .map(d => d.label)
    .join(', ');

  return (
    <article
      id={practitioner.id}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 border-line bg-surface shadow-sm transition-transform duration-200 ${tiltClass} ${className}`}
    >
      {/* Jersey top collar band with oversized jersey numeral */}
      <div className="relative overflow-hidden bg-track-dark px-5 pt-5 pb-4 text-track-dark-ink">
        {/* Collar V-notch accent */}
        <div
          aria-hidden="true"
          className="mx-auto mb-3 h-2 w-20 rounded-full bg-coral"
        />
        {/* Oversized jersey number on the back panel */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-2 right-3 font-display text-7xl font-black leading-none tracking-tighter text-chalk/15 select-none"
        >
          #{practitioner.number}
        </span>

        <div className="relative flex items-center gap-4">
          <PractitionerPortrait id={practitioner.id} name={practitioner.name} />
          <div className="min-w-0">
            <span className="inline-block rounded-md bg-track-dark-surface px-2 py-0.5 font-mono text-xs font-bold text-tape-teal">
              #{practitioner.number}
            </span>
            <h3 className="mt-1 font-display text-xl font-black text-chalk">
              {practitioner.name}
            </h3>
            <p className="text-sm font-semibold text-track-dark-muted">{practitioner.title}</p>
          </div>
        </div>
      </div>

      {/* Main body: qualifications, tape-strip focus tags, 7-dot clinic week strip */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <p className="font-mono text-xs leading-relaxed text-muted">
          {practitioner.qualifications}
        </p>

        {/* Focus areas styled as angled kinesio-tape strips */}
        <div>
          <p className="mb-2 font-mono text-[0.68rem] font-bold tracking-wider text-muted uppercase">
            Focus areas
          </p>
          <ul className="flex flex-wrap gap-2">
            {practitioner.focus.map((item, idx) => {
              const coral = idx % 2 === 0;
              return (
                <li
                  key={item}
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold ${
                    coral
                      ? 'bg-coral/15 text-coral-ink border border-coral/40'
                      : 'bg-tape-teal/15 text-ink border border-tape-teal/50'
                  }`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Seven-dot week strip (Mon–Sun; filled = in clinic, hatched = Sunday closed) */}
        <div className="mt-auto pt-2">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="font-mono text-[0.68rem] font-bold tracking-wider text-muted uppercase">
              Clinic days
            </span>
            <span className="visually-hidden">In clinic on {openDaysList}</span>
          </div>
          <div
            aria-hidden="true"
            className="grid grid-cols-7 gap-1.5 rounded-xl border border-line bg-bg p-2"
            data-roster={practitioner.days.join(',')}
          >
            {WEEK_DAYS.map(day => {
              const isSunday = day.key === 'sun';
              const inClinic = !isSunday && practitioner.days.includes(day.key);
              return (
                <div
                  key={day.key}
                  data-day={day.key}
                  data-active={inClinic ? 'true' : 'false'}
                  className="flex flex-col items-center gap-1"
                  title={
                    isSunday
                      ? 'Sunday (clinic closed)'
                      : inClinic
                        ? `${day.label}: in clinic`
                        : `${day.label}: not rostered`
                  }
                >
                  <span className="font-mono text-[0.65rem] font-bold text-muted">{day.short}</span>
                  <span
                    className={`h-3.5 w-3.5 rounded-full border ${
                      isSunday
                        ? 'sunday-hatched border-line'
                        : inClinic
                          ? 'border-primary bg-primary'
                          : 'border-line bg-surface'
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer: languages & off-duty line */}
      <div className="border-t border-line bg-track/55 px-5 py-3.5 text-xs">
        <p className="font-mono text-muted">
          <span className="font-bold text-ink">Languages:</span> {practitioner.languages.join(', ')}
        </p>
        <p className="mt-1 italic text-muted">&ldquo;{practitioner.offDuty}&rdquo;</p>
      </div>
    </article>
  );
}
