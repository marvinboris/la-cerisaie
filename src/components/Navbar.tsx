import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import { phones } from '../data/contact'
import { pathologies } from '../data/pathologies'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const isHome = pathname === '/'

  const navLinks = [
    { label: t('nav.home'), to: '/' },
    {
      label: t('nav.pathologies'),
      to: '/pathologies',
      children: pathologies.map(({ id, to, Icon }) => ({
        label: t(`pathologySummaries.${id}.name`),
        short: t(`pathologySummaries.${id}.short`),
        to,
        Icon,
      })),
    },
    { label: t('nav.about'), to: '/a-propos' },
    { label: t('nav.news'), to: '/actualites' },
    { label: t('nav.contact'), to: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const transparent = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="La Cerisaie Eye Clinic"
              className={`h-12 w-auto object-contain transition-all duration-300 ${transparent ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 text-sm font-medium transition-all duration-300 relative group py-2 ${
                      isActive
                        ? transparent ? 'text-white' : 'text-teal-600'
                        : transparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-teal-600'
                    }`
                  }
                  end={link.to === '/'}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {link.children && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`} />
                      )}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-teal-500 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                    </>
                  )}
                </NavLink>

                {/* Dropdown */}
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[42rem] max-w-[calc(100vw-2rem)]">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.to}
                            to={child.to}
                            className="flex gap-3 px-3 py-3 rounded-xl hover:bg-teal-50 transition-colors group/item"
                          >
                            <child.Icon className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>
                              <span className="block text-sm font-medium text-slate-800 group-hover/item:text-teal-700">{child.label}</span>
                              <span className="block text-xs text-slate-500 leading-snug mt-0.5">{child.short}</span>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/pathologies"
                        className="flex items-center justify-center gap-1.5 mt-2 pt-3 border-t border-slate-100 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        {t('nav.allPathologies')} <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher transparent={transparent} />
            <div className="flex items-center gap-2">
              <Phone className={`w-4 h-4 ${transparent ? 'text-white/80' : 'text-teal-600'}`} />
              <div className="flex flex-col leading-tight">
                {phones.map((phone) => (
                  <a
                    key={phone.operator}
                    href={phone.href}
                    className={`text-xs font-medium whitespace-nowrap transition-colors duration-300 ${
                      transparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-teal-600'
                    }`}
                  >
                    <span className="font-semibold">{phone.operator}</span> {phone.display}
                  </a>
                ))}
              </div>
            </div>
            <Link to="/rendez-vous" className="btn-primary text-sm py-2.5 px-5 shadow-md shadow-teal-200">
              {t('nav.bookCta')}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              transparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-6 shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className="block text-slate-700 hover:text-teal-600 font-medium py-2.5 transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 space-y-1 mb-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block text-slate-500 hover:text-teal-600 text-sm py-1.5 transition-colors"
                      >
                        — {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 mt-2 border-t border-slate-100 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                {phones.map((phone) => (
                  <a key={phone.operator} href={phone.href} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                    <Phone className="w-4 h-4 text-teal-600" />
                    <span className="font-semibold">{phone.operator}</span> {phone.display}
                  </a>
                ))}
              </div>
              <LanguageSwitcher />
            </div>
            <Link to="/rendez-vous" className="btn-primary w-full justify-center">
              {t('nav.bookCta')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
