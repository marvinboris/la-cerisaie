/**
 * Génère public/sitemap.xml et public/robots.txt depuis la table des routes.
 * Lancé par `npm run build` (script `prebuild`) pour rester synchronisé quand une
 * pathologie est ajoutée dans src/data/pathologies.ts.
 *
 * Tourne sous Node : lit process.env, jamais import.meta.env. C'est pour ça que les
 * routes vivent dans src/data/routes.ts (données pures) et non dans src/lib/seo.ts.
 */
import { writeFileSync } from 'node:fs'
import { genericPathologies } from '../src/data/pathologies'
import { staticRoutes } from '../src/data/routes'

// Node ne lit pas .env tout seul, contrairement à Vite. Une vraie variable
// d'environnement (Vercel) reste prioritaire sur le fichier.
if (!process.env.VITE_SITE_URL) process.loadEnvFile('.env')

const SITE_URL = (process.env.VITE_SITE_URL ?? 'https://lacerisaie-eyeclinic.com').replace(/\/$/, '')
const isIndexable = !SITE_URL.includes('.vercel.app')

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

// Une préversion .vercel.app est fermée aux robots : elle ferait doublon avec le domaine final.
writeFileSync(
  'public/robots.txt',
  isIndexable
    ? `User-agent: *
Allow: /
Disallow: /admin

Sitemap: ${SITE_URL}/sitemap.xml
`
    : `User-agent: *
Disallow: /
`,
)

console.log(`sitemap.xml — ${routes.length} URLs · ${SITE_URL} · ${isIndexable ? 'indexable' : 'noindex'}`)
