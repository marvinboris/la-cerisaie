import { useState } from 'react'
import PageHero from '../components/shared/PageHero'
import { Calendar, Clock, User, Phone, MessageSquare, ChevronRight, CheckCircle, Mail } from 'lucide-react'

const doctors = [
  { name: 'Dr. Théodat Manga', role: 'Ophtalmologiste', sub: 'Cataracte, glaucome & segment antérieur', initials: 'TM', color: 'from-teal-400 to-teal-600' },
  { name: 'Dr. Georges Mouen', role: 'Ophtalmologiste', sub: 'Rétine, segment postérieur & urgences', initials: 'GM', color: 'from-blue-400 to-blue-600' },
  { name: 'Dr. Mbia Zobo', role: 'Ophtalmologiste', sub: 'Chirurgie réfractive, cornée & kératocône', initials: 'MZ', color: 'from-violet-400 to-violet-600' },
]

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']

const consultationTypes = [
  { value: 'specialisee', label: 'Consultation spécialisée' },
  { value: 'urgence', label: 'Consultation urgence' },
  { value: 'examens', label: 'Examens complémentaires / Bilan' },
]

const motifs = [
  'Consultation spécialisée',
  'Consultation urgence',
  'Échographie mode A',
  'OCT (Tomographie par cohérence optique)',
  'Rétinophotographie',
  'Rétinoscopie',
  'Bilan visuel complet',
  'Renouvellement ordonnance',
  'Autre',
]

export default function AppointmentPage() {
  const [step, setStep] = useState(1)
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedDoctor, setSelectedDoctor] = useState('')
  const [selectedType, setSelectedType] = useState(consultationTypes[0].value)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <PageHero
          tag="Rendez-vous"
          title="Votre demande"
          titleAccent="a été envoyée"
          description="Votre demande de rendez-vous a bien été enregistrée. Vous recevrez un SMS de confirmation dans les meilleurs délais."
          breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Rendez-vous' }]}
        />
        <section className="py-24 bg-white">
          <div className="max-w-lg mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-teal-600" />
            </div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">Demande confirmée !</h2>
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-left mb-8 space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-teal-500" /> Votre demande a été enregistrée</div>
              <div className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-teal-500" /> Un SMS de confirmation vous sera envoyé</div>
              <div className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-teal-500" /> Rappel la veille de votre rendez-vous</div>
            </div>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setSelectedTime(''); setSelectedDoctor('') }}
              className="btn-primary"
            >
              Prendre un autre rendez-vous
            </button>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        tag="Prise de rendez-vous"
        title="Réservez votre"
        titleAccent="consultation"
        description="Prenez rendez-vous en ligne 24h/24. Sélectionnez votre type de consultation, votre ophtalmologiste et votre créneau. Un SMS de rappel vous sera envoyé la veille."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Rendez-vous' }]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Info panel */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-8">Informations pratiques</h2>
              <div className="space-y-5 mb-8">
                {[
                  { icon: Calendar, title: '48h à l\'avance', desc: 'Réservez au minimum 48 heures avant votre rendez-vous souhaité' },
                  { icon: Clock, title: 'Horaires d\'ouverture', desc: 'Lundi – Vendredi : 9h00 – 17h00' },
                  { icon: User, title: 'Choix de l\'ophtalmologiste', desc: 'Sélectionnez le praticien de votre choix parmi nos trois spécialistes' },
                  { icon: Phone, title: 'Contact direct', desc: '(+237) 699 955 164 | 675 853 201' },
                  { icon: Mail, title: 'Email', desc: 'cm.lacerisaie@yahoo.fr' },
                  { icon: MessageSquare, title: 'Rappel SMS', desc: 'Vous recevrez un SMS de rappel la veille de votre rendez-vous' },
                ].map((item) => {
                  const Icon = item.icon
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
                <p className="text-sm text-teal-800 font-medium mb-3">Assurances acceptées</p>
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
                  {step === 1 && 'Type & créneau'}
                  {step === 2 && 'Praticien'}
                  {step === 3 && 'Vos informations'}
                </span>
              </div>

              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                {/* Step 1 */}
                {step === 1 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Type de consultation & créneau</h3>
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-slate-700 mb-2">Type de consultation</label>
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
                      <label className="block text-sm font-medium text-slate-700 mb-2">Motif de la visite</label>
                      <select className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50">
                        {motifs.map((m) => <option key={m}>{m}</option>)}
                      </select>
                    </div>
                    <div className="mb-5">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Date souhaitée <span className="text-slate-400 font-normal">(min. 48h à l'avance)</span>
                      </label>
                      <input type="date" min={new Date(Date.now() + 2 * 86400000).toISOString().split('T')[0]}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                    </div>
                    <div className="mb-8">
                      <label className="block text-sm font-medium text-slate-700 mb-3">Heure souhaitée</label>
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
                      Continuer <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Choisissez votre ophtalmologiste</h3>
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
                      <button onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">Retour</button>
                      <button onClick={() => setStep(3)} className="btn-primary flex-1 justify-center">Continuer <ChevronRight className="w-4 h-4" /></button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <form onSubmit={handleSubmit}>
                    <h3 className="font-display text-xl font-bold text-slate-900 mb-6">Vos informations</h3>
                    <div className="space-y-4 mb-8">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Nom</label>
                          <input type="text" required placeholder="Dupont" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1.5">Prénom</label>
                          <input type="text" required placeholder="Jean" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                        <input type="email" required placeholder="jean.dupont@email.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Téléphone</label>
                        <input type="tel" required placeholder="(+237) 6XX XXX XXX" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Message (optionnel)</label>
                        <textarea rows={3} placeholder="Précisez vos symptômes, antécédents ou questions..." className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 bg-slate-50 resize-none" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1 justify-center">Retour</button>
                      <button type="submit" className="btn-primary flex-1 justify-center">Confirmer le RDV</button>
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
