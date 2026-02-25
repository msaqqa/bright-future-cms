import { Media } from './global'

export type TPlanungData = {
  title: string
  description: string
  image: Media | string
}

export type TTechnischeData = {
  title: string
  description: string
  list: { items: { id?: string; title: string; description: string }[] }
  closingText: string
  image: Media | string
}

export type TLeadsData = {
  title: string
  description: string
  list: { id?: string; title: string; description: string }[]
  closingText: string
  image: Media | string
}
