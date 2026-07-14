import { products } from '../data/content'
import { SectionReveal } from './SectionReveal'

export function Products() {
  return (
    <section id="products" className="border-t border-slate/30 bg-paper" aria-labelledby="products-heading">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-steel">Products</p>
            <h2
              id="products-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-tight text-graphite sm:text-4xl"
            >
              Specification-led output for mines and construction
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Five product lines — four in production, one planned for post-expansion export —
              each defined by measurable size, capacity, or market role rather than marketing
              adjectives.
            </p>
          </div>
        </SectionReveal>

        <ul className="mt-14 divide-y divide-slate/35 border-y border-slate/35">
          {products.map((product, i) => (
            <SectionReveal key={product.name} delay={i * 0.04}>
              <li className="grid gap-4 py-8 sm:grid-cols-12 sm:gap-6 sm:py-10">
                <div className="sm:col-span-1">
                  <span className="stat-mono text-sm text-forge">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-graphite">
                    {product.name}
                    {'planned' in product && product.planned && (
                      <span className="ml-2 align-middle text-xs font-sans font-medium uppercase tracking-[0.12em] text-steel">
                        Planned
                      </span>
                    )}
                  </h3>
                </div>
                <div className="sm:col-span-4">
                  <p className="text-sm leading-relaxed text-graphite/80">{product.description}</p>
                </div>
                <div className="sm:col-span-3 sm:text-right">
                  <p className="text-[0.6875rem] uppercase tracking-[0.12em] text-slate">Spec</p>
                  <p className="stat-mono mt-1 text-sm text-graphite sm:text-base">{product.spec}</p>
                </div>
              </li>
            </SectionReveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
