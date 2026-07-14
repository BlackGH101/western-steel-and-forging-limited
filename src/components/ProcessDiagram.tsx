import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { useRef } from 'react'
import { processStages, supportingFacilities } from '../data/content'
import { SectionReveal } from './SectionReveal'

function StageCard({
  index,
  title,
  detail,
  capacity,
  progress,
  rangeStart,
  rangeEnd,
}: {
  index: number
  title: string
  detail: string
  capacity: string
  progress: MotionValue<number>
  rangeStart: number
  rangeEnd: number
}) {
  const reduce = useReducedMotion()
  const glow = useTransform(progress, [rangeStart, rangeEnd], [0, 1])
  const borderColor = useTransform(
    glow,
    [0, 1],
    ['rgba(138, 148, 160, 0.45)', 'rgba(214, 96, 30, 1)'],
  )
  const accentOpacity = useTransform(glow, [0, 1], [0.2, 1])
  const capacityOpacity = useTransform(glow, [0.35, 1], [0, 1])

  if (reduce) {
    return (
      <article className="relative flex min-w-0 flex-1 flex-col border border-forge/80 bg-graphite p-5">
        <span className="stat-mono text-xs text-forge">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-paper">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{detail}</p>
        <p className="stat-mono mt-4 text-lg text-forge">{capacity}</p>
      </article>
    )
  }

  return (
    <motion.article
      style={{ borderColor }}
      className="relative flex min-w-0 flex-1 flex-col border bg-graphite/90 p-5"
    >
      <motion.span style={{ opacity: accentOpacity }} className="stat-mono text-xs text-forge">
        {String(index + 1).padStart(2, '0')}
      </motion.span>
      <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-paper">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{detail}</p>
      <motion.p style={{ opacity: capacityOpacity }} className="stat-mono mt-4 text-lg text-forge">
        {capacity}
      </motion.p>
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-forge"
        aria-hidden
      />
    </motion.article>
  )
}

function Connector({
  progress,
  rangeStart,
  rangeEnd,
}: {
  progress: MotionValue<number>
  rangeStart: number
  rangeEnd: number
}) {
  const reduce = useReducedMotion()
  const fill = useTransform(progress, [rangeStart, rangeEnd], ['0%', '100%'])

  if (reduce) {
    return (
      <div className="hidden w-5 shrink-0 items-center lg:flex" aria-hidden>
        <div className="h-px w-full bg-forge" />
      </div>
    )
  }

  return (
    <div className="relative hidden w-5 shrink-0 items-center lg:flex" aria-hidden>
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-steel/50" />
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px origin-left -translate-y-1/2 bg-forge"
        style={{ width: fill }}
      />
    </div>
  )
}

function MobileStage({
  index,
  title,
  detail,
  capacity,
  progress,
  rangeStart,
  rangeEnd,
  isLast,
}: {
  index: number
  title: string
  detail: string
  capacity: string
  progress: MotionValue<number>
  rangeStart: number
  rangeEnd: number
  isLast: boolean
}) {
  const reduce = useReducedMotion()
  const glow = useTransform(progress, [rangeStart, rangeEnd], [0, 1])
  const borderColor = useTransform(
    glow,
    [0, 1],
    ['rgba(64, 86, 110, 0.7)', 'rgba(214, 96, 30, 1)'],
  )
  const lineHeight = useTransform(progress, [rangeStart, rangeEnd], ['0%', '100%'])
  const capacityOpacity = useTransform(glow, [0.3, 1], [0, 1])

  if (reduce) {
    return (
      <li className="relative flex gap-4 pb-10">
        {!isLast && (
          <div className="absolute top-8 bottom-0 left-[11px] w-px bg-forge/60" aria-hidden />
        )}
        <div className="relative z-10 mt-1 h-6 w-6 shrink-0 rounded-full border-2 border-forge bg-graphite" />
        <div className="min-w-0 flex-1 border border-forge/70 p-4">
          <span className="stat-mono text-xs text-forge">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-2 font-display text-base font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-slate">{detail}</p>
          <p className="stat-mono mt-3 text-forge">{capacity}</p>
        </div>
      </li>
    )
  }

  return (
    <li className="relative flex gap-4 pb-10">
      {!isLast && (
        <div className="absolute top-8 bottom-0 left-[11px] w-px bg-steel/50" aria-hidden>
          <motion.div className="w-full origin-top bg-forge" style={{ height: lineHeight }} />
        </div>
      )}
      <motion.div
        style={{ borderColor }}
        className="relative z-10 mt-1 h-6 w-6 shrink-0 rounded-full border-2 bg-graphite"
      />
      <motion.div style={{ borderColor }} className="min-w-0 flex-1 border p-4">
        <span className="stat-mono text-xs text-forge">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className="mt-2 font-display text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate">{detail}</p>
        <motion.p style={{ opacity: capacityOpacity }} className="stat-mono mt-3 text-forge">
          {capacity}
        </motion.p>
      </motion.div>
    </li>
  )
}

export function ProcessDiagram() {
  const trackRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 70%', 'end 35%'],
  })

  const n = processStages.length

  return (
    <section
      id="process"
      className="border-t border-steel/40 bg-graphite text-paper"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-forge">
              Production process
            </p>
            <h2
              id="process-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              Scrap in. Finished steel out.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              A sequential physical line — from induction melt through reheating, rolling,
              cross-roll, and forging. Scroll through the stages; each lights in forge heat with
              its rated monthly capacity.
            </p>
          </div>
        </SectionReveal>

        <div ref={trackRef} className="mt-16">
          <div
            className="hidden gap-0 overflow-x-auto pb-2 lg:flex lg:items-stretch"
            role="list"
            aria-label="Production stages"
          >
            {processStages.map((stage, i) => {
              const start = i / n
              const end = (i + 0.85) / n
              return (
                <div key={stage.id} className="flex min-w-0 shrink-0 grow basis-[11.5rem] xl:basis-0" role="listitem">
                  {i > 0 && (
                    <Connector
                      progress={scrollYProgress}
                      rangeStart={(i - 0.2) / n}
                      rangeEnd={i / n}
                    />
                  )}
                  <StageCard
                    index={i}
                    title={stage.title}
                    detail={stage.detail}
                    capacity={stage.capacity}
                    progress={scrollYProgress}
                    rangeStart={start}
                    rangeEnd={end}
                  />
                </div>
              )
            })}
          </div>

          <ol className="relative lg:hidden" aria-label="Production stages">
            {processStages.map((stage, i) => {
              const start = i / n
              const end = (i + 0.9) / n
              return (
                <MobileStage
                  key={stage.id}
                  index={i}
                  title={stage.title}
                  detail={stage.detail}
                  capacity={stage.capacity}
                  progress={scrollYProgress}
                  rangeStart={start}
                  rangeEnd={end}
                  isLast={i === n - 1}
                />
              )
            })}
          </ol>
        </div>

        <SectionReveal className="mt-16 border-t border-steel/40 pt-12">
          <h3 className="font-display text-lg font-semibold tracking-tight">
            Supporting facilities
          </h3>
          <ul className="mt-6 grid gap-px bg-steel/40 sm:grid-cols-2 lg:grid-cols-4">
            {supportingFacilities.map((f) => (
              <li key={f.name} className="bg-graphite px-5 py-5">
                <p className="text-sm font-medium text-paper">{f.name}</p>
                <p className="stat-mono mt-2 text-sm text-forge">{f.capacity}</p>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  )
}
