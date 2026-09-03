import { Facebook, Linkedin, Instagram } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface SocialLink {
  label: string
  url: string
  Icon: LucideIcon
}

export const socials: SocialLink[] = [
  { label: 'Facebook', url: 'https://www.facebook.com/Lacerisaieeyeclinic', Icon: Facebook },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/la-cerisaie-eye-clinic/', Icon: Linkedin },
  { label: 'Instagram', url: 'https://www.instagram.com/lacerisaieeye_clinic/', Icon: Instagram },
]

export const activeSocials = (): SocialLink[] => socials.filter((s) => s.url !== '')
