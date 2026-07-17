import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { company } from '../data/content'
import { siteImages } from '../data/images'
import { IconArrow } from './Icons'

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden bg-graphite text-paper"
      aria-labelledby="hero-heading"
    >
      <motion.div
        className="absolute inset-0"
        aria-hidden
        initial={reduce ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease }}
      >
        <img
          src={siteImages.hero.src}
          alt=""
          className="h-full w-full object-cover object-center"
          width={1600}
          height={1067}
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(105deg, color-mix(in srgb, var(--color-graphite) 92%, transparent) 0%, color-mix(in srgb, var(--color-graphite) 78%, transparent) 42%, color-mix(in srgb, var(--color-graphite) 45%, transparent) 72%, color-mix(in srgb, var(--color-graphite) 55%, transparent) 100%)',
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, #C9A24B 1px, transparent 1px), linear-gradient(to bottom, #C9A24B 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 40% 40%, black, transparent)',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl items-center px-5 pb-24 pt-28 lg:px-8 lg:pb-28 lg:pt-32">
        <motion.div
          className="max-w-xl lg:max-w-2xl"
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            {company.shortName}, Tema, Ghana
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="heading-display mt-5 text-4xl text-paper sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]"
            variants={fadeUp}
          >
            {company.slogan}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-lg text-lg leading-relaxed text-slate sm:text-xl"
            variants={fadeUp}
          >
            Steel forged for Ghana&apos;s mines and builders.
          </motion.p>
          <motion.p
            className="mt-4 max-w-lg text-base leading-relaxed text-slate"
            variants={fadeUp}
          >
            {company.tagline}. Integrated rolling and forging with measurable capacity and a
            reputation built since <span className="stat-mono text-paper">{company.founded}</span>.
          </motion.p>

          <motion.div className="mt-10 flex flex-wrap gap-3" variants={fadeUp}>
            <Link to="/products" className="btn-primary">
              View products
              <IconArrow />
            </Link>
            <Link to="/contact" className="btn-ghost-light">
              Contact us
            </Link>
          </motion.div>

          <motion.dl
            className="mt-12 grid grid-cols-3 gap-4 border-t border-forge/25 pt-8 sm:max-w-md"
            variants={fadeUp}
          >
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">Since</dt>
              <dd className="stat-mono mt-1 text-xl text-paper">2004</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">Lines</dt>
              <dd className="stat-mono mt-1 text-xl text-paper">5</dd>
            </div>
            <div>
              <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">Mining</dt>
              <dd className="stat-mono mt-1 text-xl text-forge">60%</dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>

      <span className="sr-only">{siteImages.hero.alt}</span>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.14em] text-slate">Scroll</span>
        <motion.span
          className="block h-7 w-px origin-top bg-linear-to-b from-forge/70 to-transparent"
          animate={reduce ? undefined : { scaleY: [1, 0.45, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
