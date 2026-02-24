import { Media } from './global'

export type TFeatureItem = {
  id?: string
  title: string
  description: string
  image: Media
}

export type TPhotovoltaikData = {
  title: string
  list: TFeatureItem[]
}
