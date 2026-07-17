import { motion, useReducedMotion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import { getProductBySlug, products } from '../data/products'
import { IconArrow, IconProduct } from './Icons'
import { SectionReveal, Stagger, StaggerItem } from './SectionReveal'

const ease = [0.22, 1, 0.36, 1] as const

export function ProductArticle() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? getProductBySlug(slug) : undefined
  const reduce = useReducedMotion()

  if (!product) {
    return (
      <section className="bg-paper section-pad">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="heading-display text-3xl text-graphite">Product not found</h1>
          <p className="mt-4 text-slate">That product article is not available.</p>
          <Link to="/products" className="btn-primary mt-8">
            Back to products
            <IconArrow />
          </Link>
        </div>
      </section>
    )
  }

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <article className="bg-paper" aria-labelledby="article-heading">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionReveal>
          <nav className="text-xs tracking-[0.08em] uppercase text-slate" aria-label="Breadcrumb">
            <Link to="/products" className="transition-colors hover:text-forge">
              Products
            </Link>
            <span className="mx-2" aria-hidden>
              /
            </span>
            <span className="text-graphite">{product.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <motion.div
              className="lg:col-span-7"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease }}
            >
              <p className="eyebrow">Product article</p>
              {product.planned && (
                <span
                  className="mt-3 inline-block border border-graphite/15 px-2 py-0.5 text-[0.625rem] font-medium uppercase tracking-[0.1em] text-steel"
                  style={{ borderRadius: 2 }}
                >
                  Planned
                </span>
              )}
              <h1
                id="article-heading"
                className="heading-display mt-3 text-3xl text-graphite sm:text-4xl lg:text-5xl"
              >
                {product.name}
              </h1>
              <p className="stat-mono mt-4 text-sm text-forge">{product.spec}</p>
              <p className="mt-6 text-lg leading-relaxed text-steel/90">{product.lead}</p>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={reduce ? false : { opacity: 0, scale: 0.96, x: 16 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease }}
            >
              <figure
                className="media-frame overflow-hidden border border-graphite/12 bg-white"
                style={{ borderRadius: 3 }}
              >
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="mx-auto block h-auto w-full max-w-md"
                  width={800}
                  height={600}
                />
              </figure>
            </motion.div>
          </div>
        </SectionReveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="space-y-10 lg:col-span-8">
            {product.sections.map((section, i) => (
              <SectionReveal key={section.heading} delay={i * 0.05}>
                <h2 className="heading-display text-2xl text-graphite">{section.heading}</h2>
                <p className="mt-4 text-base leading-relaxed text-slate">{section.body}</p>
              </SectionReveal>
            ))}
          </div>

          <aside className="lg:col-span-4">
            <SectionReveal delay={0.1}>
              <motion.div
                className="border border-graphite/12 bg-white p-6 sm:p-7"
                style={{ borderRadius: 3 }}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease }}
              >
                <div className="icon-frame">
                  <IconProduct name={product.icon} />
                </div>
                <h2 className="heading-display mt-5 text-lg text-graphite">At a glance</h2>
                <ul className="mt-4 space-y-3">
                  {product.highlights.map((item, i) => (
                    <motion.li
                      key={item}
                      className="border-b border-graphite/8 pb-3 text-sm leading-relaxed text-slate last:border-0 last:pb-0"
                      initial={reduce ? false : { opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.08 + i * 0.06, ease }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-8 w-full">
                  Enquire about supply
                  <IconArrow />
                </Link>
                <Link to="/process" className="btn-secondary mt-3 w-full">
                  See production process
                </Link>
              </motion.div>
            </SectionReveal>
          </aside>
        </div>

        <SectionReveal className="mt-16 border-t border-graphite/10 pt-12">
          <h2 className="heading-display text-xl text-graphite">Other products</h2>
          <Stagger className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <StaggerItem key={item.slug}>
                <Link
                  to={`/products/${item.slug}`}
                  className="surface-card block h-full p-5 transition-colors"
                >
                  <p className="font-display text-base font-semibold text-graphite">{item.name}</p>
                  <p className="stat-mono mt-2 text-xs text-forge">{item.spec}</p>
                  <span className="btn-text mt-4">
                    Read article
                    <IconArrow />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </SectionReveal>
      </div>
    </article>
  )
}
