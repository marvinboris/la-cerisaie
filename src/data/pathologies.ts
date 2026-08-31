import { Eye, Activity, Scan, Droplet, Glasses, Microscope, ShieldAlert, Baby } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Pathology {
  /** Clé i18n sous `pathologies.<id>` pour les entrées génériques. */
  id: string
  /** URL absolue : les 3 pages historiques gardent leur route dédiée. */
  to: string
  Icon: LucideIcon
  color: string
  /** true = page dédiée déjà écrite à la main, false = page générique `/pathologies/:slug`. */
  dedicated: boolean
}

export const pathologies: Pathology[] = [
  { id: 'cataract', to: '/la-cataracte', Icon: Eye, color: 'from-teal-500 to-teal-600', dedicated: true },
  { id: 'visionDefects', to: '/defauts-de-vision', Icon: Glasses, color: 'from-blue-500 to-blue-600', dedicated: true },
  { id: 'refractiveSurgery', to: '/vivre-sans-lunettes', Icon: Scan, color: 'from-violet-500 to-violet-600', dedicated: true },
  { id: 'glaucoma', to: '/pathologies/glaucome', Icon: Activity, color: 'from-emerald-500 to-emerald-600', dedicated: false },
  { id: 'keratoconus', to: '/pathologies/keratocone', Icon: Microscope, color: 'from-orange-500 to-orange-600', dedicated: false },
  { id: 'amd', to: '/pathologies/dmla', Icon: ShieldAlert, color: 'from-rose-500 to-rose-600', dedicated: false },
  { id: 'dryEye', to: '/pathologies/secheresse-oculaire', Icon: Droplet, color: 'from-sky-500 to-sky-600', dedicated: false },
  { id: 'strabismus', to: '/pathologies/strabisme', Icon: Baby, color: 'from-pink-500 to-pink-600', dedicated: false },
]

/** Pages génériques uniquement, indexées par slug d'URL. */
export const genericPathologies = pathologies.filter((p) => !p.dedicated)

export const findBySlug = (slug: string): Pathology | undefined =>
  genericPathologies.find((p) => p.to === `/pathologies/${slug}`)
