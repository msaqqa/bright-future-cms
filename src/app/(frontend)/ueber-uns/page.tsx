import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContactForm from '../components/common/ContactForm'
import PageHeader from '../components/common/PageHeader'
import UeberInfo from '../components/ueber-uns/UeberInfo'
import UeberFeatures from '../components/ueber-uns/UeberFeatures'
import Infobar from '../components/common/Infobar'

export default async function UeberUnsPage() {
  const payload = await getPayload({ config: configPromise })
  const ueberData = await payload.findGlobal({
    slug: 'ueber-page',
  })

  return (
    <main>
      <PageHeader data={ueberData.pageHeader as any} />
      <UeberInfo data={ueberData.info as any} />
      <UeberFeatures data={ueberData.features as any} />
      <Infobar data={ueberData.infobar as any} />
      <ContactForm />
    </main>
  )
}
