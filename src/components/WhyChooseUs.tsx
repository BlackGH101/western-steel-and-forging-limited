import { whyChooseUs } from '../data/content'
import { whyIcons } from './Icons'
import { SectionReveal, Stagger, StaggerItem } from './SectionReveal'

export function WhyChooseUs() {
  return (
    <section className="section-pad" aria-labelledby="why-heading">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Why WSFL</p>
            <h2 id="why-heading" className="heading-display mt-3 text-3xl text-graphite sm:text-4xl">
              Why choose us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              An integrated plant with clear capacities, named market relationships, and a scrap-to-steel
              operating model.
            </p>
          </div>
        </SectionReveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = whyIcons[i] ?? whyIcons[0]
            return (
              <StaggerItem key={item.title}>
                <article className="surface-card flex h-full gap-4 p-6">
                  <div className="icon-frame mt-0.5">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="heading-display text-lg text-graphite">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                  </div>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
