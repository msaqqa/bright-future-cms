import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PhotovoFeatures from '../components/photovoltaik/PhotovoFeatures'
import ContactForm from '../components/common/ContactForm'
import PageHeader from '../components/common/PageHeader'

export default async function PhotovoltaikPage() {
  const payload = await getPayload({ config: configPromise })
  const photovoData = await payload.findGlobal({
    slug: 'photovoltaik-page',
  })

  return (
    <main>
      <PageHeader data={photovoData.pageHeader as any} />
      <PhotovoFeatures data={photovoData.photovoltaik as any} />
      <ContactForm />
    </main>
  )
}
