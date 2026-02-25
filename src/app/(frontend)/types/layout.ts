import { Media } from './global'

export type TTopbarData = {
  email: string
  phone: string
  socialLinks?: {
    id?: string
    platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
    url: string
  }[]
}

export type THeaderData = TTopbarData & {
  logo: Media | string
  navItems?: {
    id?: string
    label: string
    link: string
    hasSubMenu: boolean
    subMenuItems?: {
      id?: string
      label: string
      link: string
    }[]
  }[]
}

export type TFooterData = {
  contactItems?: {
    id?: string
    title: string
    details: {
      label: string
      link: string
    }
    icon: Media | string
  }[]
  aboutText?: string
  footerLogo: Media | string
  socialLinks?: {
    id?: string
    platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
    url: string
  }[]
  columns?: {
    id?: string
    title: string
    links?: {
      id?: string
      label: string
      url: string
    }[]
  }[]
  copyrightText: string
}
