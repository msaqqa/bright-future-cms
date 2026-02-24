import { Field } from 'payload'

export const PageHeaderSection: Field = {
  label: 'Page Header',
  type: 'group',
  name: 'pageHeader',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
    },
    {
      name: 'breadcrumbLink',
      type: 'group',
      label: 'Breadcrumb Link',
      fields: [
        { name: 'label', type: 'text', label: 'Label' },
        { name: 'url', type: 'text', label: 'URL' },
      ],
    },
    {
      name: 'breadcrumbActive',
      type: 'text',
      label: 'Breadcrumb Active',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
  ],
}

export const PageInfoSection: Field = {
  name: 'info',
  type: 'group',
  label: 'Info Content',
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
      name: 'descriptionSecondary',
      type: 'text',
      label: 'Section Description Secondary',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Section Image',
    },
  ],
}

export const PageFeaturesSection: Field = {
  name: 'features',
  type: 'group',
  label: 'Features Content',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
    },
    {
      name: 'list',
      type: 'array',
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
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Item Image',
        },
      ],
    },
    {
      name: 'closingText',
      type: 'text',
      label: 'Section Closing Text',
    },
  ],
}

export const InfobarSection: Field = {
  name: 'infobar',
  type: 'group',
  label: 'Infobar Content',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'description', type: 'richText' },
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
}
