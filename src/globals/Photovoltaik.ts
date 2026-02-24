import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'

export const Photovoltaik: GlobalConfig = {
  slug: 'photovoltaik-page',
  label: 'Photovoltaik Page',
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
          label: 'Page Features',
          fields: [
            {
              name: 'photovoltaik',
              type: 'group',
              label: 'Photovoltaik Content',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Section Title',
                },
                {
                  name: 'list',
                  type: 'array',
                  label: 'Steps List',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Item Title',
                    },
                    {
                      name: 'description',
                      type: 'text',
                      label: 'Item Description',
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Item Image',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
