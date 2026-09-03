import { Eye, Activity, Scan, Droplet, Droplets, Glasses, Microscope, ShieldAlert, Baby, Sun } from 'lucide-react'
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
  /** Illustration de la page générique (Unsplash, licence libre). */
  image?: string
  /** Vidéo explicative fournie par le cabinet, servie depuis /videos. */
  video?: string
}

export const pathologies: Pathology[] = [
  { id: 'cataract', to: '/la-cataracte', Icon: Eye, color: 'from-teal-500 to-teal-600', dedicated: true },
  { id: 'visionDefects', to: '/defauts-de-vision', Icon: Glasses, color: 'from-blue-500 to-blue-600', dedicated: true },
  { id: 'refractiveSurgery', to: '/vivre-sans-lunettes', Icon: Scan, color: 'from-violet-500 to-violet-600', dedicated: true },
  { id: 'glaucoma', to: '/pathologies/glaucome', Icon: Activity, color: 'from-emerald-500 to-emerald-600', dedicated: false, image: '/images/pathologies/glaucoma.jpg' },
  { id: 'keratoconus', to: '/pathologies/keratocone', Icon: Microscope, color: 'from-orange-500 to-orange-600', dedicated: false, image: '/images/pathologies/keratoconus.jpg' },
  { id: 'amd', to: '/pathologies/dmla', Icon: ShieldAlert, color: 'from-rose-500 to-rose-600', dedicated: false, image: '/images/pathologies/amd.jpg' },
  { id: 'dryEye', to: '/pathologies/secheresse-oculaire', Icon: Droplet, color: 'from-sky-500 to-sky-600', dedicated: false, image: '/images/pathologies/dryEye.jpg' },
  { id: 'strabismus', to: '/pathologies/strabisme', Icon: Baby, color: 'from-pink-500 to-pink-600', dedicated: false, image: '/images/pathologies/strabismus.jpg' },
  { id: 'pterygium', to: '/pathologies/pterygion', Icon: Sun, color: 'from-amber-500 to-amber-600', dedicated: false, image: '/images/pathologies/pterygium.jpg', video: '/videos/pterygium' },
  { id: 'tearDuct', to: '/pathologies/obstruction-voies-lacrymales', Icon: Droplets, color: 'from-cyan-500 to-cyan-600', dedicated: false, image: '/images/pathologies/tearDuct.jpg', video: '/videos/tear-duct-obstruction' },
]

/** Pages génériques uniquement, indexées par slug d'URL. */
export const genericPathologies = pathologies.filter((p) => !p.dedicated)

export const findBySlug = (slug: string): Pathology | undefined =>
  genericPathologies.find((p) => p.to === `/pathologies/${slug}`)
