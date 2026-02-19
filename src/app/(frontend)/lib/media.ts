import { MediaField } from '../types/global'

export function getMedia(media: MediaField, fallback = ''): { url: string; alt: string } {
  if (!media) return { url: '', alt: fallback }
  if (typeof media === 'string') return { url: media, alt: fallback }

  const url = media.url ?? ''
  const filename = url.split('/').pop() ?? ''
  const fullUrl = filename ? `${process.env.NEXT_PUBLIC_S3_PUBLIC_URL}/${filename}` : ''

  return {
    url: fullUrl,
    alt: media.alt ?? fallback,
  }
}
