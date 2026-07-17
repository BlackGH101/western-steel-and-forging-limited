import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { homeStats } from '../data/content'
import { SectionReveal } from './SectionReveal'

function useCountUp(target: number, active: boolean, duration = 1100) {
  const [value, setValue] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!active) return
    if (reduce) {
      setValue(target)
      return
    }
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = t * (2 - t)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, target, duration, reduce])

  return value
}

function StatCell({
  label,
  value,
  suffix,
  display,
  active,
}: {
  label: string
  value: number
  suffix: string
  display?: string
  active: boolean
}) {
  const n = useCountUp(value, active)
  return (
    <div className="border-graphite/8 px-4 py-8 text-center sm:border-l sm:px-6 first:sm:border-l-0">
      <p className="stat-mono text-3xl font-medium text-forge sm:text-4xl">
        {display ?? (
          <>
            {n}
            {suffix}
          </>
        )}
      </p>
      <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-slate">
        {label}
      </p>
    </div>
  )
}

export function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section className="relative z-10 -mt-8 px-5 sm:px-6 lg:px-8" aria-label="Key figures">
      <SectionReveal>
        <div
          ref={ref}
          className="mx-auto grid max-w-6xl grid-cols-2 border border-graphite/12 bg-white sm:grid-cols-4"
          style={{ borderRadius: 3 }}
        >
          {homeStats.map((stat) => (
            <StatCell
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              display={'display' in stat ? stat.display : undefined}
              active={inView}
            />
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
