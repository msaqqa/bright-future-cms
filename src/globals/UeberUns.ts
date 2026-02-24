import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { InfobarSection, PageHeaderSection } from './common/sections'

export const UeberUns: GlobalConfig = {
  slug: 'ueber-page',
  label: 'Ueber Uns Page',
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
        // Page Info
        {
          label: 'Page Info',
          fields: [
            {
              name: 'info',
              type: 'group',
              label: 'Info Content',
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
                  name: 'descriptionSecondary',
                  type: 'text',
                  label: 'Section Description Secondary',
                },
                {
                  name: 'firstImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'First Image',
                },
                {
                  name: 'secondImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Second Image',
                },
              ],
            },
          ],
        },
        // Page Features
        {
          label: 'Page Features',
          fields: [
            {
              name: 'features',
              type: 'group',
              label: 'Features Content',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Section Title',
                },
                {
                  name: 'list',
                  type: 'array',
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
        // Infobar Section
        {
          label: 'Infobar Section',
          fields: [InfobarSection],
        },
      ],
    },
  ],
}
