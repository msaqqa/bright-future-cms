// globals/pageFactory.ts
import { GlobalConfig } from 'payload'
import { revalidatePath } from 'next/cache'
import { PageFeaturesSection, PageHeaderSection, PageInfoSection } from './sections'

export const createPageConfig = (slug: string, label: string): GlobalConfig => ({
  slug: slug,
  label: label,
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
          fields: [PageInfoSection],
        },
        // Page Features
        {
          label: 'Page Features',
          fields: [PageFeaturesSection],
        },
      ],
    },
  ],
})
