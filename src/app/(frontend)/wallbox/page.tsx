import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContactForm from '../components/common/ContactForm'
import PageHeader from '../components/common/PageHeader'
import PageInfo from '../components/common/PageInfo'
import PageFeatures from '../components/common/PageFeatures'

export default async function WallboxPage() {
  const payload = await getPayload({ config: configPromise })
  const wallboxData = await payload.findGlobal({
    slug: 'wallbox-page',
  })

  return (
    <main>
      <PageHeader data={wallboxData.pageHeader as any} />
      <PageInfo data={wallboxData.info as any} />
      <PageFeatures data={wallboxData.features as any} />
      <ContactForm />
    </main>
  )
}
