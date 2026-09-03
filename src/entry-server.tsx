import { StrictMode } from 'react'
import { prerender } from 'react-dom/static'
import { StaticRouter } from 'react-router-dom'
import i18n from './i18n'
import { AppRoutes } from './App'
import { ssrHead } from './components/Seo'

/** Rend une route en HTML statique (français). Appelé par scripts/prerender.ts après `vite build`. */
export async function render(url: string) {
  await i18n.changeLanguage('fr')
  ssrHead.current = null
  const { prelude } = await prerender(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>,
  )
  const html = await new Response(prelude).text()
  return { html, head: ssrHead.current }
}
