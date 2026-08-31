import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CataractPage from './pages/CataractPage'
import VisionDefectsPage from './pages/VisionDefectsPage'
import RefractiveSurgeryPage from './pages/RefractiveSurgeryPage'
import AboutPage from './pages/AboutPage'
import AppointmentPage from './pages/AppointmentPage'
import NewsPage from './pages/NewsPage'
import ContactPage from './pages/ContactPage'
import PathologiesPage from './pages/PathologiesPage'
import PathologyPage from './pages/PathologyPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
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
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
