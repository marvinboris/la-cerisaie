import { ArrowRight, Star, Users, Calendar, Award } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Ans d\'expérience', icon: Award },
  { value: '11', label: 'Professionnels', icon: Users },
  { value: '3', label: 'Ophtalmologistes', icon: Star },
  { value: '24/7', label: 'RDV en ligne', icon: Calendar },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-teal-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-teal-400/10 blur-3xl" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating eye illustration */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden md:block animate-float">
        <div className="relative w-64 h-64 lg:w-96 lg:h-96">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-teal-400/20 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-teal-400/20" />
          <div className="absolute inset-8 rounded-full bg-teal-500/30" />
          {/* Eye SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="w-48 h-48 lg:w-72 lg:h-72 text-white">
              <defs>
                <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#0d9488" stopOpacity="0.3" />
                </radialGradient>
              </defs>
              {/* Eye outline */}
              <ellipse cx="100" cy="100" rx="90" ry="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
              {/* Iris */}
              <circle cx="100" cy="100" r="38" fill="url(#eyeGrad)" />
              {/* Pupil */}
              <circle cx="100" cy="100" r="20" fill="rgba(15,118,110,0.9)" />
              {/* Highlight */}
              <circle cx="112" cy="90" r="7" fill="rgba(255,255,255,0.5)" />
              <circle cx="90" cy="105" r="3" fill="rgba(255,255,255,0.3)" />
              {/* Eyelashes */}
              <path d="M10 100 Q100 30 190 100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
              <path d="M10 100 Q100 170 190 100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-200 text-sm font-medium">Cabinet d'ophtalmologie depuis 2003</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Prenez soin<br />
            <span className="text-teal-400">de votre</span><br />
            vision
          </h1>

          <p className="text-lg text-teal-100/80 leading-relaxed mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            La Cerisaie Eye Clinic, votre cabinet d'ophtalmologie de référence à Douala.
            Des soins oculaires d'excellence prodigués par des spécialistes reconnus.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 group"
            >
              Prendre rendez-vous
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-0.5"
            >
              Nos services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Défiler</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  )
}
