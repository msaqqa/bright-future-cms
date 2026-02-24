import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContactForm from '../components/common/ContactForm'
import PageHeader from '../components/common/PageHeader'
import PageInfo from '../components/common/PageInfo'
import PageFeatures from '../components/common/PageFeatures'

export default async function stromGasPage() {
  const payload = await getPayload({ config: configPromise })
  const stromGasData = await payload.findGlobal({
    slug: 'strom-gas-page',
  })

  return (
    <main>
      <PageHeader data={stromGasData.pageHeader as any} />
      <PageInfo data={stromGasData.info as any} />
      <PageFeatures data={stromGasData.features as any} />
      <ContactForm />
    </main>
  )
}
