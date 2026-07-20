import { Link } from 'react-router-dom'
import { company } from '../data/content'
import { IconArrow } from './Icons'
import { SectionReveal } from './SectionReveal'

export function HomeCTA() {
  return (
    <section className="px-5 pb-20 sm:px-6 lg:px-8 lg:pb-28" aria-labelledby="cta-heading">
      <SectionReveal>
        <div
          className="relative mx-auto max-w-6xl overflow-hidden border border-forge/30 bg-graphite px-8 py-14 text-center sm:px-12 sm:py-16 lg:py-20"
          style={{ borderRadius: 3 }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              background:
                'radial-gradient(ellipse 50% 70% at 85% 40%, color-mix(in srgb, var(--color-forge) 18%, transparent), transparent 65%)',
            }}
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="eyebrow">{company.slogan}</p>
            <h2
              id="cta-heading"
              className="heading-display mt-4 text-3xl text-paper sm:text-4xl lg:text-[2.75rem]"
            >
              Ready to discuss supply?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
              Enquire about grinding balls, construction rods, or a plant visit at our Tema
              registered office.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact#enquiry" className="btn-primary">
                Request supply
                <IconArrow />
              </Link>
              <Link to="/process" className="btn-ghost-light">
                See our process
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
