import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function PhotovoltaikPage() {
  const payload = await getPayload({ config: configPromise })
  const homeData = await payload.findGlobal({
    slug: 'home-page',
  })

  return <main>photovoltaik</main>
}
