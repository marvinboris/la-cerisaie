import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import { ArrowRight, Eye, Activity, Scan, Microscope, Stethoscope, Glasses, Star, Users, Calendar, Award, CheckCircle } from 'lucide-react'

const serviceIcons = [Eye, Activity, Scan, Microscope, Stethoscope, Glasses]
const serviceLinks = ['/la-cataracte', null, null, null, '/vivre-sans-lunettes', '/defauts-de-vision']
const serviceColors = [
  { color: 'from-teal-500 to-teal-600', bg: 'bg-teal-50', iconColor: 'text-teal-600' },
  { color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { color: 'from-violet-500 to-violet-600', bg: 'bg-violet-50', iconColor: 'text-violet-600' },
  { color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  { color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', iconColor: 'text-orange-600' },
  { color: 'from-pink-500 to-pink-600', bg: 'bg-pink-50', iconColor: 'text-pink-600' },
]
const statIcons = [Award, Users, Star, Calendar]

const newsImages = [
  'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/03/Bienvenue_Cerisaie.png',
  'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/03/nouvelles_lunettes_cerisaie.png',
]
const newsColors = [
  { color: 'from-blue-400 to-blue-600', bg: 'bg-blue-50' },
  { color: 'from-teal-400 to-teal-600', bg: 'bg-teal-50' },
]

const insurers = [
  { name: 'AXA', logo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/12/logo-axa.jpg' },
  { name: 'Wallis', logo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/12/WALLIS.png' },
  { name: 'Saham', logo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/12/Saham_assurance.png' },
  { name: 'GMC', logo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/12/GMC-Garantie-Mutuelle-des-Cadres-450x300-1.png' },
]

export default function Home() {
  const { t, tList } = useT()
  const stats: { value: string; label: string }[] = tList('home.stats')
  const services: { title: string; description: string }[] = tList('home.services.items')
  const aboutStats: { n: string; l: string }[] = tList('home.about.statsItems')
  const aboutPoints: string[] = tList('home.about.points')
  const doctors: { name: string; role: string; badge: string | null; color: string; photo: string }[] = tList('doctors')
  const newsArticles: { title: string; excerpt: string; date: string; category: string }[] = tList('news.articles')

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

        <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:block animate-float">
          <div className="relative w-64 h-64 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-teal-400/20 animate-pulse" />
            <div className="absolute inset-4 rounded-full bg-teal-400/20" />
            <div className="absolute inset-8 rounded-full bg-teal-500/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" className="w-48 h-48 lg:w-72 lg:h-72">
                <defs>
                  <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4A7FA5" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#2B4C7E" stopOpacity="0.3" />
                  </radialGradient>
                </defs>
                <ellipse cx="100" cy="100" rx="90" ry="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <circle cx="100" cy="100" r="38" fill="url(#eyeGrad)" />
                <circle cx="100" cy="100" r="20" fill="rgba(27,56,110,0.9)" />
                <circle cx="112" cy="90" r="7" fill="rgba(255,255,255,0.5)" />
                <circle cx="90" cy="105" r="3" fill="rgba(255,255,255,0.3)" />
                <path d="M10 100 Q100 30 190 100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                <path d="M10 100 Q100 170 190 100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span className="text-teal-200 text-sm font-medium">{t('home.hero.badge')}</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t('home.hero.title1')}<br />
              <span className="text-teal-400">{t('home.hero.title2')}</span><br />
              {t('home.hero.title3')}
            </h1>
            <p className="text-lg text-teal-100/80 leading-relaxed mb-10 max-w-xl">{t('home.hero.desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/rendez-vous" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 group">
                {t('home.hero.cta1')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/la-cataracte" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-0.5">
                {t('home.hero.cta2')}
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
              {stats.map((stat, i) => {
                const Icon = statIcons[i]
                return (
                  <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors">
                    <Icon className="w-5 h-5 text-teal-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-teal-200/70 mt-1">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs font-medium tracking-widest uppercase">{t('common.scroll')}</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              {t('home.services.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-6">
              {t('home.services.title1')}
              <span className="block text-gradient">{t('home.services.title2')}</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">{t('home.services.desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[i]
              const { color, bg, iconColor } = serviceColors[i]
              const to = serviceLinks[i]
              const card = (
                <div className={`group relative bg-white rounded-3xl p-8 border border-slate-100 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${to ? 'cursor-pointer' : 'cursor-default'}`}>
                  <div className={`w-14 h-14 ${bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{service.description}</p>
                  {to && (
                    <div className="flex items-center gap-1.5 text-teal-600 text-sm font-medium mt-5 group-hover:gap-2.5 transition-all duration-200">
                      {t('common.learnMore')} <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </div>
              )
              return to ? (
                <Link key={service.title} to={to}>{card}</Link>
              ) : (
                <div key={service.title}>{card}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 lg:p-14 text-white">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="section-tag text-teal-200">
                  <div className="w-6 h-px bg-teal-300" />
                  {t('home.about.tag')}
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">{t('home.about.title')}</h2>
                <p className="text-teal-100 leading-relaxed mb-6">{t('home.about.desc')}</p>
                <ul className="space-y-2 mb-8">
                  {aboutPoints.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-teal-100 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/a-propos" className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  {t('home.about.cta')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48">
                  <img src="https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_8755-1024x681.jpg" alt="La Cerisaie Eye Clinic" className="w-full h-full object-cover" />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {aboutStats.map((s) => (
                    <div key={s.n} className="bg-white/10 rounded-xl p-3 text-center border border-white/10">
                      <div className="text-xl font-bold text-white">{s.n}</div>
                      <div className="text-teal-200 text-xs mt-0.5 leading-tight">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEAM TEASER ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                {t('home.team.tag')}
              </div>
              <h2 className="section-title">
                {t('home.team.title1')}
                <span className="block text-gradient">{t('home.team.title2')}</span>
              </h2>
            </div>
            <Link to="/a-propos" className="btn-outline flex-shrink-0">
              {t('common.seeTeam')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {doctors.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl overflow-hidden border border-slate-100 text-center card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                  {member.badge && (
                    <span className="absolute top-3 right-3 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
                      {member.badge}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-teal-600 font-medium text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE ── */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-shrink-0 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">{t('home.insurance.title')}</h3>
              <p className="text-slate-500 text-sm">{t('home.insurance.sub')}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 flex-1">
              {insurers.map((ins) => (
                <div key={ins.name} className="bg-white border border-slate-200 rounded-2xl px-6 py-3 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-200 flex items-center justify-center h-16">
                  <img src={ins.logo} alt={ins.name} className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT CTA ── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              {t('home.cta.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-4">
              {t('home.cta.title1')}
              <span className="block text-gradient">{t('home.cta.title2')}</span>
            </h2>
            <p className="text-slate-500 text-lg">{t('home.cta.desc')}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
              {t('home.cta.cta1')} <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+237699955164" className="btn-outline text-base px-8 py-4">
              {t('home.cta.cta2')}
            </a>
          </div>
          <p className="text-center text-slate-400 text-sm mt-6" dangerouslySetInnerHTML={{ __html: t('home.cta.note') }} />
        </div>
      </section>

      {/* ── NEWS TEASER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                {t('home.news.tag')}
              </div>
              <h2 className="section-title">
                {t('home.news.title1')}
                <span className="block text-gradient">{t('home.news.title2')}</span>
              </h2>
            </div>
            <Link to="/actualites" className="btn-outline flex-shrink-0">
              {t('common.seeAll')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {newsArticles.slice(0, 2).map((article, i) => (
              <Link key={article.title} to="/actualites" className="group bg-white border border-slate-100 rounded-3xl overflow-hidden card-hover block">
                <div className="relative h-48 overflow-hidden">
                  <img src={newsImages[i]} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${newsColors[i].color} opacity-30`} />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full ${newsColors[i].bg} text-slate-700`}>{article.category}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-slate-400 mb-3 block">{article.date}</span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">{article.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-teal-600 text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                    {t('common.readArticle')} <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
