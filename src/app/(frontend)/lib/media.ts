import { MediaField } from '../types/global'

export function getMedia(media: MediaField, fallback = ''): { url: string; alt: string } {
  if (!media) return { url: '', alt: fallback }
  if (typeof media === 'string') return { url: media, alt: fallback }
  return {
    url: media.url ?? '',
    alt: media.alt ?? fallback,
  }
}
