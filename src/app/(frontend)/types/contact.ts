import { Media } from './global'

export type TContactInfoData = {
  data: {
    title: string
    contactItems: {
      title: string
      content: string
      image: Media | string
      icon: Media | string
    }[]
  }
}

export type TMapData = {
  data: {
    mapUrl: string
  }
}
