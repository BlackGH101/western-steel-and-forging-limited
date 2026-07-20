import { companyTimeline } from '../data/plant'
import { SectionReveal } from './SectionReveal'

export function CompanyTimeline() {
  return (
    <section className="border-t border-graphite/10 bg-mist/30" aria-labelledby="timeline-heading">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Our history</p>
            <h2
              id="timeline-heading"
              className="heading-display mt-3 text-3xl text-graphite sm:text-4xl"
            >
              From commissioning to integrated steel supply
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Key milestones since WSFL opened in Tema, built to meet mining volume and quality that
              casting alone could not sustain.
            </p>
          </div>
        </SectionReveal>

        <ol className="relative mt-12 space-y-0">
          {companyTimeline.map((event, i) => (
            <SectionReveal key={event.year + event.title} delay={i * 0.04}>
              <li className="relative grid gap-4 pb-10 sm:grid-cols-12 sm:gap-8 lg:gap-12">
                {i < companyTimeline.length - 1 && (
                  <span
                    className="absolute top-8 bottom-0 left-[3.25rem] hidden w-px bg-graphite/15 sm:block"
                    aria-hidden
                  />
                )}
                <div className="sm:col-span-3 lg:col-span-2">
                  <p className="stat-mono text-2xl font-medium text-forge sm:text-3xl">{event.year}</p>
                </div>
                <article
                  className="surface-card sm:col-span-9 lg:col-span-10"
                  style={{ padding: '1.25rem 1.5rem' }}
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-graphite">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate sm:text-base">{event.detail}</p>
                </article>
              </li>
            </SectionReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
