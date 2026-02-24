import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { PageHeaderSection } from './common/sections'

export const UnserService: GlobalConfig = {
  slug: 'unser-service-page',
  label: 'Unser Service Page',
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
        // Planung und Installation
        {
          label: 'Planung Content',
          fields: [
            {
              name: 'planung',
              type: 'group',
              label: 'Planung und Installation',
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
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Section Image',
                },
              ],
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
        // Qualifizierte PV-Leads
        {
          label: 'Qualifizierte PV-Leads Content',
          fields: [
            {
              name: 'qualifizierte',
              type: 'group',
              label: 'Qualifizierte PV-Leads',
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
