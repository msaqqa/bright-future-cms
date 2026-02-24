import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'

export const Energiespeicher: GlobalConfig = {
  slug: 'energiespeicher-page',
  label: 'Energiespeicher Page',
  hooks: {
    afterChange: [async () => revalidatePath('/', 'layout')],
  },
  admin: {
    group: 'Layout',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // Page Header
        {
          label: 'Page Header',
          fields: [PageHeaderSection],
        },
        {
          label: 'Page Info',
          fields: [
            {
              name: 'info',
              type: 'group',
              label: 'Energiespeicher Info',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Section Title',
                },
                {
                  name: 'description',
                  type: 'text',
                  label: 'Section Description',
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Section Image',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
