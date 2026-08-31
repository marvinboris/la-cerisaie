/**
 * Génère public/sitemap.xml depuis la table des routes.
 * Lancé par `npm run build` (script `prebuild`) pour rester synchronisé
 * quand une pathologie est ajoutée dans src/data/pathologies.ts.
 */
import { writeFileSync } from 'node:fs'
import { genericPathologies } from '../src/data/pathologies'
import { SITE_URL, staticRoutes } from '../src/lib/seo'

const routes = [...staticRoutes, ...genericPathologies.map((p) => p.to)]
const lastmod = new Date().toISOString().split('T')[0]

const urls = routes
  .map((route) => {
    const priority = route === '/' ? '1.0' : route.startsWith('/pathologies') ? '0.8' : '0.7'
    return `  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
  })
  .join('\n')

writeFileSync(
  'public/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
)

console.log(`sitemap.xml — ${routes.length} URLs`)
