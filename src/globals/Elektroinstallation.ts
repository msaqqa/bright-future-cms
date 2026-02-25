import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'
import { SectionClosing, SectionDesc, SectionImg, SectionTitle } from './common/fields'
import { SectionList } from './common/groups'

export const Elektroinstallation: GlobalConfig = {
  slug: 'elektroinstallation-page',
  label: 'Elektroinstallation',
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
              name: 'elektroinstallation',
              type: 'group',
              label: 'Elektroinstallation Content',
              fields: [SectionTitle, SectionDesc, SectionList, SectionClosing, SectionImg],
            },
          ],
        },
      ],
    },
  ],
}
