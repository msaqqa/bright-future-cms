export type Media = {
  url: string
  alt: string
}

export type Button = {
  label: string
  link: string
}

export type MediaField = Media | string | null | undefined

export type THeaderData = {
  title: string
  breadcrumbLink: {
    label: string
    url: string
  }
  breadcrumbActive: string
  backgroundImage: Media | string
}

export type TInfoData = {
  title: string
  description: string
  descriptionSecondary: string
  image: Media | string
}

export type TFeatureItem = {
  id?: string
  title: string
  description: string
  image: Media | string
}

export type TFeaturesData = {
  title: string
  list: TFeatureItem[]
  closingText: string
}
