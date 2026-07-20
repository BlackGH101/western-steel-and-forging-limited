import { company } from '../data/content'
import { siteImages } from '../data/images'
import { CircularSteel } from './CircularSteel'
import { CompanyTimeline } from './CompanyTimeline'
import { MissionVisionValues } from './MissionVisionValues'
import { SectionReveal } from './SectionReveal'

export function About() {
  return (
    <>
      <section className="bg-paper" aria-labelledby="about-heading">
        <div className="mx-auto max-w-6xl section-pad">
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-5">
                <p className="eyebrow">Company background</p>
                <h1
                  id="about-heading"
                  className="heading-display mt-3 text-3xl text-graphite sm:text-4xl lg:text-5xl"
                >
                  Built for mining demand the cast process could not meet
                </h1>
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-[3px] border border-graphite/12 bg-white p-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">
                      Commissioned
                    </p>
                    <p className="stat-mono mt-2 text-xl text-forge">Dec 2004</p>
                  </div>
                  <div className="rounded-[3px] border border-graphite/12 bg-white p-5">
                    <p className="text-[0.65rem] uppercase tracking-[0.12em] text-slate">
                      Ramp capacity
                    </p>
                    <p className="stat-mono mt-2 text-xl text-graphite">2,000 t/mo</p>
                    <p className="mt-1 text-xs text-slate">within three months</p>
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-graphite/85 lg:col-span-6 lg:col-start-7">
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
                  Day to day, the plant converts unusable scrap metal into finished steel:
                  grinding balls, construction rods, and supporting industrial products. That
                  scrap-to-steel loop is not a sustainability claim appended after the fact; it is
                  the operating model of the furnace hall.
                </p>
                <figure className="mt-8 overflow-hidden border border-graphite/12" style={{ borderRadius: 3 }}>
                  <img
                    src={siteImages.about.src}
                    alt={siteImages.about.alt}
                    className="mx-auto block h-auto w-full max-w-lg"
                    width={900}
                    height={600}
                  />
                  <figcaption className="border-t border-graphite/10 bg-white px-4 py-3 text-xs tracking-wide text-slate">
                    Scrap to finished steel: the integrated plant model behind WSFL
                  </figcaption>
                </figure>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
      <CompanyTimeline />
      <CircularSteel />
      <MissionVisionValues />
    </>
  )
}
