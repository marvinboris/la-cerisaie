import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const links = {
  clinic: [
    { label: 'Accueil', to: '/' },
    { label: 'À propos', to: '/a-propos' },
    { label: 'Notre équipe', to: '/a-propos#team' },
    { label: 'Actualités', to: '/actualites' },
    { label: 'Contact', to: '/contact' },
  ],
  services: [
    { label: 'La cataracte', to: '/la-cataracte' },
    { label: 'Défauts de vision', to: '/defauts-de-vision' },
    { label: 'Vivre sans lunettes', to: '/vivre-sans-lunettes' },
    { label: 'Glaucome', to: '/' },
    { label: 'Kératocône', to: '/' },
    { label: 'OCT & Imagerie', to: '/' },
  ],
  legal: [
    { label: 'Mentions légales', to: '#' },
    { label: 'Confidentialité', to: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                Prenez soin de votre vision aujourd'hui
              </h2>
              <p className="text-teal-100">
                Réservez votre consultation en ligne en quelques minutes.
              </p>
            </div>
            <Link
              to="/rendez-vous"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/11/Logo.png"
                alt="La Cerisaie Eye Clinic"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Cabinet d'ophtalmologie de référence à Douala depuis 2003.
              Professionnels à l'expérience éprouvée au service de votre santé visuelle.
            </p>
            <div className="space-y-3">
              <a href="tel:+237699955164" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                (+237) 699 955 164
              </a>
              <a href="tel:+237675853201" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                (+237) 675 853 201
              </a>
              <a href="mailto:cm.lacerisaie@yahoo.fr" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
                cm.lacerisaie@yahoo.fr
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Bonapriso, Ave du Général de Gaulle, Douala</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-5">Le cabinet</h4>
            <ul className="space-y-3">
              {links.clinic.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5">Nos spécialités</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-5">Horaires</h4>
            <div className="space-y-2 text-sm text-slate-400 mb-6">
              <div className="flex justify-between gap-4">
                <span>Lundi – Vendredi</span>
                <span className="text-slate-300 font-medium">9h – 17h</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Samedi</span>
                <span className="text-slate-300 font-medium">Sur RDV</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Dimanche</span>
                <span className="text-red-400 font-medium">Fermé</span>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-2">Urgences ophtalmologiques</p>
              <a href="tel:+237699955164" className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
                (+237) 699 955 164
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} La Cerisaie Eye Clinic. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link) => (
              <Link key={link.label} to={link.to} className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
