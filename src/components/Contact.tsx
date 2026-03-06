import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Téléphone',
    lines: ['(+237) 699 955 164', '(+237) 675 853 201'],
    action: { label: 'Appeler maintenant', href: 'tel:+237699955164' },
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['cm.lacerisaie@yahoo.fr', 'lacerisaie.clinique@gmail.com'],
    action: { label: 'Envoyer un email', href: 'mailto:cm.lacerisaie@yahoo.fr' },
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    lines: ['Bonapriso, Avenue du', 'Général de Gaulle, Douala'],
    action: { label: 'Voir sur la carte', href: 'https://maps.google.com/?q=Bonapriso+Avenue+du+Général+de+Gaulle+Douala+Cameroun' },
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Clock,
    title: 'Horaires',
    lines: ['Lun – Ven : 9h00 – 17h00', 'Samedi : sur rendez-vous'],
    action: { label: 'Prendre RDV', href: '#appointment' },
    color: 'bg-orange-50 text-orange-600',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-tag">
            <div className="w-8 h-px bg-teal-500" />
            Contact
            <div className="w-8 h-px bg-teal-500" />
          </div>
          <h2 className="section-title mb-6">
            Nous sommes là
            <span className="block text-gradient">pour vous aider</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            N'hésitez pas à nous contacter pour toute question ou pour prendre
            rendez-vous. Notre équipe est à votre écoute.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group bg-white border border-slate-100 rounded-3xl p-6 card-hover text-center"
              >
                <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">{item.title}</h3>
                {item.lines.map((line) => (
                  <p key={line} className="text-slate-500 text-sm">{line}</p>
                ))}
                <a
                  href={item.action.href}
                  target={item.action.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium mt-4 hover:gap-2 transition-all duration-200"
                >
                  {item.action.label}
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            )
          })}
        </div>

        {/* Map + contact form */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Map embed placeholder */}
          <div className="bg-slate-100 rounded-3xl overflow-hidden relative min-h-64">
            <iframe
              title="La Cerisaie Eye Clinic - Localisation"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8!2d9.706!3d4.061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMzkuNiJOIDnCsDQyJzIxLjYiRQ!5e0!3m2!1sfr!2scm!4v1"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, minHeight: '280px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Address overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-slate-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">La Cerisaie Eye Clinic</p>
                  <p className="text-slate-500 text-xs">Bonapriso, Avenue du Général de Gaulle, Douala</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact form */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-6">
              Message rapide
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white"
              />
              <textarea
                rows={4}
                placeholder="Votre message..."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white resize-none"
              />
              <button type="submit" className="btn-primary w-full justify-center">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-display text-2xl font-bold mb-2">Contactez-nous sur WhatsApp</h3>
            <p className="text-green-100 text-sm mb-4">
              Pour une réponse rapide, écrivez-nous directement sur WhatsApp.
              Notre équipe vous répond dans les meilleurs délais.
            </p>
            <a
              href="https://wa.me/237699955164"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-green-600 font-bold text-sm px-5 py-2.5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Démarrer la discussion
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
