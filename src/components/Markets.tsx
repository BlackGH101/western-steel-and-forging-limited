import { constructionClients, miningClients } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function Markets() {
  return (
    <section className="bg-paper" aria-labelledby="markets-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionReveal>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-steel">
                Markets &amp; customers
              </p>
              <h2
                id="markets-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-graphite sm:text-4xl"
              >
                Trusted by Ghana’s major gold producers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                The mining sector accounts for roughly{' '}
                <span className="stat-mono text-forge">60%</span> of WSFL’s customer base.
                Construction-rod distributors fill the remainder — inventory moving through yards
                that supply the country’s building trades.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="border border-slate/35">
                <div className="border-b border-slate/35 px-5 py-4">
                  <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-slate">
                    Mining clients
                  </h3>
                </div>
                <ul className="divide-y divide-slate/30">
                  {miningClients.map((client) => (
                    <li
                      key={client}
                      className="px-5 py-3.5 font-display text-sm font-medium tracking-tight text-graphite transition-colors hover:bg-steel/5 hover:text-forge sm:text-base"
                    >
                      {client}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 border border-slate/35">
                <div className="border-b border-slate/35 px-5 py-4">
                  <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-slate">
                    Construction rod distribution
                  </h3>
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
          <figure className="relative overflow-hidden border border-slate/35">
            <img
              src="./images/steel-structure.jpg"
              alt="Heavy steel structural members in an industrial setting"
              className="aspect-[21/9] w-full object-cover grayscale contrast-125"
              width={1200}
              height={514}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-graphite/75 px-4 py-3 text-xs tracking-wide text-paper/80">
              Finished steel for mining attrition and reinforcement — shipped from Tema
            </figcaption>
          </figure>
        </SectionReveal>
      </div>
    </section>
  )
}
