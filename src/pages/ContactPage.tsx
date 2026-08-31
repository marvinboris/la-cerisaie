import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronRight, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

const cardIcons = [Phone, Mail, MapPin, Clock]
const cardColors = [
  'bg-teal-50 text-teal-600',
  'bg-blue-50 text-blue-600',
  'bg-violet-50 text-violet-600',
  'bg-orange-50 text-orange-600',
]

export default function ContactPage() {
  const { t, tList } = useT()
  const cards: { title: string; lines: string[]; action: string; href: string; isInternal?: boolean }[] = tList('contact.cards')

  return (
    <>
      <Seo title={t('seo.contact.title')} description={t('seo.contact.desc')} />
      <PageHero
        tag={t('contact.hero.tag')}
        title={t('contact.hero.title')}
        titleAccent={t('contact.hero.accent')}
        description={t('contact.hero.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.contact') }]}
        cta={{ label: t('contact.hero.cta'), to: '/rendez-vous' }}
      />

      {/* Contact cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {cards.map((item, i) => {
              const Icon = cardIcons[i]
              return (
                <div key={item.title} className="group bg-white border border-slate-100 rounded-3xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <div className={`w-12 h-12 ${cardColors[i]} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-3">{item.title}</h3>
                  {item.lines.map((line) => (
                    <p key={line} className="text-slate-500 text-sm">{line}</p>
                  ))}
                  {item.isInternal ? (
                    <Link to={item.href} className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium mt-4 hover:gap-2 transition-all duration-200">
                      {item.action} <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium mt-4 hover:gap-2 transition-all duration-200">
                      {item.action} <ChevronRight className="w-3.5 h-3.5" />
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
                src="https://maps.google.com/maps?q=La+Cerisaie+Eye+Clinic,+Bonapriso,+Douala,+Cameroun&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
                    <p className="text-slate-500 text-xs">{t('contact.address')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="font-display text-xl font-bold text-slate-900 mb-6">{t('contact.form.title')}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('contact.form.firstName')}</label>
                    <input type="text" placeholder="Dupont" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('contact.form.lastName')}</label>
                    <input type="text" placeholder="Jean" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('contact.form.phone')}</label>
                  <input type="tel" placeholder="(+237) 6XX XXX XXX" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('contact.form.message')}</label>
                  <textarea rows={4} spellCheck autoCorrect="on" autoCapitalize="sentences" placeholder="..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white resize-none" />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  {t('contact.form.submit')}
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
              <h3 className="font-display text-2xl font-bold mb-2">{t('contact.whatsapp.title')}</h3>
              <p className="text-green-100 text-sm mb-4">{t('contact.whatsapp.desc')}</p>
              <a href="https://wa.me/237699955164" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 font-bold text-sm px-6 py-3 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                {t('contact.whatsapp.cta')} <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RDV CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">{t('contact.rdvCta.title')}</h2>
          <p className="text-slate-500 mb-8">{t('contact.rdvCta.desc')}</p>
          <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
            {t('common.bookAppointment')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
