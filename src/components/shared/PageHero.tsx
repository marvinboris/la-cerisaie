import { Link, useLocation } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import JsonLd from '../JsonLd'
import { SITE_URL } from '../../lib/seo'

interface Crumb {
  label: string
  to?: string
}

interface PageHeroProps {
  tag: string
  title: string
  titleAccent?: string
  description: string
  breadcrumbs: Crumb[]
  cta?: { label: string; to: string }
}

export default function PageHero({ tag, title, titleAccent, description, breadcrumbs, cta }: PageHeroProps) {
  const { pathname } = useLocation()
  const breadcrumbLd = {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `${SITE_URL}${c.to ?? pathname}` })),
  }
  return (
    <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 pt-32 pb-20 overflow-hidden">
      <JsonLd data={breadcrumbLd} />
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-teal-300/70 mb-8 flex-wrap">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
              {crumb.to ? (
                <Link to={crumb.to} className="hover:text-teal-200 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-teal-200">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-200 text-sm font-medium">{tag}</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {title}
            {titleAccent && (
              <span className="block text-teal-400">{titleAccent}</span>
            )}
          </h1>

          <p className="text-lg text-teal-100/80 leading-relaxed max-w-2xl mb-8">
            {description}
          </p>

          {cta && (
            <Link
              to={cta.to}
              className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-7 py-3.5 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
            >
              {cta.label}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
