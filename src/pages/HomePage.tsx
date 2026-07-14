import { Link } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { SectionReveal } from '../components/SectionReveal'

export function HomePage() {
  return (
    <main>
      <Hero />

      <section className="border-t border-slate/30 bg-paper" aria-labelledby="home-explore">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <SectionReveal>
            <h2 id="home-explore" className="sr-only">
              Explore
            </h2>
            <div className="grid gap-px bg-slate/35 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                to="/about"
                className="group bg-paper px-6 py-8 transition-colors hover:bg-steel/5 focus-visible:z-10"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-steel">About</p>
                <p className="mt-3 font-display text-xl font-semibold tracking-tight text-graphite group-hover:text-forge">
                  Company background
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  From Western Castings to an integrated rolling and forging plant in Tema, since
                  2004.
                </p>
              </Link>
              <Link
                to="/products"
                className="group bg-paper px-6 py-8 transition-colors hover:bg-steel/5 focus-visible:z-10"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-steel">
                  Products
                </p>
                <p className="mt-3 font-display text-xl font-semibold tracking-tight text-graphite group-hover:text-forge">
                  Spec-led steel lines
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Grinding balls, construction rods, oxygen, drums — and planned export lines.
                </p>
              </Link>
              <Link
                to="/process"
                className="group bg-paper px-6 py-8 transition-colors hover:bg-steel/5 focus-visible:z-10 sm:col-span-2 lg:col-span-1"
              >
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-steel">
                  Process
                </p>
                <p className="mt-3 font-display text-xl font-semibold tracking-tight text-graphite group-hover:text-forge">
                  Scrap to finished steel
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Induction furnace through forging mill — capacities in tons per month.
                </p>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  )
}
