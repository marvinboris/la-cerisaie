import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import { CheckCircle, Award, Users, Heart, Stethoscope, GraduationCap, ArrowRight } from 'lucide-react'

const values = [
  { icon: Award, title: 'Excellence médicale', desc: 'Des soins de haute qualité dispensés par des spécialistes reconnus au Cameroun, formés dans les meilleures institutions.' },
  { icon: Heart, title: 'Écoute & bienveillance', desc: 'Chaque patient est unique. Nous prenons le temps de comprendre votre situation pour vous proposer la meilleure prise en charge.' },
  { icon: Users, title: 'Approche pluridisciplinaire', desc: "Une équipe complémentaire d'ophtalmologistes, d'orthoptiste, de médecin généraliste et de personnel soignant spécialisé." },
]

const ophthalmologists = [
  { name: 'Dr. Théodat Manga', role: 'Ophtalmologiste', speciality: 'Chirurgie de la cataracte, glaucome & segment antérieur', initials: 'TM', color: 'from-teal-400 to-teal-600', badge: 'Chef de cabinet', description: "Chef de cabinet de La Cerisaie Eye Clinic, le Dr. Théodat Manga est un ophtalmologiste reconnu au Cameroun. Sa pratique se concentre sur la chirurgie de la cataracte et la prise en charge du glaucome.", photo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_9357-scaled.jpg' },
  { name: 'Dr. Georges Mouen', role: 'Ophtalmologiste', speciality: 'Rétine, segment postérieur & urgences oculaires', initials: 'GM', color: 'from-blue-400 to-blue-600', badge: null, description: "Spécialiste du segment postérieur, le Dr. Georges Mouen assure la prise en charge des pathologies rétiniennes, du glaucome et des urgences ophtalmologiques.", photo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_9152-scaled.jpg' },
  { name: 'Dr. Mbia Zobo', role: 'Ophtalmologiste', speciality: 'Chirurgie réfractive, cornée & kératocône', initials: 'MZ', color: 'from-violet-400 to-violet-600', badge: null, description: "Spécialisé dans la chirurgie réfractive et les pathologies cornéennes, le Dr. Mbia Zobo prend en charge le kératocône et les bilans pré-opératoires pour la correction de la vue.", photo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_9067-scaled.jpg' },
]

const otherStaff = [
  { name: 'Mr. Marcel Epesse', role: 'Orthoptiste', speciality: 'Rééducation visuelle, bilan orthoptique & amblyopie', initials: 'ME', color: 'from-emerald-400 to-emerald-600', photo: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_9274-scaled.jpg' },
  { name: 'Dr. Maxime Manga', role: 'Médecin généraliste', speciality: 'Prise en charge globale & suivi des patients', initials: 'MM', color: 'from-orange-400 to-orange-600', photo: null },
  { name: 'Mme Angele Nyamsi', role: 'Infirmière spécialisée (ISO)', speciality: 'Soins infirmiers spécialisés en ophtalmologie', initials: 'AN', color: 'from-pink-400 to-pink-600', photo: null },
]

const insurers = ['AXA', 'Wallis', 'Saham Assurance', 'GMC']

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="Le cabinet"
        title="À propos de"
        titleAccent="La Cerisaie"
        description="Cabinet médical groupé d'ophtalmologistes reconnus, La Cerisaie Eye Clinic concentre ses activités sur les consultations, les examens complémentaires et la chirurgie oculaire à Douala depuis 2003."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'À propos' }]}
      />

      {/* History & mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                Notre histoire
              </div>
              <h2 className="section-title mb-6">
                Un cabinet de référence
                <span className="block text-gradient">depuis 2003</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Fondée en 2003, La Cerisaie Eye Clinic est devenue l'un des cabinets d'ophtalmologie
                de référence à Douala. Au fil des années, notre équipe a grandi pour répondre
                à la demande croissante en soins oculaires de qualité.
              </p>
              <p className="text-slate-500 leading-relaxed mb-8">
                Notre cabinet regroupe des ophtalmologistes à l'expérience éprouvée qui constituent
                votre premier recours pour tout problème visuel. Nous disposons d'équipements de
                diagnostic modernes pour une prise en charge complète : consultations, examens
                complémentaires et orientation vers la chirurgie oculaire dans nos centres partenaires.
              </p>
              <ul className="space-y-3">
                {[
                  'Cabinet médical groupé pluridisciplinaire',
                  'Équipements diagnostiques de pointe (OCT, biométrie, topographie...)',
                  'Réseau de centres chirurgicaux partenaires',
                  'Prise en charge des principales assurances camerounaises',
                  'Prise de rendez-vous en ligne disponible 24h/24',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats card */}
            <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
              <div className="relative">
                <div className="text-center mb-10">
                  <div className="text-6xl font-bold font-display mb-2">2003</div>
                  <div className="text-teal-300 text-sm font-medium tracking-wider uppercase">Fondation du cabinet</div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { n: '20+', l: "Années d'expérience" },
                    { n: '11', l: 'Professionnels' },
                    { n: '3', l: 'Ophtalmologistes' },
                    { n: '4', l: 'Assurances partenaires' },
                  ].map((s) => (
                    <div key={s.n} className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                      <div className="text-3xl font-bold text-white">{s.n}</div>
                      <div className="text-teal-200 text-xs mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              Nos valeurs
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title">Ce qui nous
              <span className="block text-gradient">guide</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val) => {
              const Icon = val.icon
              return (
                <div key={val.title} className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-teal-200 transition-colors hover:shadow-lg">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-teal-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ophthalmologists */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              Notre équipe
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title">Des experts à
              <span className="block text-gradient">votre service</span>
            </h2>
          </div>

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-8">Ophtalmologistes</h3>
          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {ophthalmologists.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent`} />
                  {member.badge && (
                    <span className="absolute top-3 right-3 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
                      {member.badge}
                    </span>
                  )}
                </div>
                <div className={`h-1 bg-gradient-to-r ${member.color}`} />
                <div className="p-8 text-center">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center gap-1.5 mb-4">
                    <Stethoscope className="w-3.5 h-3.5 text-teal-500" />
                    <span className="text-teal-600 font-medium text-sm">{member.role}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{member.description}</p>
                  <div className="bg-slate-50 rounded-xl px-4 py-2 text-xs text-slate-600 font-medium">{member.speciality}</div>
                  <div className="mt-5 pt-5 border-t border-slate-100 flex justify-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <GraduationCap className="w-3.5 h-3.5" />
                      Spécialiste agréé
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Award className="w-3.5 h-3.5" />
                      Expert reconnu
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-8">Personnel médical & soignant</h3>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {otherStaff.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl p-6 border border-slate-100 flex items-center gap-4 hover:border-teal-200 transition-colors">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-14 h-14 rounded-xl object-cover object-top flex-shrink-0 shadow-md" />
                ) : (
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold font-display shadow-md flex-shrink-0 text-sm`}>
                    {member.initials}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{member.name}</div>
                  <div className="text-teal-600 text-xs font-medium">{member.role}</div>
                  <div className="text-slate-500 text-xs mt-1 leading-snug">{member.speciality}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Admin staff */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src="https://lacerisaie-eyeclinic.com/wp-content/uploads/2021/12/1-2-1024x576.jpg"
                  alt="Équipe La Cerisaie Eye Clinic"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/50 hidden lg:block" />
              </div>
              <div className="p-8 flex flex-col justify-center text-center lg:text-left">
                <h4 className="font-display text-xl font-bold text-slate-900 mb-2">Équipe administrative & soignante</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Une équipe administrative et infirmière dévouée assure votre accueil,
                  la gestion de vos dossiers et le bon déroulement de chaque consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-shrink-0 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">Assurances acceptées</h3>
              <p className="text-slate-500 text-sm">Nous prenons en charge les principales mutuelles</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {insurers.map((ins) => (
                <div key={ins} className="bg-white border border-slate-200 rounded-full px-6 py-3 font-bold text-slate-700 text-sm shadow-sm hover:border-teal-300 transition-colors">
                  {ins}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">Venez nous rencontrer</h2>
          <p className="text-slate-500 mb-8">
            Bonapriso, Avenue du Général de Gaulle, Douala — Lun–Ven 9h–17h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
              Prendre rendez-vous <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">Nous contacter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
