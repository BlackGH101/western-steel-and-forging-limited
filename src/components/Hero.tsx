import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { company, snapshotStats } from '../data/content'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative min-h-[100svh] bg-graphite text-paper"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-6xl lg:grid-cols-12 lg:px-8">
        {/* Copy column */}
        <div className="relative z-10 flex flex-col justify-end px-5 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:col-span-5 lg:justify-center lg:px-0 lg:pb-24 lg:pt-28">
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-sm font-medium tracking-[0.18em] text-forge uppercase">
              {company.shortName}
            </p>
            <h1
              id="hero-heading"
              className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.15rem]"
            >
              Western Steel and Forgings Limited
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate sm:text-lg">
              {company.tagline}
            </p>

            <div className="mt-8 border-t border-steel/50 pt-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate">
                In operation
              </p>
              <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                <span className="stat-mono text-forge">22</span>
                <span className="ml-2 text-xl font-medium text-paper/80 sm:text-2xl">
                  years converting scrap into finished steel
                </span>
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
              <Link
                to="/products"
                className="inline-flex items-center border border-forge bg-forge px-5 py-2.5 text-sm font-medium text-graphite transition-colors hover:bg-transparent hover:text-forge"
              >
                View products
              </Link>
              <Link
                to="/process"
                className="inline-flex items-center border border-steel px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-forge hover:text-forge"
              >
                Production process
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image column */}
        <motion.div
          className="relative lg:col-span-7"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="relative h-[48vh] min-h-[280px] overflow-hidden sm:h-[56vh] lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[calc(100%+2rem)]">
            <img
              src="./images/hero-mill.jpg"
              alt="Industrial steel mill with molten metal pour and heavy rolling equipment"
              className="h-full w-full object-cover"
              width={1600}
              height={1000}
            />
            {/* Duotone / furnace heat overlay */}
            <div
              className="absolute inset-0 bg-graphite/55 mix-blend-multiply"
              aria-hidden
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-graphite via-graphite/20 to-steel/30 lg:bg-linear-to-r lg:from-graphite lg:via-graphite/40 lg:to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(ellipse 60% 50% at 70% 60%, color-mix(in srgb, var(--color-forge) 45%, transparent), transparent 70%)',
              }}
              aria-hidden
            />
          </div>
        </motion.div>
      </div>

      {/* Snapshot stats */}
      <div className="border-t border-steel/40 bg-graphite">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-steel/35 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
          {snapshotStats.map((stat) => (
            <div key={stat.label} className="px-5 py-5 lg:px-6">
              <dt className="text-[0.6875rem] font-medium uppercase tracking-[0.14em] text-slate">
                {stat.label}
              </dt>
              <dd className="stat-mono mt-1.5 text-lg text-paper sm:text-xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
