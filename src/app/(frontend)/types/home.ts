import { Button, Media } from './global'

export type THeroData = {
  welcomeText?: string
  title: string
  description: string
  backgroundImage: string | Media
  primaryButton: Button
  secondaryButton?: Button
}

export type TFAQData = {
  title: string
  description: string
  button: Button
  image: string | Media
}

export type TInfobarData = {
  title: string
  description: string
  image: string | Media
  icon: string | Media
}

export type TInstallationItem = {
  id?: string
  image: string | Media
  title: string
  subtitle: string
  description: string
  link: string
}

export type TInstallationData = TInstallationItem[]

export type TLatestNewsItem = {
  id?: string
  title: string
  link: string
  image: string | Media
}

export type TLatestNewsData = TLatestNewsItem[]

export type TWhyBrightFutureEnergyItem = {
  id?: string
  title: string
  description?: string
  image: string | Media
  icon: string | Media
}

export type WhyBrightFutureEnergyData = {
  title: string
  items?: TWhyBrightFutureEnergyItem[]
}

export type TWhyChooseItem = {
  id?: string
  title: string
  description: string
  image: string | Media
  icon: string | Media
}

export type TWhyChooseUsData = {
  title: string
  items?: TWhyChooseItem[]
}
