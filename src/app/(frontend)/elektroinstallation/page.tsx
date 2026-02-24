import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PageHeader from '../components/common/PageHeader'
import ElektroFeatures from '../components/elektroinstallation/ElektroFeatures'
import ContactForm from '../components/common/ContactForm'

export default async function ElektroinstallationPage() {
  const payload = await getPayload({ config: configPromise })
  const elektroData = await payload.findGlobal({
    slug: 'elektroinstallation-page',
  })

  return (
    <main>
      <PageHeader data={elektroData.pageHeader as any} />
      <ElektroFeatures data={elektroData.elektroinstallation as any} />
      <ContactForm />
    </main>
  )
}
