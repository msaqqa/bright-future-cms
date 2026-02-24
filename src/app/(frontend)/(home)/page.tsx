import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Hero from '../components/home/Hero'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Installation from '../components/home/Installation'
import FAQ from '../components/home/FAQ'
import ContactForm from '../components/common/ContactForm'
import LatestNews from '../components/home/LatestNews'
import WhyBrightFutureEnergy from '../components/home/WhyBrightFutureEnergy'
import Infobar from '../components/common/Infobar'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const homeData = await payload.findGlobal({
    slug: 'home-page',
  })

  return (
    <main>
      <Hero data={homeData.hero as any} />
      <WhyChooseUs data={homeData.whyChooseUs as any} />
      <LatestNews data={homeData.latestNews as any} />
      <Infobar data={homeData.infobar as any} />
      <WhyBrightFutureEnergy data={homeData.whyBrightFutureEnergy as any} />
      <Installation data={homeData.installation as any} />
      <FAQ data={homeData.faq as any} />
      <ContactForm />
    </main>
  )
}
