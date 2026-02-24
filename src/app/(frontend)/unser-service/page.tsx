import { getPayload } from 'payload'
import configPromise from '@payload-config'
import ContactForm from '../components/common/ContactForm'
import PageHeader from '../components/common/PageHeader'
import PlanningSection from '../components/unser-service/PlanningSection'
import LeadsSection from '../components/unser-service/LeadsSection'
import TechnicalSection from '../components/unser-service/TechnicalSection'

export default async function UeberUnsPage() {
  const payload = await getPayload({ config: configPromise })
  const serviceData = await payload.findGlobal({
    slug: 'unser-service-page',
  })

  return (
    <main>
      <PageHeader data={serviceData.pageHeader as any} />
      <PlanningSection data={serviceData.planung as any} />
      <TechnicalSection data={serviceData.technische as any} />
      <LeadsSection data={serviceData.qualifizierte as any} />
      <ContactForm />
    </main>
  )
}
