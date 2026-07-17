import { Link } from 'react-router-dom'
import { products } from '../data/content'
import { IconArrow, IconProduct } from './Icons'
import { SectionReveal, Stagger, StaggerItem } from './SectionReveal'

/** Home product teasers — icons only so product photos stay exclusive to /products */
export function HomeProducts() {
  const featured = products.slice(0, 4)

  return (
    <section className="bg-graphite section-pad text-paper" aria-labelledby="home-products-heading">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">Products</p>
              <h2
                id="home-products-heading"
                className="heading-display mt-3 text-3xl text-paper sm:text-4xl"
              >
                Specification-led steel lines
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate">
                Measurable sizes and capacities: grinding balls, rods, oxygen, and packaging
                built for mining and construction.
              </p>
            </div>
            <Link to="/products" className="btn-primary shrink-0">
              All products
              <IconArrow />
            </Link>
          </div>
        </SectionReveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {featured.map((product) => (
            <StaggerItem key={product.name}>
              <article
                className="group flex h-full flex-col border border-forge/25 bg-transparent p-6 transition-[border-color,transform] duration-320 hover:-translate-y-1 hover:border-forge/55 sm:p-8"
                style={{
                  borderRadius: 3,
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="icon-frame border-forge/45 text-forge">
                    <IconProduct name={product.icon} />
                  </div>
                  {'planned' in product && product.planned && (
                    <span
                      className="border border-forge/30 px-2 py-0.5 text-[0.625rem] uppercase tracking-[0.1em] text-slate"
                      style={{ borderRadius: 2 }}
                    >
                      Planned
                    </span>
                  )}
                </div>
                <h3 className="heading-display mt-5 text-xl text-paper">{product.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{product.description}</p>
                <p className="stat-mono mt-5 text-sm text-forge">{product.spec}</p>
                <Link to={`/products/${product.slug}`} className="btn-text-light mt-6">
                  Learn more
                  <IconArrow />
                </Link>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
