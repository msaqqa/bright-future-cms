import { Button, Media } from './global'

export type THeroData = {
  welcomeText?: string
  mainTitle: string
  description?: string
  backgroundImage?: string | Media
  primaryButton?: Button
  secondaryButton?: Button
}

export type TFAQData = {
  title: string
  description?: string
  button?: Button
  image?: string | Media
}

export type TInfobarData = {
  title: string
  description?: string
  image: string | Media
  icon: string | Media
}

export type TInstallationItem = {
  image: string | Media
  title: string
  subtitle?: string
  description?: string
  link?: string
  id?: string
}

export type TLatestNewsItem = {
  id: string
  title: string
  link?: string
  image: string | Media
}

export type TWhyBrightFutureEnergyItem = {
  title: string
  description?: string
  image?: string | Media
  icon: string | Media
}

export type WhyBrightFutureEnergyData = {
  data: {
    title: string
    items?: TWhyBrightFutureEnergyItem[]
  }
}

export type TWhyChooseItem = {
  title: string
  description?: string
  image?: string | Media
  icon: string | Media
}

export type TWhyChooseUsData = {
  data: {
    title: string
    items?: TWhyChooseItem[]
  }
}
