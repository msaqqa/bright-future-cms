import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function BalkonkraftwerkePage() {
  const payload = await getPayload({ config: configPromise })
  const homeData = await payload.findGlobal({
    slug: 'home-page',
  })

  return <main>photovoltaik</main>
}
