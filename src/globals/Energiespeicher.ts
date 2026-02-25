import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'
import { SectionDesc, SectionImg, SectionTitle } from './common/fields'

export const Energiespeicher: GlobalConfig = {
  slug: 'energiespeicher-page',
  label: 'Energiespeicher',
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
              label: 'Energiespeicher Info',
              fields: [SectionTitle, SectionDesc, SectionImg],
            },
          ],
        },
      ],
    },
  ],
}
