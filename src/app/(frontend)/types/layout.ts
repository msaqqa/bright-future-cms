import { Media } from './global'

export type TTopbarData = {
  email: string
  phone: string
  socialLinks?: {
    platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
    url: string
  }[]
}

export type THeaderData = {
  email?: string
  phone?: string
  socialLinks?: {
    platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
    url: string
    id?: string
  }[]
  logo?: Media | string
  navItems?: {
    label: string
    link: string
    hasSubMenu: boolean
    subMenuItems?: {
      label: string
      link: string
      id?: string
    }[]
    id?: string
  }[]
}

export type TFooterData = {
  contactItems?: {
    title: string
    details: {
      label: string
      link: string
      id?: string
    }
    icon: Media | string
    id?: string
  }[]
  aboutText?: string
  footerLogo: Media | string
  socialLinks?: {
    platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
    url: string
    id?: string
  }[]
  columns?: {
    title: string
    links?: {
      label: string
      url: string
      id?: string
    }[]
    id?: string
  }[]
  copyrightText?: string
}
