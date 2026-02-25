import { Field } from 'payload'

export const SectionTitle: Field = {
  name: 'title',
  type: 'text',
  label: 'Section Title',
}

export const SectionDesc: Field = {
  name: 'description',
  type: 'text',
  label: 'Section Description',
}

export const SectionClosing: Field = {
  name: 'closingText',
  type: 'text',
  label: 'Section Closing Text',
}

export const SectionImg: Field = {
  name: 'image',
  type: 'upload',
  relationTo: 'media',
  label: 'Section Image',
}
