import { useState } from 'react'
import { buyerFaq } from '../data/plant'
import { SectionReveal } from './SectionReveal'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-paper" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl section-pad">
        <SectionReveal>
          <div className="text-center">
            <p className="eyebrow">Buyer FAQ</p>
            <h2
              id="faq-heading"
              className="heading-display mt-3 text-3xl text-graphite sm:text-4xl"
            >
              Common questions from mines and distributors
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-10 space-y-2">
          {buyerFaq.map((item, i) => {
            const open = openIndex === i
            return (
              <SectionReveal key={item.question} delay={i * 0.03}>
                <div className="overflow-hidden border border-graphite/12 bg-white" style={{ borderRadius: 3 }}>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition-colors duration-320 hover:bg-mist/40 sm:px-6 sm:py-5"
                  >
                    <span className="font-display text-sm font-semibold tracking-tight text-graphite sm:text-base">
                      {item.question}
                    </span>
                    <span
                      className={`stat-mono mt-0.5 shrink-0 text-forge transition-transform duration-320 ${open ? 'rotate-45' : ''}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    hidden={!open}
                    className="border-t border-graphite/10 px-5 py-4 sm:px-6 sm:py-5"
                  >
                    <p className="text-sm leading-relaxed text-slate sm:text-base">{item.answer}</p>
                  </div>
                </div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
