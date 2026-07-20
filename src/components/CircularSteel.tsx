import { Link } from 'react-router-dom'
import { IconArrow } from './Icons'
import { SectionReveal } from './SectionReveal'

export function CircularSteel() {
  return (
    <section className="bg-paper" aria-labelledby="circular-heading">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionReveal>
          <div className="grid gap-10 border border-graphite/12 bg-white p-8 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12" style={{ borderRadius: 3 }}>
            <div className="lg:col-span-7">
              <p className="eyebrow">Circular production</p>
              <h2
                id="circular-heading"
                className="heading-display mt-3 text-3xl text-graphite sm:text-4xl"
              >
                From scrap to strength
              </h2>
              <p className="mt-5 text-base leading-relaxed text-steel/90 sm:text-lg">
                Unusable scrap enters the Kpone works, is melted in induction furnaces, shaped on
                rolling and forging lines, and leaves as grinding balls and construction rods for
                Ghana&apos;s mines and builders. The loop is the business model, not a footnote.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Local manufacture shortens supply chains for West African mills and building
                distributors compared with import-dependent forged media and rod supply.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1 lg:content-center">
              <div className="border border-graphite/10 p-5" style={{ borderRadius: 3 }}>
                <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">Input</dt>
                <dd className="mt-2 font-display text-base font-semibold text-graphite">Scrap metal</dd>
              </div>
              <div className="border border-graphite/10 p-5" style={{ borderRadius: 3 }}>
                <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">Process</dt>
                <dd className="mt-2 font-display text-base font-semibold text-graphite">
                  Melt, roll, forge
                </dd>
              </div>
              <div className="border border-graphite/10 p-5" style={{ borderRadius: 3 }}>
                <dt className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">Output</dt>
                <dd className="mt-2 font-display text-base font-semibold text-graphite">
                  Finished steel
                </dd>
              </div>
            </dl>
            <div className="lg:col-span-12 lg:mt-2">
              <Link to="/process" className="btn-text">
                See the full production process
                <IconArrow />
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
