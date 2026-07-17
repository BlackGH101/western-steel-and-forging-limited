import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { products } from '../data/content'
import { siteImages } from '../data/images'
import { IconArrow, IconProduct } from './Icons'
import { SectionReveal, Stagger, StaggerItem } from './SectionReveal'

const ease = [0.22, 1, 0.36, 1] as const

export function Products() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-paper" aria-labelledby="products-heading">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Products</p>
            <h1
              id="products-heading"
              className="heading-display mt-3 text-3xl text-graphite sm:text-4xl lg:text-5xl"
            >
              Specification-led output for mines and construction
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Five product lines: four in production, one planned for post-expansion export,
              each defined by measurable size, capacity, or market role.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className="mt-10" delay={0.08}>
          <figure
            className="media-frame mx-auto max-w-3xl overflow-hidden border border-graphite/12"
            style={{ borderRadius: 3 }}
          >
            <motion.img
              src={siteImages.productsBanner.src}
              alt={siteImages.productsBanner.alt}
              className="mx-auto block h-auto w-full max-w-2xl"
              width={960}
              height={640}
              initial={reduce ? false : { scale: 1.06, opacity: 0.85 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease }}
            />
            <figcaption className="border-t border-graphite/10 bg-white px-4 py-2.5 text-xs tracking-wide text-slate">
              Craft and finish behind every grinding ball and rod leaving Tema
            </figcaption>
          </figure>
        </SectionReveal>

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2">
          {products.map((product) => (
            <StaggerItem key={product.name}>
              <article className="surface-card group flex h-full flex-col overflow-hidden p-0">
                <div className="media-frame overflow-hidden bg-mist/40">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="media-zoom mx-auto block h-auto w-full max-w-sm"
                    width={640}
                    height={400}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-3">
                    <div className="icon-frame">
                      <IconProduct name={product.icon} />
                    </div>
                    {'planned' in product && product.planned && (
                      <span
                        className="border border-graphite/15 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.1em] text-steel"
                        style={{ borderRadius: 2 }}
                      >
                        Planned
                      </span>
                    )}
                  </div>
                  <h2 className="heading-display mt-5 text-xl text-graphite">{product.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                    {product.description}
                  </p>
                  <p className="stat-mono mt-5 text-sm text-forge">{product.spec}</p>
                  <Link to={`/products/${product.slug}`} className="btn-text mt-6">
                    Learn more
                    <IconArrow />
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
