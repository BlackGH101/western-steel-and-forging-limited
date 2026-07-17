import { Link } from 'react-router-dom'
import { company } from '../data/content'
import { siteImages } from '../data/images'
import { IconArrow } from './Icons'
import { SectionReveal } from './SectionReveal'

export function HomeAbout() {
  return (
    <section className="section-pad" aria-labelledby="home-about-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionReveal>
          <div className="relative overflow-hidden border border-graphite/12" style={{ borderRadius: 3 }}>
            <img
              src={siteImages.homeAbout.src}
              alt={siteImages.homeAbout.alt}
              className="mx-auto block h-auto w-full max-w-md"
              width={800}
              height={640}
            />
            <div className="absolute inset-0 bg-linear-to-t from-graphite/50 to-transparent" aria-hidden />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="eyebrow">About us</p>
          <p className="mt-3 font-display text-sm font-medium tracking-[0.1em] text-forge uppercase">
            {company.slogan}
          </p>
          <h2
            id="home-about-heading"
            className="heading-display mt-3 text-3xl text-graphite sm:text-4xl"
          >
            Built for demand casting alone could not meet
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel/90 sm:text-lg">
            {company.aboutShort}
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate">
            Commissioned in December 2004 and ramped to{' '}
            <span className="stat-mono text-graphite">2,000</span> tons per month within three
            months, supplying grinding balls and construction rods from Kpone Industrial Area,
            Tema.
          </p>
          <Link to="/about" className="btn-primary mt-8">
            Our story
            <IconArrow className="ml-2 h-4 w-4" />
          </Link>
        </SectionReveal>
      </div>
    </section>
  )
}
