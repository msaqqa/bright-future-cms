import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header Settings',
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
          label: 'Top Bar info',
          fields: [
            {
              name: 'email',
              type: 'text',
              label: 'Email Address',
              defaultValue: 'info@bf-energy.de',
            },
            {
              name: 'phone',
              type: 'text',
              label: 'Phone Number',
              defaultValue: '+49 1590 6421718',
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
                  required: true,
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
          label: 'Logo & Navigation',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Site Logo',
              required: true,
            },
            {
              name: 'navItems',
              type: 'array',
              label: 'Navigation Items',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  label: 'Label',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Link (URL)',
                  required: true,
                },
                {
                  name: 'hasSubMenu',
                  type: 'checkbox',
                  label: 'Has Sub-menu?',
                  defaultValue: false,
                },
                {
                  name: 'subMenuItems',
                  type: 'array',
                  label: 'Sub-menu Items',
                  admin: {
                    condition: (data, siblingData) => siblingData?.hasSubMenu,
                  },
                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      label: 'Sub-label',
                    },
                    {
                      name: 'link',
                      type: 'text',
                      label: 'Sub-link',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
