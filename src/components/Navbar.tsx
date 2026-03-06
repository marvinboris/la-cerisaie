import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Pathologies',
    to: '/la-cataracte',
    children: [
      { label: 'La cataracte', to: '/la-cataracte' },
      { label: 'Défauts de la vision', to: '/defauts-de-vision' },
      { label: 'Vivre sans lunettes', to: '/vivre-sans-lunettes' },
    ],
  },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { pathname } = useLocation()

  const isHome = pathname === '/'

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
              src="https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/11/Logo.png"
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
                  <div className="absolute top-full left-0 pt-2 w-52">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+237699955164"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                transparent ? 'text-white/80 hover:text-white' : 'text-slate-600 hover:text-teal-600'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>699 955 164</span>
            </a>
            <Link to="/rendez-vous" className="btn-primary text-sm py-2.5 px-5 shadow-md shadow-teal-200">
              Prendre RDV
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
            <a href="tel:+237699955164" className="flex items-center gap-2 text-slate-600 font-medium">
              <Phone className="w-4 h-4 text-teal-600" />
              (+237) 699 955 164
            </a>
            <Link to="/rendez-vous" className="btn-primary w-full justify-center">
              Prendre RDV
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
