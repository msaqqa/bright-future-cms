import { Field } from 'payload'
import { SectionClosing, SectionDesc, SectionImg, SectionTitle } from './fields'
import { SectionListImg } from './groups'

export const PageHeaderSection: Field = {
  label: 'Page Header',
  type: 'group',
  name: 'pageHeader',
  fields: [
    SectionTitle,
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
    SectionTitle,
    SectionDesc,
    {
      name: 'descriptionSecondary',
      type: 'text',
      label: 'Section Description Secondary',
    },
    SectionImg,
  ],
}

export const PageFeaturesSection: Field = {
  name: 'features',
  type: 'group',
  label: 'Features Content',
  fields: [SectionTitle, SectionListImg, SectionClosing],
}

export const InfobarSection: Field = {
  name: 'infobar',
  type: 'group',
  label: 'Infobar Content',
  fields: [
    SectionTitle,
    { name: 'description', type: 'richText', label: 'Section Description' },
    SectionImg,
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Section Icon (SVG)',
    },
  ],
}
