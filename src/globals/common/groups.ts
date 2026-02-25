import { Field } from 'payload'

export const SectionList: Field = {
  name: 'list',
  type: 'array',
  label: 'Section List',
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
}

export const SectionListImg: Field = {
  name: 'list',
  type: 'array',
  label: 'Section List',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Item Title',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Item Image',
    },
  ],
}
