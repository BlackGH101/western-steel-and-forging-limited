import { Hero } from '../components/Hero'
import { HomeAbout } from '../components/HomeAbout'
import { HomeCTA } from '../components/HomeCTA'
import { HomeProducts } from '../components/HomeProducts'
import { MissionVisionValues } from '../components/MissionVisionValues'
import { StatsStrip } from '../components/StatsStrip'
import { TrustSection } from '../components/TrustSection'
import { WhyChooseUs } from '../components/WhyChooseUs'

export function HomePage() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <HomeAbout />
      <MissionVisionValues />
      <HomeProducts />
      <WhyChooseUs />
      <TrustSection />
      <HomeCTA />
    </main>
  )
}
