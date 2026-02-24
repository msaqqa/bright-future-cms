import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PageHeader from '../components/common/PageHeader'
import ContactInfo from '../components/contact/ContactInfo'
import GoogleMap from '../components/contact/GoogleMap'

export default async function ContactPage() {
  const payload = await getPayload({ config: configPromise })
  const contactData = await payload.findGlobal({
    slug: 'contact-page',
  })

  return (
    <main>
      <PageHeader data={contactData.pageHeader as any} />
      <ContactInfo data={contactData.contactInfo as any} />
      <GoogleMap data={contactData.googleMap as any} />
    </main>
  )
}
