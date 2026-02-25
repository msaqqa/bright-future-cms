import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { InfobarSection, PageHeaderSection } from './common/sections'
import { SectionDesc, SectionTitle } from './common/fields'
import { SectionListImg } from './common/groups'

export const UeberUns: GlobalConfig = {
  slug: 'ueber-page',
  label: 'Ueber Uns',
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
        // Page Info
        {
          label: 'Page Info',
          fields: [
            {
              name: 'info',
              type: 'group',
              label: 'Info Content',
              fields: [
                SectionTitle,
                SectionDesc,
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
              fields: [SectionTitle, SectionListImg],
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
