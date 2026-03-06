import { useState } from 'react'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { Calendar, Clock, User, Phone, MessageSquare, ChevronRight, CheckCircle, Mail } from 'lucide-react'

const infoIcons = [Calendar, Clock, User, Phone, Mail, MessageSquare]
const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

export default function AppointmentPage() {
  const { t, tList } = useT()
  const [step, setStep] = useState(1)
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedType, setSelectedType] = useState('specialisee')
  const [submitted, setSubmitted] = useState(false)

  const doctors: { name: string; role: string; sub: string; badge: string | null; color: string; initials: string }[] = tList('doctors')
  const infoItems: { title: string; desc: string }[] = tList('appointment.info.items')
  const consultationTypes: { value: string; label: string }[] = tList('appointment.step1.types')
  const motifs: string[] = tList('appointment.step1.motifs')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    const successPoints: string[] = tList('appointment.success.points')
    return (
      <>
        <PageHero
          tag={t('appointment.success.tag')}
          title={t('appointment.success.title')}
          titleAccent={t('appointment.success.accent')}
          description={t('appointment.success.desc')}
          breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.bookCta') }]}
        />
        <section className="py-24 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-teal-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">{t('appointment.success.title2')}</h2>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left mb-8 space-y-3">
              {successPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-teal-500" /> {point}
                </div>
              ))}
            </div>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setSelectedTime(''); setSelectedDoctor('') }}
              className="btn-primary"
            >
              {t('appointment.success.again')}
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        tag={t('appointment.hero.tag')}
        title={t('appointment.hero.title')}
        titleAccent={t('appointment.hero.accent')}
        description={t('appointment.hero.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.bookCta') }]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Info panel */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">{t('appointment.info.title')}</h2>
              <div className="space-y-5 mb-8">
                {infoItems.map((item, i) => {
                  const Icon = infoIcons[i]
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900 text-sm">{item.title}</div>
                        <div className="text-slate-500 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
                <p className="text-sm text-teal-800 font-medium mb-3">{t('appointment.info.insurances')}</p>
                <div className="flex flex-wrap gap-2">
                  {['AXA', 'Wallis', 'Saham', 'GMC'].map((ins) => (
                    <span key={ins} className="text-xs bg-white text-teal-700 border border-teal-200 rounded-lg px-3 py-1.5 font-semibold">{ins}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {/* Steps */}
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step >= s ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-400'}`}>
                      {step > s ? <CheckCircle className="w-4 h-4" /> : s}
                    </div>
                    {s < 3 && <div className={`w-16 h-0.5 transition-all duration-300 ${step > s ? 'bg-teal-500' : 'bg-slate-200'}`} />}
                  </div>
                ))}
                <span className="ml-3 text-sm text-slate-500 font-medium">
                  {step === 1 && t('appointment.steps.label1')}
                  {step === 2 && t('appointment.steps.label2')}
                  {step === 3 && t('appointment.steps.label3')}
                </span>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                {/* Step 1 */}
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-6">{t('appointment.step1.title')}</h3>
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('appointment.step1.typeLabel')}</label>
                      <div className="grid sm:grid-cols-3 gap-2">
                        {consultationTypes.map((type) => (
                          <button key={type.value} type="button" onClick={() => setSelectedType(type.value)}
                            className={`py-3 px-3 rounded-xl text-xs font-semibold text-center border-2 transition-all duration-200 ${selectedType === type.value ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-200 text-slate-600 hover:border-teal-200'}`}>
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('appointment.step1.motifLabel')}</label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50">
                        {motifs.map((m) => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t('appointment.step1.dateLabel')} <span className="text-slate-400 font-normal">{t('appointment.step1.dateSub')}</span>
                      </label>
                      <input type="date" min={new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0]}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                    </div>
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-slate-700 mb-3">{t('appointment.step1.timeLabel')}</label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                        {timeSlots.map((time) => (
                          <button key={time} type="button" onClick={() => setSelectedTime(time)}
                            className={`py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${selectedTime === time ? 'bg-teal-600 text-white shadow-md' : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-teal-50 hover:text-teal-700'}`}>
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button onClick={() => setStep(2)} className="btn-primary w-full justify-center">
                      {t('common.continue')} <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-6">{t('appointment.step2.title')}</h3>
                    <div className="space-y-3 mb-8">
                      {doctors.map((doc) => (
                        <button key={doc.name} type="button" onClick={() => setSelectedDoctor(doc.name)}
                          className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-200 ${selectedDoctor === doc.name ? 'border-teal-500 bg-teal-50' : 'border-slate-200 hover:border-teal-200 bg-white'}`}>
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${doc.color} rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0`}>{doc.initials}</div>
                            <div className="flex-1">
                              <div className="font-semibold text-slate-900">{doc.name}</div>
                              <div className="text-teal-600 text-xs font-medium">{doc.role}</div>
                              <div className="text-slate-500 text-xs mt-0.5">{doc.sub}</div>
                            </div>
                            {selectedDoctor === doc.name && <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />}
                          </div>
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">{t('common.back')}</button>
                      <button onClick={() => setStep(3)} className="btn-primary flex-1 justify-center">{t('common.continue')} <ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-6">{t('appointment.step3.title')}</h3>
                    <div className="space-y-4 mb-8">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('appointment.step3.firstName')}</label>
                          <input type="text" required placeholder="Dupont" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('appointment.step3.lastName')}</label>
                          <input type="text" required placeholder="Jean" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('appointment.step3.email')}</label>
                        <input type="email" required placeholder="jean.dupont@email.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('appointment.step3.phone')}</label>
                        <input type="tel" required placeholder="(+237) 6XX XXX XXX" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">{t('appointment.step3.message')}</label>
                        <textarea rows={3} placeholder={t('appointment.step3.messagePlaceholder')} className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50 resize-none" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1 justify-center">{t('common.back')}</button>
                      <button type="submit" className="btn-primary flex-1 justify-center">{t('common.confirm')}</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
