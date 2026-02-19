export type TTopbarData = {
  email: string
  phone: string
  socialLinks?: {
    platform: 'facebook' | 'twitter' | 'linkedin' | 'instagram'
    url: string
  }[]
}

export type TFooterData = {
  email?: string
  phone?: string
  location?: string
  locationUrl?: string
  aboutText?: string
  footerLogo:
    | {
        url: string
        alt?: string
      }
    | string
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
