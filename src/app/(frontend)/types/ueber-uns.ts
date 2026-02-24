import { Media, TFeatureItem } from './global'

export type TUeberInfoData = {
  title: string
  description: string
  descriptionSecondary: string
  firstImage: Media | string
  secondImage: Media | string
}

export type TUeberFeaturesData = {
  title: string
  list: TFeatureItem[]
}
