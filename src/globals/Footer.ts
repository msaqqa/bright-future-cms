import { revalidateAll } from '@/hooks/revalidate'
import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer Settings',
  hooks: {
    afterChange: [revalidateAll],
  },
  admin: {
    group: 'Layout',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contact Info',
          fields: [
            {
              name: 'contactItems',
              type: 'array',
              label: 'Contact Items',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Contact Title',
                },
                {
                  name: 'details',
                  type: 'group',
                  label: 'Contact Details',
                  fields: [
                    { name: 'label', type: 'text', label: 'Label', required: true },
                    { name: 'link', type: 'text', label: 'Link', required: true },
                  ],
                },
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Contact Icon',
                },
              ],
            },
          ],
        },
        {
          label: 'About & Social',
          fields: [
            {
              name: 'footerLogo',
              type: 'upload',
              relationTo: 'media',
              label: 'Footer Logo',
            },
            {
              name: 'aboutText',
              type: 'textarea',
              label: 'About Company Text',
            },
            {
              name: 'socialLinks',
              type: 'array',
              label: 'Social Media Links',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'Instagram', value: 'instagram' },
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'URL',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Navigation Columns',
          fields: [
            {
              name: 'columns',
              type: 'array',
              label: 'Footer Columns',
              minRows: 1,
              maxRows: 4,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Column Title',
                  required: true,
                },
                {
                  name: 'links',
                  type: 'array',
                  label: 'Links',
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Link Label',
                      required: true,
                    },
                    {
                      name: 'url',
                      type: 'text',
                      label: 'Link URL',
                      required: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Copyright',
          fields: [
            {
              name: 'copyrightText',
              type: 'text',
              label: 'Copyright Text',
              defaultValue: 'Copyright © 2024 BrightFuture Energy. All Rights Reserved.',
            },
          ],
        },
      ],
    },
  ],
}
