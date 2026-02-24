import { revalidatePath } from 'next/cache'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  hooks: {
    afterChange: [
      async () => {
        revalidatePath('/', 'layout')
        console.log('Route Revalidated.')
      },
    ],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    disableLocalStorage: true,
  },
}
