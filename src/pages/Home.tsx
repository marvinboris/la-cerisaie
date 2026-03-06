import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Activity, Scan, Microscope, Stethoscope, Glasses, Star, Users, Calendar, Award, CheckCircle } from 'lucide-react'

const stats = [
  { value: '20+', label: "Ans d'expérience", icon: Award },
  { value: '11', label: 'Professionnels', icon: Users },
  { value: '3', label: 'Ophtalmologistes', icon: Star },
  { value: '24/7', label: 'RDV en ligne', icon: Calendar },
]

const services = [
  { icon: Eye, title: 'Cataracte', description: "Opacification du cristallin liée au vieillissement. Diagnostic, suivi et orientation chirurgicale.", to: '/la-cataracte', color: 'from-teal-500 to-teal-600', bg: 'bg-teal-50', iconColor: 'text-teal-600', hasPage: true },
  { icon: Activity, title: 'Glaucome', description: "Dépistage et traitement du glaucome — maladie due à une pression intraoculaire anormale.", to: null, color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', iconColor: 'text-blue-600', hasPage: false },
  { icon: Scan, title: 'Kératocône', description: "Évaluation et suivi de la déformation progressive de la cornée entraînant une vision floue.", to: null, color: 'from-violet-500 to-violet-600', bg: 'bg-violet-50', iconColor: 'text-violet-600', hasPage: false },
  { icon: Microscope, title: 'OCT & Imagerie', description: "Analyse fine des fibres optiques et de la macula par tomographie par cohérence optique.", to: null, color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', iconColor: 'text-emerald-600', hasPage: false },
  { icon: Stethoscope, title: 'Chirurgie réfractive', description: "Consultations pré-opératoires pour la correction de la myopie, hypermétropie et astigmatisme.", to: '/vivre-sans-lunettes', color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', iconColor: 'text-orange-600', hasPage: true },
  { icon: Glasses, title: 'Bilan visuel', description: "Examen complet : réfraction, acuité, fond d'œil et bilan orthoptique personnalisé.", to: '/defauts-de-vision', color: 'from-pink-500 to-pink-600', bg: 'bg-pink-50', iconColor: 'text-pink-600', hasPage: true },
]

const team = [
  { name: 'Dr. Théodat Manga', role: 'Ophtalmologiste', initials: 'TM', color: 'from-teal-400 to-teal-600', badge: 'Chef de cabinet', photo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_9357-scaled.jpg' },
  { name: 'Dr. Georges Mouen', role: 'Ophtalmologiste', initials: 'GM', color: 'from-blue-400 to-blue-600', badge: null, photo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_9152-scaled.jpg' },
  { name: 'Dr. Mbia Zobo', role: 'Ophtalmologiste', initials: 'MZ', color: 'from-violet-400 to-violet-600', badge: null, photo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_9067-scaled.jpg' },
]

const news = [
  { date: '7 mars 2022', title: 'Votre vue est précieuse', excerpt: "Vous avez tellement de belles choses à voir et à découvrir. La Cerisaie Eye Clinic s'engage à prendre soin de vos yeux.", tag: 'Prévention', color: 'from-blue-400 to-blue-600', bg: 'bg-blue-50', image: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/03/Bienvenue_Cerisaie.png' },
  { date: '7 mars 2022', title: 'Renouveler vos lunettes', excerpt: "Vous souhaitez renouveler votre paire de lunettes ? La Cerisaie Eye Clinic est à votre disposition.", tag: 'Optique', color: 'from-teal-400 to-teal-600', bg: 'bg-teal-50', image: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/03/nouvelles_lunettes_cerisaie.png' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

        {/* Floating eye */}
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
              <span className="text-teal-200 text-sm font-medium">Cabinet d'ophtalmologie depuis 2003</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Prenez soin<br />
              <span className="text-teal-400">de votre</span><br />
              vision
            </h1>
            <p className="text-lg text-teal-100/80 leading-relaxed mb-10 max-w-xl">
              La Cerisaie Eye Clinic, votre cabinet d'ophtalmologie de référence à Douala.
              Des soins oculaires d'excellence prodigués par des spécialistes reconnus depuis plus de 20 ans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/rendez-vous" className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 group">
                Prendre rendez-vous
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/la-cataracte" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-0.5">
                Nos spécialités
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
              {stats.map((stat) => {
                const Icon = stat.icon
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
          <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Défiler</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag">
              <div className="w-8 h-px bg-teal-500" />
              Nos spécialités
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-6">
              Des soins oculaires
              <span className="block text-gradient">d'excellence</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Notre cabinet dispose des équipements diagnostiques les plus modernes pour une prise en charge optimale de toutes les pathologies oculaires.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              const card = (
                <div className={`group relative bg-white rounded-3xl p-8 border border-slate-100 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${service.hasPage ? 'cursor-pointer' : 'cursor-default'}`}>
                  <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{service.description}</p>
                  {service.hasPage && (
                    <div className="flex items-center gap-1.5 text-teal-600 text-sm font-medium mt-5 group-hover:gap-2.5 transition-all duration-200">
                      En savoir plus <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div className={`absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r ${service.color} rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                </div>
              )
              return service.to ? (
                <Link key={service.title} to={service.to}>{card}</Link>
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
                  À propos
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                  Un cabinet de référence depuis 2003
                </h2>
                <p className="text-teal-100 leading-relaxed mb-6">
                  La Cerisaie Eye Clinic est un cabinet médical groupé d'ophtalmologistes
                  reconnus, concentrant ses activités sur les consultations, les examens
                  complémentaires et la chirurgie oculaire à Douala, Cameroun.
                </p>
                <ul className="space-y-2 mb-8">
                  {['3 ophtalmologistes spécialisés', 'Équipements diagnostiques de dernière génération', 'Assurances partenaires : AXA, Wallis, Saham, GMC'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-teal-100 text-sm">
                      <CheckCircle className="w-4 h-4 text-teal-300 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/a-propos" className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                  Découvrir le cabinet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48">
                  <img
                    src="https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_8755-1024x681.jpg"
                    alt="La Cerisaie Eye Clinic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[{ n: '20+', l: "Années d'expérience" }, { n: '11', l: 'Professionnels' }, { n: '3', l: 'Ophtalmo.' }, { n: '4', l: 'Assurances' }, { n: '48h', l: 'Prise en charge' }, { n: '24/7', l: 'RDV en ligne' }].map((s) => (
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
                Notre équipe
              </div>
              <h2 className="section-title">
                Des experts à
                <span className="block text-gradient">votre service</span>
              </h2>
            </div>
            <Link to="/a-propos" className="btn-outline flex-shrink-0">
              Voir toute l'équipe <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl overflow-hidden border border-slate-100 text-center card-hover">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
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
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Assurances partenaires</h3>
              <p className="text-slate-500 text-sm">Nous acceptons les principales mutuelles et assurances</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 flex-1">
              {[
                { name: 'AXA', logo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/12/logo-axa.jpg' },
                { name: 'Wallis', logo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/12/WALLIS.png' },
                { name: 'Saham', logo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/12/Saham_assurance.png' },
                { name: 'GMC', logo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2020/12/GMC-Garantie-Mutuelle-des-Cadres-450x300-1.png' },
              ].map((ins) => (
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
            <div className="section-tag">
              <div className="w-8 h-px bg-teal-500" />
              Rendez-vous
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-4">
              Réservez votre
              <span className="block text-gradient">consultation</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Prise de rendez-vous en ligne 24h/24, avec rappel SMS la veille.
              Sélectionnez votre ophtalmologiste et votre créneau en quelques clics.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
              Prendre rendez-vous en ligne <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+237699955164" className="btn-outline text-base px-8 py-4">
              Appeler le cabinet
            </a>
          </div>
          <p className="text-center text-slate-400 text-sm mt-6">
            Les rendez-vous doivent être pris au minimum <strong>48 heures à l'avance</strong>. Horaires : Lun–Ven 9h–17h.
          </p>
        </div>
      </section>

      {/* ── NEWS TEASER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                Actualités
              </div>
              <h2 className="section-title">
                Dernières
                <span className="block text-gradient">nouvelles</span>
              </h2>
            </div>
            <Link to="/actualites" className="btn-outline flex-shrink-0">
              Toutes les actualités <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {news.map((article) => (
              <Link key={article.title} to="/actualites" className="group bg-white border border-slate-100 rounded-3xl overflow-hidden card-hover block">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-30`} />
                  <span className={`absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded-full ${article.bg} text-slate-700`}>{article.tag}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-slate-400 mb-3 block">{article.date}</span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">{article.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{article.excerpt}</p>
                  <div className="flex items-center gap-1.5 text-teal-600 text-sm font-medium group-hover:gap-2.5 transition-all duration-200">
                    Lire l'article <ArrowRight className="w-3.5 h-3.5" />
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
