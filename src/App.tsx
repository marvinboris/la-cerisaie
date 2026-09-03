import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const CataractPage = lazy(() => import('./pages/CataractPage'))
const VisionDefectsPage = lazy(() => import('./pages/VisionDefectsPage'))
const RefractiveSurgeryPage = lazy(() => import('./pages/RefractiveSurgeryPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const AppointmentPage = lazy(() => import('./pages/AppointmentPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PathologiesPage = lazy(() => import('./pages/PathologiesPage'))
const PathologyPage = lazy(() => import('./pages/PathologyPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

/** Arbre sans router : partagé entre le navigateur (BrowserRouter) et le prérendu (StaticRouter). */
export function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/la-cataracte" element={<CataractPage />} />
              <Route path="/defauts-de-vision" element={<VisionDefectsPage />} />
              <Route path="/vivre-sans-lunettes" element={<RefractiveSurgeryPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/rendez-vous" element={<AppointmentPage />} />
              <Route path="/actualites" element={<NewsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/pathologies" element={<PathologiesPage />} />
              <Route path="/pathologies/:slug" element={<PathologyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
