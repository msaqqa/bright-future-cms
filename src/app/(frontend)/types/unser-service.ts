import { Media } from './global'

export type TPlanungData = {
  data: {
    title: string
    description: string
    image: Media | string
  }
}

export type TTechnischeData = {
  data: {
    title: string
    description: string
    list: { items: { title: string; description: string }[] }
    closingText: string
    image: Media | string
  }
}

export type TLeadsData = {
  data: {
    title: string
    description: string
    list: { title: string; description: string }[]
    closingText: string
    image: Media | string
  }
}
