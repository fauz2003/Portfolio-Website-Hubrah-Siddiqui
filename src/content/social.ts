import { PROFILE } from './profile'

export type SocialLink = {
  label: string
  href: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Email', href: `mailto:${PROFILE.email}` },
  { label: 'Call', href: `tel:${PROFILE.phoneHref}` },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
]
