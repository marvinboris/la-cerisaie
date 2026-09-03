/**
 * Prérendu statique : après `vite build` (client) et `vite build --ssr` (dist-ssr),
 * rend chaque route en HTML complet pour que Google, WhatsApp, Facebook et LinkedIn
 * voient le contenu, le titre et l'image de partage sans exécuter de JavaScript.
 *
 * Sortie : dist/<route>.html (servi via `cleanUrls` sur Vercel) + dist/shell.html
 * (coquille vide, fallback SPA pour les URL inconnues → page 404 côté client).
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { genericPathologies } from '../src/data/pathologies'
import { staticRoutes } from '../src/data/routes'

const dist = 'dist'
const template = readFileSync(join(dist, 'index.html'), 'utf8')
writeFileSync(join(dist, 'shell.html'), template)

const { render } = await import('../dist-ssr/entry-server.js')
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const routes = [...staticRoutes, ...genericPathologies.map((p) => p.to)]
for (const route of routes) {
  const { html, head } = await render(route)
  if (!head) throw new Error(`Pas de <Seo> rendu pour ${route}`)
  const headHtml = `<title>${esc(head.title)}</title>
    <meta name="description" content="${esc(head.description)}" />
    <meta name="robots" content="${head.indexable ? 'index, follow' : 'noindex, nofollow'}" />
    <link rel="canonical" href="${head.url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="La Cerisaie Eye Clinic" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:title" content="${esc(head.title)}" />
    <meta property="og:description" content="${esc(head.description)}" />
    <meta property="og:url" content="${head.url}" />
    <meta property="og:image" content="${head.image}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(head.title)}" />
    <meta name="twitter:description" content="${esc(head.description)}" />
    <meta name="twitter:image" content="${head.image}" />`
  const page = template
    .replace(/<!-- seo:start[^>]*-->[\s\S]*?<!-- seo:end -->/, headHtml)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  if (page === template) throw new Error(`Injection échouée pour ${route}`)
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`
  mkdirSync(dirname(join(dist, file)), { recursive: true })
  writeFileSync(join(dist, file), page)
  console.log(`prerender ${route} → ${file} (${(page.length / 1024).toFixed(0)} Ko)`)
}
