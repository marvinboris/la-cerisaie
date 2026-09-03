import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/600.css'
import '@fontsource/playfair-display/700.css'
import './index.css'
import i18n from './i18n'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Le HTML prérendu est en français : on hydrate seulement si la langue active correspond,
// sinon on laisse React repartir de zéro (pas de mismatch d'hydratation).
if (root.hasChildNodes() && i18n.resolvedLanguage === 'fr') {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
