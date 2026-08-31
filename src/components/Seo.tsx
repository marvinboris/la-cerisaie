import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { IS_INDEXABLE, SITE_NAME, SITE_URL } from '../lib/seo'

interface SeoProps {
  title: string
  description: string
  /** Rend la page non indexable (page admin, 404). */
  noindex?: boolean
}

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

function setLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`
  let tag = document.head.querySelector<HTMLLinkElement>(selector)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    if (hreflang) tag.setAttribute('hreflang', hreflang)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
}

export default function Seo({ title, description, noindex = false }: SeoProps) {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    const url = `${SITE_URL}${pathname}`

    document.title = fullTitle
    document.documentElement.lang = i18n.language

    setMeta('meta[name="description"]', 'name', 'description', description)
    const indexable = IS_INDEXABLE && !noindex
    setMeta('meta[name="robots"]', 'name', 'robots', indexable ? 'index, follow' : 'noindex, nofollow')
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    setLink('canonical', url)
    setLink('alternate', url, 'fr')
    setLink('alternate', url, 'en')
    setLink('alternate', url, 'x-default')
  }, [title, description, noindex, pathname, i18n.language])

  return null
}
