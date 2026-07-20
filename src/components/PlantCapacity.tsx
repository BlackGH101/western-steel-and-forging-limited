import { plantCapacity } from '../data/plant'
import { SectionReveal, Stagger, StaggerItem } from './SectionReveal'

export function PlantCapacity() {
  return (
    <section className="bg-graphite section-pad text-paper" aria-labelledby="capacity-heading">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Plant at a glance</p>
            <h2
              id="capacity-heading"
              className="heading-display mt-3 text-3xl text-paper sm:text-4xl"
            >
              Rated monthly capacity across the Tema works
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Measurable output at each stage, from induction melt through rolling, cross-roll,
              forging, and supporting facilities on one integrated site.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-12 space-y-10">
          {plantCapacity.map((group) => (
            <SectionReveal key={group.category}>
              <h3 className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-forge">
                {group.category}
              </h3>
              <Stagger className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item) => (
                  <StaggerItem key={item.name}>
                    <article
                      className="flex h-full flex-col border border-forge/25 bg-graphite/50 p-5 sm:p-6"
                      style={{ borderRadius: 3 }}
                    >
                      <h4 className="font-display text-base font-semibold tracking-tight text-paper">
                        {item.name}
                      </h4>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{item.detail}</p>
                      <p className="stat-mono mt-4 text-lg text-forge">{item.capacity}</p>
                    </article>
                  </StaggerItem>
                ))}
              </Stagger>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
