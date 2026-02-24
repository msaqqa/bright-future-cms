import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContactForm from '../components/common/ContactForm'
import PageHeader from '../components/common/PageHeader'
import EnergiesInfo from '../components/energiespeicher/EnergiesInfo'

export default async function EnergiespeicherPage() {
  const payload = await getPayload({ config: configPromise })
  const energiesData = await payload.findGlobal({
    slug: 'energiespeicher-page',
  })

  return (
    <main>
      <PageHeader data={energiesData.pageHeader as any} />
      <EnergiesInfo data={energiesData.info as any} />
      <ContactForm />
    </main>
  )
}
