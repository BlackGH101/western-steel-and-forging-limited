import { company } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function About() {
  return (
    <section id="about" className="bg-paper" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionReveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-steel">
                Company background
              </p>
              <h2
                id="about-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-graphite sm:text-4xl"
              >
                Built for mining demand the cast process could not meet
              </h2>
              <div className="mt-8 border-t border-slate/35 pt-6">
                <p className="text-xs uppercase tracking-[0.14em] text-slate">Commissioned</p>
                <p className="stat-mono mt-1 text-2xl text-forge">December 2004</p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate">
                  Ramp to capacity
                </p>
                <p className="stat-mono mt-1 text-2xl text-graphite">2,000 t/mo</p>
                <p className="mt-1 text-sm text-slate">within three months of commissioning</p>
              </div>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-graphite/85 lg:col-span-7 lg:col-start-6">
              <p>
                {company.name} was established to manufacture steel grinding balls for gold mines
                in Ghana and the sub-region, alongside construction rods for the domestic building
                trade. Its sister company, Western Castings Ltd (WCL), had been the main local
                supplier of steel grinding balls to Ghana’s mines for the prior fifteen years.
              </p>
              <p>
                WSFL was created as an integrated rolling and forging plant in Tema, using modern
                casting and forging technology to deliver the higher quality and higher volume that
                WCL’s casting process alone could no longer support.
              </p>
              <p>
                Day to day, the plant converts unusable scrap metal into finished steel —
                grinding balls, construction rods, and supporting industrial products. That
                scrap-to-steel loop is not a sustainability slogan appended after the fact; it is
                the operating model of the furnace hall.
              </p>
              <figure className="mt-10 border border-slate/35">
                <img
                  src="./images/furnace.jpg"
                  alt="High-temperature industrial furnace interior with glowing steel heat"
                  className="aspect-[21/9] w-full object-cover"
                  width={1200}
                  height={514}
                />
                <figcaption className="border-t border-slate/35 px-4 py-3 text-xs tracking-wide text-slate">
                  Furnace heat at the heart of WSFL’s scrap-to-product cycle · Tema
                </figcaption>
              </figure>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
