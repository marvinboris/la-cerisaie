import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import { ArrowRight, CheckCircle, Zap, Users, Shield, AlertTriangle } from 'lucide-react'

const reasons = [
  { icon: '🌊', label: 'Sports aquatiques', desc: 'Natation, plongée, sports nautiques' },
  { icon: '⚔️', label: 'Sports de contact', desc: 'Arts martiaux, rugby, boxe...' },
  { icon: '✈️', label: 'Professions réglementées', desc: 'Police, armée, aviation, pompiers' },
  { icon: '🔬', label: 'Milieux à risque', desc: 'Contamination chimique ou biologique' },
  { icon: '💧', label: 'Intolérance aux lentilles', desc: 'Sécheresse oculaire, infections répétées' },
  { icon: '🌟', label: 'Qualité de vie', desc: 'Liberté au quotidien sans correction optique' },
]

const advantages = [
  { label: 'Intervention indolore', desc: 'Sous anesthésie topique (gouttes) — aucune piqûre' },
  { label: 'Ambulatoire', desc: 'Retour à domicile le jour même, aucune hospitalisation' },
  { label: 'Très rapide', desc: 'Quelques minutes par œil seulement' },
  { label: 'Récupération rapide', desc: '3h pour le LASIK, 4 jours pour le PKR (surface)' },
  { label: 'Risques très faibles', desc: 'Comparables ou inférieurs au port de lentilles de contact' },
  { label: 'Résultats durables', desc: '30+ ans de recul — 60 millions de cas traités dans le monde' },
]

const ageGuides = [
  {
    age: 'Avant 40 ans',
    icon: Zap,
    gradient: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    title: 'Correction laser idéale',
    intro: "L'âge moyen des patients opérés au laser est de 38 ans, coïncidant souvent avec le début de l'intolérance aux lentilles de contact.",
    techniques: [
      { name: 'LASIK', desc: "Remodelage sous un volet cornéen. Récupération en quelques heures. Le plus pratiqué dans le monde.", badge: 'Technique phare' },
      { name: 'PKR / LASEK', desc: "Laser de surface sans volet. Légèrement plus long à récupérer (3-5 jours) mais adapté aux cornées fines.", badge: 'Surface' },
      { name: 'SMILE', desc: "Technique sans volet, entièrement intra-cornéenne. Minimise l'impact sur la sensibilité cornéenne.", badge: 'Mini-invasif' },
    ],
  },
  {
    age: '40 – 60 ans',
    icon: Users,
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    title: 'Adaptation selon la presbytie',
    intro: "Après 40 ans, la presbytie impose une adaptation de la stratégie chirurgicale. Le praticien adapte la correction selon votre mode de vie et votre œil dominant.",
    techniques: [
      { name: 'Laser adapté', desc: "Pour les myopes : légère myopie résiduelle laissée à l'œil non-dominant pour compenser la presbytie.", badge: 'Monovision' },
      { name: 'PRELEX', desc: "Entre 56-60 ans : échange du cristallin par un implant multifocal pour une correction définitive de la presbytie. Non remboursé.", badge: 'Définitif' },
    ],
  },
  {
    age: 'Après 60 ans',
    icon: Shield,
    gradient: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    title: 'Chirurgie de la cataracte avec implant multifocal',
    intro: "La chirurgie de la cataracte avec implant multifocal devient l'option de choix. Elle corrige définitivement la vision de loin et de près tout en traitant la cataracte.",
    techniques: [
      { name: 'Implant multifocal', desc: "Corrige la vision de loin et de près simultanément. Permet souvent de ne plus porter de lunettes du tout.", badge: 'Pris en charge' },
      { name: 'Implant torique', desc: "Corrige en plus l'astigmatisme pour une vision de loin nette sans lunettes. Combinable avec une correction de la presbytie.", badge: 'Astigmatisme' },
    ],
  },
]

