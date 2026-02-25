import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'
import { SectionClosing, SectionDesc, SectionImg, SectionTitle } from './common/fields'
import { SectionList } from './common/groups'

export const UnserService: GlobalConfig = {
  slug: 'unser-service-page',
  label: 'Unser Service',
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
        // Planung und Installation
        {
          label: 'Planung Content',
          fields: [
            {
              name: 'planung',
              type: 'group',
              label: 'Planung und Installation',
              fields: [SectionTitle, SectionDesc, SectionImg],
            },
          ],
        },
        // Technische Machbarkeitsprüfung
        {
          label: 'Technische Content',
          fields: [
            {
              name: 'technische',
              type: 'group',
              label: 'Technische Machbarkeitsprüfung',
              fields: [
                SectionTitle,
                SectionDesc,
                {
                  name: 'list',
                  type: 'group',
                  label: 'List Content',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'List Title',
                    },
                    {
                      name: 'items',
                      type: 'array',
                      label: 'List Items',
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
                  ],
                },
                SectionClosing,
                SectionImg,
              ],
            },
          ],
        },
        // Qualifizierte PV-Leads
        {
          label: 'Qualifizierte PV-Leads Content',
          fields: [
            {
              name: 'qualifizierte',
              type: 'group',
              label: 'Qualifizierte PV-Leads',
              fields: [SectionTitle, SectionDesc, SectionList, SectionClosing, SectionImg],
            },
          ],
        },
      ],
    },
  ],
}
