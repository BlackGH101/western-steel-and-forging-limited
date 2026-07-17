import { trustHighlights } from '../data/content'
import { SectionReveal, Stagger, StaggerItem } from './SectionReveal'

export function TrustSection() {
  return (
    <section className="section-pad" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Trust</p>
            <h2 id="trust-heading" className="heading-display mt-3 text-3xl text-graphite sm:text-4xl">
              Built on measurable delivery
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Our standing rests on plant capacity, product specifications, and long-term supply
              relationships across Ghana’s mining and construction markets.
            </p>
          </div>
        </SectionReveal>

        <Stagger className="mt-12 grid gap-4 lg:grid-cols-3">
          {trustHighlights.map((item) => (
            <StaggerItem key={item.role}>
              <blockquote className="surface-card flex h-full flex-col p-7">
                <p className="flex-1 text-base leading-relaxed text-graphite/90">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-graphite/10 pt-4">
                  <p className="font-display text-sm font-semibold text-graphite">{item.role}</p>
                  <p className="mt-0.5 text-xs tracking-wide text-slate">{item.company}</p>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
