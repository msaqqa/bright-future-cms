import { Media } from './global'

export type TFeatureItem = {
  id?: string
  title: string
  description: string
}

export type TServiceSectionData = {
  title: string
  description: string
  list: TFeatureItem[]
  closingText: string
  image: Media | string
}
