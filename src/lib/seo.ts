/**
 * URL publique du site. Pilotée par VITE_SITE_URL pour pouvoir déployer sur une URL
 * Vercel de préversion avant la bascule DNS vers le domaine définitif.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL ?? 'https://lacerisaie-eyeclinic.com').replace(/\/$/, '')

export const SITE_NAME = 'La Cerisaie Eye Clinic'
export const OG_IMAGE = `${SITE_URL}/images/clinic.jpg`

/**
 * Un déploiement `.vercel.app` ne doit pas être indexé : il ferait doublon avec le domaine
 * définitif. Dérivé de SITE_URL plutôt que porté par une seconde variable, qui pourrait
 * se désynchroniser le jour de la bascule.
 */
export const IS_INDEXABLE = !SITE_URL.includes('.vercel.app')
