import { siteImages } from '../data/images'
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
    <section className="bg-paper" aria-labelledby="leadership-heading">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Leadership</p>
            <h1
              id="leadership-heading"
              className="heading-display mt-3 text-3xl text-graphite sm:text-4xl lg:text-5xl"
            >
              Five-member Board of Directors
            </h1>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-10">
          <figure className="overflow-hidden border border-graphite/12" style={{ borderRadius: 3 }}>
            <img
              src={siteImages.leadership.src}
              alt={siteImages.leadership.alt}
              className="mx-auto block h-auto w-full max-w-3xl"
              width={1100}
              height={500}
            />
            <figcaption className="border-t border-graphite/10 bg-white px-4 py-3 text-xs tracking-wide text-slate">
              Collaboration across operations, governance, and commercial leadership
            </figcaption>
          </figure>
        </SectionReveal>

        <SectionReveal className="mt-12">
          <ul className="overflow-hidden border border-graphite/12 bg-white" style={{ borderRadius: 3 }}>
            {namedLeadership.map((member) => (
              <li
                key={member.name}
                className="grid gap-2 border-b border-graphite/10 px-6 py-8 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="stat-mono text-xs text-forge sm:col-span-1">01</span>
                <div className="sm:col-span-4">
                  <h2 className="heading-display text-2xl text-graphite">{member.name}</h2>
                  <p className="mt-1 text-sm text-steel">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate sm:col-span-7">{member.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-5 overflow-hidden border border-graphite/12 bg-white" style={{ borderRadius: 3 }}>
            <div className="border-b border-graphite/10 px-6 py-4">
              <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-slate">
                Remaining board seats by discipline
              </h2>
            </div>
            <ul className="divide-y divide-graphite/8">
              {boardBackgrounds.map((seat, i) => (
                <li
                  key={seat.discipline}
                  className="grid gap-1 px-6 py-5 transition-colors duration-320 hover:bg-mist/50 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                >
                  <span className="stat-mono text-xs text-forge sm:col-span-1">
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <p className="heading-display text-base text-graphite sm:col-span-4">
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
