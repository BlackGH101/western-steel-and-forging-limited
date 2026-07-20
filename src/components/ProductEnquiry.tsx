import { useState } from 'react'
import { Link } from 'react-router-dom'
import { company, products } from '../data/content'
import { buildProductEnquiryMailto } from '../data/plant'
import { IconArrow, IconProduct } from './Icons'
import { SectionReveal } from './SectionReveal'

export function ProductEnquiry() {
  const [selected, setSelected] = useState(products[0].slug)
  const product = products.find((p) => p.slug === selected) ?? products[0]

  return (
    <section
      id="enquiry"
      className="border-t border-graphite/10 bg-mist/30"
      aria-labelledby="enquiry-heading"
    >
      <div className="mx-auto max-w-6xl section-pad">
        <SectionReveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Product enquiry</p>
            <h2
              id="enquiry-heading"
              className="heading-display mt-3 text-3xl text-graphite sm:text-4xl"
            >
              Select a product line and request supply
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Choose the product you need. We will open your email client with a pre-filled enquiry
              you can send to our commercial team.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <SectionReveal className="lg:col-span-5">
            <fieldset>
              <legend className="sr-only">Product line</legend>
              <ul className="space-y-2">
                {products.map((item) => {
                  const active = item.slug === selected
                  return (
                    <li key={item.slug}>
                      <button
                        type="button"
                        onClick={() => setSelected(item.slug)}
                        className={`flex w-full items-center gap-3 border px-4 py-3.5 text-left transition-colors duration-320 ${
                          active
                            ? 'border-forge bg-white text-graphite'
                            : 'border-graphite/12 bg-white/60 text-steel hover:border-forge/40'
                        }`}
                        style={{ borderRadius: 3 }}
                        aria-pressed={active}
                      >
                        <span className="icon-frame shrink-0">
                          <IconProduct name={item.icon} />
                        </span>
                        <span className="font-display text-sm font-medium tracking-tight">
                          {item.name}
                        </span>
                        {item.planned && (
                          <span className="ml-auto text-[0.625rem] uppercase tracking-[0.1em] text-slate">
                            Planned
                          </span>
                        )}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </fieldset>
          </SectionReveal>

          <SectionReveal delay={0.08} className="lg:col-span-7">
            <article className="surface-card overflow-hidden p-0">
              <img
                src={product.image}
                alt={product.imageAlt}
                className="mx-auto block h-auto w-full max-w-sm border-b border-graphite/10"
                width={640}
                height={400}
              />
              <div className="p-6 sm:p-8">
                <h3 className="heading-display text-xl text-graphite">{product.name}</h3>
                <p className="stat-mono mt-2 text-sm text-forge">{product.spec}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate">{product.description}</p>
                <ul className="mt-5 space-y-2 border-t border-graphite/10 pt-5">
                  {product.highlights.slice(0, 4).map((item) => (
                    <li key={item} className="text-sm text-steel/90 before:mr-2 before:text-forge before:content-['—']">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={buildProductEnquiryMailto(product.name, product.spec, company.email)}
                    className="btn-primary"
                  >
                    Email enquiry
                    <IconArrow />
                  </a>
                  <Link to={`/products/${product.slug}`} className="btn-secondary">
                    Read full article
                  </Link>
                </div>
              </div>
            </article>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
