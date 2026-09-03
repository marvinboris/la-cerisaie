import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IS_INDEXABLE, OG_IMAGE, SITE_NAME, SITE_URL } from '../lib/seo'

interface SeoProps {
  title: string
  description: string
  /** Chemin absolu d'une image de partage propre à la page (sinon OG_IMAGE). */
  image?: string
  /** Rend la page non indexable (page admin, 404). */
  noindex?: boolean
}

export interface HeadData {
  title: string
  description: string
  url: string
  image: string
  indexable: boolean
}

/** Rempli pendant le rendu serveur, lu par scripts/prerender.ts pour écrire le <head>. */
export const ssrHead: { current: HeadData | null } = { current: null }

/** ponytail: ~30 lignes de manipulation du <head>, plutôt qu'ajouter react-helmet-async. */
function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

export default function Seo({ title, description, image, noindex = false }: SeoProps) {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  const head: HeadData = {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: `${SITE_URL}${pathname}`,
    image: image ? `${SITE_URL}${image}` : OG_IMAGE,
    indexable: IS_INDEXABLE && !noindex,
  }
  if (typeof document === 'undefined') ssrHead.current = head

  useEffect(() => {
    document.title = head.title
    document.documentElement.lang = i18n.language

    setMeta('meta[name="description"]', 'name', 'description', head.description)
    setMeta('meta[name="robots"]', 'name', 'robots', head.indexable ? 'index, follow' : 'noindex, nofollow')
    setMeta('meta[property="og:title"]', 'property', 'og:title', head.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', head.description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', head.url)
    setMeta('meta[property="og:image"]', 'property', 'og:image', head.image)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', head.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', head.description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', head.image)
    setLink('canonical', head.url)
  }, [head.title, head.description, head.url, head.image, head.indexable, i18n.language])

  return null
}
