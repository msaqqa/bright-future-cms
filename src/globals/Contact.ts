import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'
import { SectionTitle } from './common/fields'

export const Contact: GlobalConfig = {
  slug: 'contact-page',
  label: 'Contact',
  hooks: {
    afterChange: [async () => revalidatePath('/', 'layout')],
  },
  admin: {
    group: 'Pages',
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
        // Contact Info
        {
          label: 'Contact Info',
          fields: [
            {
              name: 'contactInfo',
              type: 'group',
              label: 'Contact Info Content',
              fields: [
                SectionTitle,
                {
                  name: 'contactItems',
                  type: 'array',
                  label: 'Contact Items',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'content', type: 'text', required: true },
                    { name: 'image', type: 'upload', relationTo: 'media', required: true },
                    { name: 'icon', type: 'upload', relationTo: 'media' },
                  ],
                },
              ],
            },
          ],
        },
        // Google Map
        {
          label: 'Google Map',
          fields: [
            {
              name: 'googleMap',
              type: 'group',
              label: 'Google Map',
              fields: [
                {
                  name: 'mapUrl',
                  type: 'text',
                  label: 'Google Map Iframe URL',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
