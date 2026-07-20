import { Contact } from '../components/Contact'
import { Faq } from '../components/Faq'
import { ProductEnquiry } from '../components/ProductEnquiry'

export function ContactPage() {
  return (
    <main className="pt-16 lg:pt-[4.5rem]">
      <Contact />
      <ProductEnquiry />
      <Faq />
    </main>
  )
}
