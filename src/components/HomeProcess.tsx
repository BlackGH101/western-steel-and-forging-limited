import { Link } from 'react-router-dom'
import { siteImages } from '../data/images'
import { IconArrow } from './Icons'
import { SectionReveal } from './SectionReveal'

export function HomeProcess() {
  return (
    <section className="section-pad" aria-labelledby="home-process-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionReveal>
          <div className="relative overflow-hidden border border-graphite/12" style={{ borderRadius: 3 }}>
            <img
              src={siteImages.homeProcess.src}
              alt={siteImages.homeProcess.alt}
              className="mx-auto block h-auto w-full max-w-md"
              width={800}
              height={640}
            />
            <div className="absolute inset-0 bg-linear-to-t from-graphite/50 to-transparent" aria-hidden />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="eyebrow">Production process</p>
          <p className="mt-3 font-display text-sm font-medium tracking-[0.1em] text-forge uppercase">
            Scrap in. Finished steel out.
          </p>
          <h2
            id="home-process-heading"
            className="heading-display mt-3 text-3xl text-graphite sm:text-4xl"
          >
            From melt to roll and forge on one integrated line
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel/90 sm:text-lg">
            Induction furnaces melt scrap into steel, then reheating, rolling, cross-roll, and
            forging mills shape it into grinding balls and construction rods for Ghana&apos;s mines
            and builders.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Rated capacity runs from{' '}
            <span className="stat-mono text-graphite">4,000</span> t/mo at melt through{' '}
            <span className="stat-mono text-graphite">8,000</span> t/mo on the rolling mill, with
            dedicated lines for mining media and reinforcement.
          </p>
          <Link to="/process" className="btn-primary mt-8">
            See our process
            <IconArrow className="ml-2 h-4 w-4" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
