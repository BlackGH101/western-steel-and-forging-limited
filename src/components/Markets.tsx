import { constructionClients, miningClients } from '../data/content'
import { siteImages } from '../data/images'
import { SectionReveal } from './SectionReveal'

export function Markets() {
  return (
    <section className="bg-paper" aria-labelledby="markets-heading">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionReveal>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Markets &amp; customers</p>
              <h1
                id="markets-heading"
                className="heading-display mt-3 text-3xl text-graphite sm:text-4xl lg:text-5xl"
              >
                Trusted by Ghana’s major gold producers
              </h1>
              <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
                The mining sector accounts for roughly{' '}
                <span className="stat-mono text-forge">60%</span> of WSFL’s customer base.
                Construction-rod distributors fill the remainder.
              </p>
            </div>

            <div className="space-y-5 lg:col-span-6 lg:col-start-7">
              <div className="overflow-hidden border border-graphite/12 bg-white" style={{ borderRadius: 3 }}>
                <div className="border-b border-graphite/10 px-5 py-4">
                  <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-slate">
                    Mining clients
                  </h2>
                </div>
                <ul className="divide-y divide-graphite/8">
                  {miningClients.map((client) => (
                    <li
                      key={client}
                      className="px-5 py-3.5 font-display text-sm font-medium tracking-tight text-graphite transition-colors duration-320 hover:bg-mist/80 hover:text-forge sm:text-base"
                    >
                      {client}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden border border-graphite/12 bg-white" style={{ borderRadius: 3 }}>
                <div className="border-b border-graphite/10 px-5 py-4">
                  <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.12em] text-slate">
                    Construction rod distribution
                  </h2>
                </div>
                <ul>
                  {constructionClients.map((client) => (
                    <li
                      key={client}
                      className="px-5 py-3.5 font-display text-sm font-medium tracking-tight text-graphite sm:text-base"
                    >
                      {client}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-14">
          <figure
            className="mx-auto max-w-4xl overflow-hidden border border-graphite/12"
            style={{ borderRadius: 3 }}
          >
            <img
              src={siteImages.markets.src}
              alt={siteImages.markets.alt}
              className="mx-auto block h-auto w-full max-w-3xl"
              width={1100}
              height={500}
            />
            <figcaption className="border-t border-graphite/10 bg-white px-4 py-2.5 text-xs tracking-wide text-slate">
              From plant to market: grinding media and rods serving mines and builders across the
              region
            </figcaption>
          </figure>
        </SectionReveal>
      </div>
    </section>
  )
}
