import { Media } from './global'

export type TContactInfoData = {
  title: string
  contactItems: {
    id?: string
    title: string
    content: string
    image: Media | string
    icon: Media | string
  }[]
}

export type TMapData = {
  mapUrl: string
}