export default function RefractiveSurgeryPage() {
  return (
    <>
      <PageHero
        tag="Chirurgie réfractive"
        title="Vivre sans"
        titleAccent="lunettes"
        description="Les défauts visuels — myopie, hypermétropie, astigmatisme, presbytie — sont aujourd'hui corrigés par des méthodes chirurgicales sûres et éprouvées. La décision appartient toujours au patient."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Vivre sans lunettes' }]}
        cta={{ label: 'Consulter pour un bilan', to: '/rendez-vous' }}
      />

      {/* Why */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              Motivations
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-4">
              Pourquoi se faire
              <span className="block text-gradient">opérer ?</span>
            </h2>
            <p className="text-slate-500 text-lg">Six raisons principales poussent les patients vers la chirurgie réfractive :</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {reasons.map((reason) => (
              <div key={reason.label} className="text-center p-5 rounded-2xl bg-slate-50 hover:bg-teal-50 border border-transparent hover:border-teal-100 transition-all duration-200">
                <div className="text-4xl mb-3">{reason.icon}</div>
                <div className="font-semibold text-slate-900 text-xs mb-1">{reason.label}</div>
                <div className="text-slate-500 text-xs leading-tight">{reason.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age guide */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              Guide par âge
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-4">
              Quelle option
              <span className="block text-gradient">selon votre profil ?</span>
            </h2>
            <p className="text-slate-500 text-lg">
              La chirurgie réfractive s'adapte à votre âge, vos besoins et votre anatomie oculaire.
              C'est toujours <strong>le patient qui décide du bon moment</strong>, pas le chirurgien.
            </p>
          </div>

          <div className="space-y-8">
            {ageGuides.map((guide) => {
              const Icon = guide.icon
              return (
                <div key={guide.age} className={`bg-white rounded-3xl border-2 ${guide.border} overflow-hidden`}>
                  <div className="grid lg:grid-cols-5">
                    {/* Left label */}
                    <div className={`${guide.bg} p-8 lg:col-span-1 flex flex-col justify-center items-center text-center`}>
                      <div className={`w-14 h-14 bg-gradient-to-br ${guide.gradient} rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="font-display text-2xl font-bold text-slate-900">{guide.age}</div>
                      <div className="text-slate-500 text-sm mt-1">{guide.title}</div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:col-span-4">
                      <p className="text-slate-600 leading-relaxed mb-6">{guide.intro}</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {guide.techniques.map((tech) => (
                          <div key={tech.name} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-bold text-slate-900 text-sm">{tech.name}</span>
                              <span className={`text-xs bg-gradient-to-r ${guide.gradient} text-white rounded-full px-2 py-0.5 font-medium`}>{tech.badge}</span>
                            </div>
                            <p className="text-slate-500 text-xs leading-relaxed">{tech.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Safety & advantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-3xl p-8 lg:p-14 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="section-tag text-teal-200">
                  <div className="w-6 h-px bg-teal-300" />
                  Sécurité
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                  Une chirurgie sûre et éprouvée
                </h2>
                <p className="text-teal-100 leading-relaxed mb-6">
                  Les risques de la chirurgie réfractive sont <strong>scientifiquement comparables
                  ou inférieurs</strong> à ceux du port des lentilles de contact. Avec plus de
                  30 ans de recul et 60 millions d'interventions dans le monde, c'est l'une des
                  chirurgies les plus pratiquées et les mieux documentées.
                </p>
                <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <p className="text-teal-100 text-sm leading-relaxed">
                      La décision chirurgicale nécessite un bilan pré-opératoire complet pour s'assurer
                      de votre eligibilité. Certains profils (cornées trop fines, fortes amétropies)
                      peuvent orienter vers d'autres techniques.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/rendez-vous" className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                    Consulter un spécialiste <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {advantages.map((adv) => (
                  <div key={adv.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                    <CheckCircle className="w-5 h-5 text-teal-300 mb-3" />
                    <div className="font-semibold text-white text-sm mb-1">{adv.label}</div>
                    <div className="text-teal-200 text-xs leading-relaxed">{adv.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
