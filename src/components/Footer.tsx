import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { phones } from '../data/contact'
import { activeSocials } from '../data/socials'

const clinicLinks = [
  { to: '/' }, { to: '/a-propos' }, { to: '/a-propos#team' }, { to: '/actualites' }, { to: '/contact' },
]
const serviceLinks = [
  { to: '/la-cataracte' }, { to: '/defauts-de-vision' }, { to: '/vivre-sans-lunettes' },
  { to: '/pathologies/glaucome' }, { to: '/pathologies/keratocone' }, { to: '/pathologies' },
]

export default function Footer() {
  const { t, tList } = useT()
  const clinicLabels: string[] = tList('footer.links.clinic')
  const socials = activeSocials()
  const serviceLabels: string[] = tList('footer.links.services')

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{t('footer.cta')}</h2>
              <p className="text-teal-100">{t('footer.ctaSub')}</p>
            </div>
            <Link
              to="/rendez-vous"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              {t('footer.ctaBtn')}
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
                src="/images/logo.png"
                alt="La Cerisaie Eye Clinic"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{t('footer.tagline')}</p>
            <div className="space-y-3">
              {phones.map((phone) => (
                <a key={phone.operator} href={phone.href} className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                  <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span className="font-semibold text-slate-300">{phone.operator}</span> {phone.display}
                </a>
              ))}
              <a href="mailto:cm.lacerisaie@yahoo.fr" className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
                cm.lacerisaie@yahoo.fr
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>Bonapriso, Ave du Général de Gaulle, Douala</span>
              </div>
            </div>
            {socials.length > 0 && (
              <div className="flex items-center gap-3 mt-6">
                {socials.map(({ label, url, Icon }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-teal-600 hover:border-teal-600 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-5">{t('footer.cabinet')}</h4>
            <ul className="space-y-3">
              {clinicLabels.map((label, i) => (
                <li key={label}>
                  <Link to={clinicLinks[i]?.to ?? '/'} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-5">{t('footer.specialties')}</h4>
            <ul className="space-y-3">
              {serviceLabels.map((label, i) => (
                <li key={label}>
                  <Link to={serviceLinks[i]?.to ?? '/'} className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-5">{t('footer.hours')}</h4>
            <div className="space-y-2 text-sm text-slate-400 mb-6">
              <div className="flex justify-between gap-4">
                <span>{t('footer.monFri')}</span>
                <span className="text-slate-300 font-medium">{t('footer.monFriHours')}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t('footer.sat')}</span>
                <span className="text-slate-300 font-medium">{t('footer.satHours')}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t('footer.sun')}</span>
                <span className="text-red-400 font-medium">{t('footer.sunHours')}</span>
              </div>
            </div>
            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
              <p className="text-xs text-slate-400 mb-2">{t('footer.urgency')}</p>
              <a href={phones[0].href} className="text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors">
                {phones[0].display}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            {t('footer.rights', { year: new Date().getFullYear() })}
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{t('footer.legalLinks.mentions')}</Link>
            <Link to="#" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">{t('footer.legalLinks.privacy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
