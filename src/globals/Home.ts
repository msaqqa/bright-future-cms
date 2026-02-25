import { revalidatePath } from 'next/cache'
import { GlobalConfig } from 'payload'
import { InfobarSection } from './common/sections'
import { SectionDesc, SectionTitle } from './common/fields'

export const Home: GlobalConfig = {
  slug: 'home-page',
  label: 'Home',
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
        // Hero Section
        {
          label: 'Hero Section',
          fields: [
            {
              name: 'hero',
              type: 'group',
              label: 'Hero Section Content',
              fields: [
                {
                  name: 'welcomeText',
                  type: 'text',
                  label: 'Welcome Text',
                },
                SectionTitle,
                SectionDesc,
                {
                  name: 'backgroundImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Background Image',
                },
                {
                  name: 'primaryButton',
                  type: 'group',
                  label: 'Primary Button',
                  fields: [
                    { name: 'label', type: 'text', label: 'Label', required: true },
                    { name: 'link', type: 'text', label: 'Link', required: true },
                  ],
                },
                {
                  name: 'secondaryButton',
                  type: 'group',
                  label: 'Secondary Button',
                  fields: [
                    { name: 'label', type: 'text', label: 'Label', required: true },
                    { name: 'link', type: 'text', label: 'Link', required: true },
                  ],
                },
              ],
            },
          ],
        },
        // Why Choose Us Section
        {
          label: 'Why Choose Us Section',
          fields: [
            {
              name: 'whyChooseUs',
              type: 'group',
              label: 'Why Choose Us Content',
              fields: [
                SectionTitle,
                {
                  name: 'items',
                  type: 'array',
                  label: 'Benefit Items',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Item Title',
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      label: 'Item Description',
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Item Image',
                    },
                    {
                      name: 'icon',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Item Icon (SVG)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Latest News Section
        {
          label: 'Latest News Section',
          fields: [
            {
              name: 'latestNews',
              type: 'array',
              label: 'Latest News Content',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Item Title',
                },
                { name: 'link', type: 'text' },
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
        // Infobar Section
        {
          label: 'Infobar Section',
          fields: [InfobarSection],
        },
        // Why Bright Future Energy Section
        {
          label: 'Why Bright Future Energy Section',
          fields: [
            {
              name: 'whyBrightFutureEnergy',
              type: 'group',
              label: 'Why Bright Future Energy Content',
              fields: [
                SectionTitle,
                {
                  name: 'items',
                  type: 'array',
                  label: 'Benefit Items',
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Item Title',
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      label: 'Item Description',
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Item Image',
                    },
                    {
                      name: 'icon',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Item Icon (SVG)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // Installation Section
        {
          label: 'Installation Section',
          fields: [
            {
              name: 'installation',
              type: 'group',
              fields: [
                {
                  name: 'items',
                  type: 'array',
                  fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'subtitle', type: 'text', required: true },
                    { name: 'description', type: 'textarea' },
                    { name: 'link', type: 'text' },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Item Icon (SVG)',
                    },
                  ],
                },
              ],
            },
          ],
        },
        // FAQ Section
        {
          label: 'FAQ Section',
          fields: [
            {
              name: 'faq',
              type: 'group',
              fields: [
                SectionTitle,
                SectionDesc,
                {
                  name: 'button',
                  type: 'group',
                  label: 'Button',
                  fields: [
                    { name: 'label', type: 'text', label: 'Label' },
                    { name: 'link', type: 'text', label: 'Link' },
                  ],
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Section Icon (SVG)',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
