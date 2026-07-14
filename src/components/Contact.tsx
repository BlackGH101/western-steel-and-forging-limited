import { company } from '../data/content'
import { SectionReveal } from './SectionReveal'

const mapEmbedSrc =
  'https://maps.google.com/maps?q=Kpone%20Industrial%20Area%2C%20Tema%2C%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed'

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate/30 bg-paper"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <SectionReveal>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-steel">Contact</p>
              <h2
                id="contact-heading"
                className="mt-3 font-display text-3xl font-semibold tracking-tight text-graphite sm:text-4xl"
              >
                Registered office
              </h2>
              <address className="mt-6 not-italic text-base leading-relaxed text-graphite/85">
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.line3}
                <br />
                {company.address.country}
              </address>

              <p className="mt-8 text-sm text-slate">
                For commercial enquiries, offtake, or visits to the Tema plant, write to the
                address above or use the mail link below. This site does not collect form
                submissions.
              </p>

              <a
                href={`mailto:${company.email}?subject=Enquiry%20—%20Western%20Steel%20and%20Forgings%20Limited`}
                className="mt-8 inline-flex items-center border border-forge bg-forge px-6 py-3 text-sm font-medium text-graphite transition-colors hover:bg-transparent hover:text-forge"
              >
                Email {company.email}
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden border border-slate/35">
                <iframe
                  title="Map of Kpone Industrial Area, Tema, Ghana"
                  src={mapEmbedSrc}
                  className="aspect-[4/3] h-full min-h-[280px] w-full grayscale contrast-110 lg:aspect-auto lg:min-h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="border-t border-slate/35 px-4 py-3 text-xs text-slate">
                  Kpone Industrial Area · Tema · Approximate location for orientation only
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
