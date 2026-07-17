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
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            'linear-gradient(165deg, #0a1f33 0%, #0f2a42 48%, #0a1f33 100%), radial-gradient(ellipse 55% 45% at 78% 28%, color-mix(in srgb, var(--color-forge) 14%, transparent), transparent 70%)',
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, #C9A24B 1px, transparent 1px), linear-gradient(to bottom, #C9A24B 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 65% 55% at 50% 40%, black, transparent)',
        }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 0.045 }}
        transition={{ duration: 1.2, ease }}
      />

      <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-6xl items-center gap-12 px-5 pb-24 pt-28 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-32">
        <motion.div
          className="lg:col-span-6"
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

        <motion.div
          className="relative lg:col-span-6"
          initial={reduce ? false : { opacity: 0, x: 28, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <div className="media-frame relative overflow-hidden border border-forge/30" style={{ borderRadius: 3 }}>
            <motion.img
              src={siteImages.hero.src}
              alt={siteImages.hero.alt}
              className="mx-auto block h-auto w-full max-w-lg lg:max-w-none"
              width={1200}
              height={900}
              initial={reduce ? false : { scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.1, ease }}
            />
            <div
              className="absolute inset-0 bg-linear-to-tr from-graphite/65 via-graphite/15 to-transparent"
              aria-hidden
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 border-t border-forge/30 bg-graphite/90 px-4 py-3 sm:right-auto sm:max-w-xs"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.55, ease }}
            >
              <p className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">Plant capacity</p>
              <p className="mt-1 font-display text-sm font-medium text-paper">
                Rolling mill up to{' '}
                <span className="stat-mono text-forge">8,000</span> t/mo
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

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
