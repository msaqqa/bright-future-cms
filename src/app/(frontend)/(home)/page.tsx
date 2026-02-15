import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Hero from '../components/home/Hero'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Installation from '../components/home/Installation'
import FAQ from '../components/home/FAQ'
import ContactForm from '../components/common/ContactForm'
import LatestNews from '../components/home/LatestNews'
import WhyBrightFutureEnergy from '../components/home/WhyBrightFutureEnergy'
import Infobar from '../components/home/infobar'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const homeData = await payload.findGlobal({
    slug: 'home-page',
  })

  return (
    <main>
      <Hero data={homeData.hero} />
      <WhyChooseUs data={homeData.whyChooseUs} />
      <LatestNews data={homeData.latestNews} />
      <Infobar data={homeData.infobar} />
      <WhyBrightFutureEnergy data={homeData.whyBrightFutureEnergy} />
      <Installation data={homeData.installation} />
      <FAQ data={homeData.faq} />
      <ContactForm />
    </main>
  )
}
