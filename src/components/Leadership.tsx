import { SectionReveal } from './SectionReveal'

const namedLeadership = [
  {
    name: 'Pius Tamakloe',
    role: 'Managing Director',
    note: 'Renowned industrialist; leads WSFL’s five-member Board of Directors and day-to-day plant direction.',
  },
] as const

const boardBackgrounds = [
  { discipline: 'Legal practice', focus: 'Corporate governance and statutory compliance' },
  { discipline: 'Public finance', focus: 'Fiscal administration and public-sector oversight' },
  { discipline: 'Financial consulting', focus: 'Advisory, investment, and commercial scrutiny' },
  { discipline: 'Industry & operations', focus: 'Plant, market, and production oversight' },
] as const

export function Leadership() {
  return (
    <section
      id="leadership"
      className="border-t border-slate/30 bg-paper"
      aria-labelledby="leadership-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-steel">
              Leadership
            </p>
            <h2
              id="leadership-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-graphite sm:text-4xl"
            >
              Five-member Board of Directors
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Presented as a text roster — no placeholder headshots. Where public biographies for
              every seat are not listed here, the board’s disciplines are recorded instead of
              inventing names.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-12">
          <ul className="border border-slate/35">
            {namedLeadership.map((member) => (
              <li
                key={member.name}
                className="grid gap-2 border-b border-slate/35 px-5 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-6"
              >
                <span className="stat-mono text-xs text-forge sm:col-span-1">01</span>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-graphite">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm text-steel">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate sm:col-span-7">{member.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-8 border border-slate/35">
            <div className="border-b border-slate/35 px-5 py-4 sm:px-6">
              <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-slate">
                Remaining board seats — by discipline
              </h3>
            </div>
            <ul className="divide-y divide-slate/30">
              {boardBackgrounds.map((seat, i) => (
                <li
                  key={seat.discipline}
                  className="grid gap-1 px-5 py-5 transition-colors hover:bg-steel/5 sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-6"
                >
                  <span className="stat-mono text-xs text-forge sm:col-span-1">
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <p className="font-display text-base font-semibold tracking-tight text-graphite sm:col-span-4">
                    {seat.discipline}
                  </p>
                  <p className="text-sm text-slate sm:col-span-7">{seat.focus}</p>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
