import { CollectionConfig } from 'payload'

export const ContactRequests: CollectionConfig = {
  slug: 'contact-requests',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'category', 'createdAt'],
  },
  access: {
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Beratungstermin', value: 'Beratungstermin' },
        { label: 'Strom & Gas', value: 'Strom&Gas' },
        { label: 'Info-Veranstaltung', value: 'Info-Veranstaltung' },
      ],
      required: true,
    },
    {
      name: 'msg',
      type: 'textarea',
      required: true,
    },
  ],
  timestamps: true,
}
