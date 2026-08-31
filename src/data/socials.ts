import { Facebook, Linkedin, Instagram } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SocialLink {
  label: string
  url: string
  Icon: LucideIcon
}

// ponytail: URLs à remplir par le client. Une entrée sans URL n'est pas rendue.
export const socials: SocialLink[] = [
  { label: 'Facebook', url: '', Icon: Facebook },
  { label: 'LinkedIn', url: '', Icon: Linkedin },
  { label: 'Instagram', url: '', Icon: Instagram },
]

export const activeSocials = (): SocialLink[] => socials.filter((s) => s.url !== '')
