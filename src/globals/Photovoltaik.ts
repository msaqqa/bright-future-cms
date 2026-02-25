import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'
import { SectionTitle } from './common/fields'
import { SectionListImg } from './common/groups'

export const Photovoltaik: GlobalConfig = {
  slug: 'photovoltaik-page',
  label: 'Photovoltaik',
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
        {
          label: 'Page Features',
          fields: [
            {
              name: 'photovoltaik',
              type: 'group',
              label: 'Photovoltaik Content',
              fields: [SectionTitle, SectionListImg],
            },
          ],
        },
      ],
    },
  ],
}
