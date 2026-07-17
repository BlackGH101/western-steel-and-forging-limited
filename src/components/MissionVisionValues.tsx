import { coreValues, missionVision } from '../data/content'
import { IconEye, IconTarget, valueIcons } from './Icons'
import { SectionReveal, Stagger, StaggerItem } from './SectionReveal'

export function MissionVisionValues() {
  return (
    <section className="bg-mist/50 section-pad" aria-labelledby="mvv-heading">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Purpose</p>
            <h2
              id="mvv-heading"
              className="heading-display mt-3 text-3xl text-graphite sm:text-4xl"
            >
              Mission, vision &amp; core values
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              The standards that guide production, partnerships, and every tonne that leaves Tema.
            </p>
          </div>
        </SectionReveal>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-2">
          <StaggerItem>
            <article className="surface-card h-full p-8 sm:p-10">
              <div className="icon-frame">
                <IconTarget />
              </div>
              <h3 className="heading-display mt-6 text-2xl text-graphite">
                {missionVision.mission.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate">
                {missionVision.mission.description}
              </p>
            </article>
          </StaggerItem>
          <StaggerItem>
            <article className="surface-card h-full p-8 sm:p-10">
              <div className="icon-frame">
                <IconEye />
              </div>
              <h3 className="heading-display mt-6 text-2xl text-graphite">
                {missionVision.vision.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate">
                {missionVision.vision.description}
              </p>
            </article>
          </StaggerItem>
        </Stagger>

        <Stagger className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, i) => {
            const Icon = valueIcons[i] ?? valueIcons[0]
            return (
              <StaggerItem key={value.title}>
                <article className="surface-card group h-full p-6 sm:p-7">
                  <div className="icon-frame">
                    <Icon />
                  </div>
                  <h3 className="heading-display mt-5 text-lg text-graphite">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{value.description}</p>
                </article>
              </StaggerItem>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
