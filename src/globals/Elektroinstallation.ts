import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'

export const Elektroinstallation: GlobalConfig = {
  slug: 'elektroinstallation-page',
  label: 'Elektroinstallation Page',
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
              name: 'elektroinstallation',
              type: 'group',
              label: 'Elektroinstallation Content',
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
                  name: 'list',
                  type: 'array',
                  label: 'Feature List',
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
                  ],
                },
                {
                  name: 'closingText',
                  type: 'text',
                  label: 'Section Closing Text',
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
