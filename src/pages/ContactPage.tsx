import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact"
        title="Nous sommes là"
        titleAccent="pour vous"
        description="Contactez-nous par téléphone, email ou WhatsApp. Notre équipe répond à toutes vos questions et vous guide vers la meilleure prise en charge."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Contact' }]}
        cta={{ label: 'Prendre rendez-vous', to: '/rendez-vous' }}
      />

      {/* Contact cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Phone, title: 'Téléphone', lines: ['(+237) 699 955 164', '(+237) 675 853 201'], action: { label: 'Appeler maintenant', href: 'tel:+237699955164' }, color: 'bg-teal-50 text-teal-600' },
              { icon: Mail, title: 'Email', lines: ['cm.lacerisaie@yahoo.fr', 'lacerisaie.clinique@gmail.com'], action: { label: 'Envoyer un email', href: 'mailto:cm.lacerisaie@yahoo.fr' }, color: 'bg-blue-50 text-blue-600' },
              { icon: MapPin, title: 'Adresse', lines: ['Bonapriso, Avenue du', 'Général de Gaulle, Douala'], action: { label: 'Voir sur la carte', href: 'https://maps.google.com/?q=Bonapriso+Douala+Cameroun' }, color: 'bg-violet-50 text-violet-600' },
              { icon: Clock, title: 'Horaires', lines: ['Lun – Ven : 9h00 – 17h00', 'Samedi : sur rendez-vous'], action: { label: 'Prendre RDV', href: '/rendez-vous' }, color: 'bg-orange-50 text-orange-600', isInternal: true },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="group bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-slate-500 text-sm">{line}</p>
                  ))}
                  {item.isInternal ? (
                    <Link to={item.action.href} className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium mt-4 hover:gap-2 transition-all duration-200">
                      {item.action.label} <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <a href={item.action.href} target={item.action.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium mt-4 hover:gap-2 transition-all duration-200">
                      {item.action.label} <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>

          {/* Map + form */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-100 rounded-3xl overflow-hidden relative min-h-80">
              <iframe
                title="La Cerisaie Eye Clinic"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8!2d9.706!3d4.061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMDMnMzkuNiJOIDnCsDQyJzIxLjYiRQ!5e0!3m2!1sfr!2scm!4v1"
                width="100%" height="100%"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, minHeight: '320px' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Nom</label>
                    <input type="text" placeholder="Dupont" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Prénom</label>
                    <input type="text" placeholder="Jean" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Téléphone</label>
                  <input type="tel" placeholder="(+237) 6XX XXX XXX" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                  <textarea rows={4} placeholder="Votre message..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl p-8 text-white flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-display text-2xl font-bold mb-2">Contactez-nous sur WhatsApp</h3>
              <p className="text-green-100 text-sm mb-4">
                Pour une réponse rapide, écrivez-nous directement. Notre équipe vous répond dans les meilleurs délais.
              </p>
              <a href="https://wa.me/237699955164" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 font-bold text-sm px-6 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Démarrer la discussion <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RDV CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Prêt à consulter ?</h2>
          <p className="text-slate-500 mb-8">Réservez votre rendez-vous en ligne en quelques clics. Disponible 24h/24.</p>
          <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
            Prendre rendez-vous <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
