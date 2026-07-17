import { company } from '../data/content'
import { IconArrow } from './Icons'
import { SectionReveal } from './SectionReveal'

const mapEmbedSrc =
  'https://maps.google.com/maps?q=Kpone%20Industrial%20Area%2C%20Tema%2C%20Ghana&t=&z=13&ie=UTF8&iwloc=&output=embed'

export function Contact() {
  return (
    <section className="bg-paper" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-6xl section-pad">
        <SectionReveal>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Contact</p>
              <h1
                id="contact-heading"
                className="heading-display mt-3 text-3xl text-graphite sm:text-4xl lg:text-5xl"
              >
                Registered office
              </h1>
              <address className="mt-6 not-italic text-base leading-relaxed text-graphite/85">
                {company.address.line1}
                <br />
                {company.address.line2}
                <br />
                {company.address.line3}
                <br />
                {company.address.country}
              </address>

              <p className="mt-8 text-sm leading-relaxed text-slate">
                For commercial enquiries, offtake, or visits to the Tema plant, write to the address
                above or use the mail link below. This site does not collect form submissions.
              </p>

              <a
                href={`mailto:${company.email}?subject=Enquiry%20-%20Western%20Steel%20and%20Forgings%20Limited`}
                className="btn-primary mt-8"
              >
                Email {company.email}
                <IconArrow className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="lg:col-span-7">
              <div className="overflow-hidden border border-graphite/12 bg-white" style={{ borderRadius: 3 }}>
                <iframe
                  title="Map of Kpone Industrial Area, Tema, Ghana"
                  src={mapEmbedSrc}
                  className="aspect-[4/3] h-full min-h-[280px] w-full lg:aspect-auto lg:min-h-[360px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="border-t border-graphite/10 px-4 py-3 text-xs text-slate">
                  Kpone Industrial Area, Tema. Approximate location for orientation only.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
