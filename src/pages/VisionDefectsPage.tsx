import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import { ArrowRight, Eye, ZoomIn, ZoomOut, RotateCcw, Clock, CheckCircle } from 'lucide-react'

const defects = [
  {
    icon: ZoomOut,
    name: 'Myopie',
    subtitle: 'Vision de loin floue',
    description: "Le globe oculaire est trop long : la lumière se focalise en avant de la rétine plutôt que dessus. Le myope voit nettement de près mais floue de loin. Elle touche environ 30 % de la population et est souvent héréditaire.",
    signs: ["Plisse les yeux pour voir de loin", "Vision nette pour lire ou utiliser un téléphone", "Maux de tête après un effort visuel de loin", "Apparaît souvent dans l'enfance, évolue à l'adolescence"],
    corrections: ["Lunettes à verres divergents (négatifs)", "Lentilles de contact", "Chirurgie laser (LASIK, PKR)", "Implant phaque si myopie forte"],
    color: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    border: 'border-teal-200',
  },
  {
    icon: ZoomIn,
    name: 'Hypermétropie',
    subtitle: 'Vision de près difficile',
    description: "L'œil est trop court : la lumière se focalise en arrière de la rétine. L'hypermétrope compense par un effort d'accommodation permanent qui provoque rapidement fatigue oculaire et maux de tête.",
    signs: ["Fatigue et maux de tête après la lecture", "Vision de près floue, surtout en fin de journée", "Parfois vue de loin normale (compensation)", "Peut provoquer un strabisme chez l'enfant"],
    corrections: ["Lunettes à verres convergents (positifs)", "Lentilles de contact", "Chirurgie laser", "PRELEX (échange de cristallin) après 55 ans"],
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    border: 'border-blue-200',
  },
  {
    icon: RotateCcw,
    name: 'Astigmatisme',
    subtitle: 'Vision déformée sur certains axes',
    description: "La cornée n'est pas parfaitement sphérique mais légèrement ovale. La lumière se focalise selon plusieurs axes différents, provoquant une vision floue et déformée qui peut confondre certaines lettres ou chiffres.",
    signs: ["Vision floue à toutes les distances", "Confusion entre lettres similaires (H/N, O/Q...)", "Fatigue visuelle et maux de tête fréquents", "Souvent associé à la myopie ou l'hypermétropie"],
    corrections: ["Lunettes à verres cylindriques (toriques)", "Lentilles toriques souples ou rigides", "Chirurgie laser avec correction de l'axe", "Implant torique lors de la chirurgie de la cataracte"],
    color: 'from-violet-500 to-violet-600',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
    border: 'border-violet-200',
  },
  {
    icon: Clock,
    name: 'Presbytie',
    subtitle: 'Perte de la vision de près après 40 ans',
    description: "À partir de 40 ans, le cristallin perd progressivement son élasticité et sa capacité à s'accommoder pour voir de près. C'est un phénomène physiologique normal qui touche tout le monde sans exception.",
    signs: ["Besoin d'éloigner les documents pour lire", "Vision de près floue le soir ou en lumière faible", "Maux de tête après la lecture", "Apparaît vers 40-45 ans, s'aggrave jusqu'à 60 ans"],
    corrections: ["Lunettes progressives ou bifocales", "Lentilles multifocales ou monovision", "PRELEX ou implants multifocaux (correction définitive)", "Laser adapté pour les myopes"],
    color: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    border: 'border-orange-200',
  },
]

export default function VisionDefectsPage() {
  return (
    <>
      <PageHero
        tag="Réfraction oculaire"
        title="Les défauts"
        titleAccent="de la vision"
        description="Myopie, hypermétropie, astigmatisme, presbytie — les défauts réfractifs sont très répandus et se corrigent aujourd'hui par des méthodes optiques ou chirurgicales sûres et efficaces."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Défauts de la vision' }]}
        cta={{ label: 'Consulter pour un bilan visuel', to: '/rendez-vous' }}
      />

      {/* Eye anatomy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                Fonctionnement de l'œil
              </div>
              <h2 className="section-title mb-6">
                L'œil : une
                <span className="block text-gradient">caméra de précision</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                L'œil humain fonctionne comme un appareil photo : la <strong>cornée</strong> fait office d'objectif,
                l'<strong>iris</strong> de diaphragme et le <strong>cristallin</strong> de lentille focalisante.
                La vision normale permet de voir nettement à partir de 2 mètres au repos.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                Pour la vision de près, le cristallin se deforme (accommodation) pour focaliser l'image
                sur la rétine. Lorsque la forme de l'œil ou de la cornée est imparfaite, l'image
                ne se forme pas exactement sur la rétine : c'est un défaut réfractif.
              </p>
              <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
                <p className="text-teal-800 text-sm leading-relaxed">
                  <strong>Bonne nouvelle :</strong> les défauts réfractifs sont aujourd'hui corrigés
                  par des méthodes chirurgicales <em>simples, sûres et efficaces</em>, avec plus de
                  30 ans de recul et 60 millions de cas traités dans le monde.
                </p>
              </div>
            </div>

            {/* Anatomy diagram */}
            <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-3xl p-10 flex justify-center">
              <div className="relative w-72 h-72">
                <svg viewBox="0 0 290 290" className="w-full h-full">
                  <circle cx="145" cy="145" r="125" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                  <ellipse cx="38" cy="145" rx="32" ry="58" fill="rgba(94,234,212,0.25)" stroke="rgba(94,234,212,0.7)" strokeWidth="1.5" />
                  <circle cx="145" cy="145" r="55" fill="rgba(13,148,136,0.55)" />
                  <circle cx="145" cy="145" r="28" fill="rgba(2,44,42,0.95)" />
                  <circle cx="158" cy="132" r="9" fill="rgba(255,255,255,0.42)" />
                  <ellipse cx="107" cy="145" rx="18" ry="34" fill="rgba(165,243,252,0.2)" stroke="rgba(165,243,252,0.5)" strokeWidth="1.5" />
                  <path d="M 258 90 Q 282 145 258 200" stroke="rgba(249,115,22,0.7)" strokeWidth="10" fill="none" strokeLinecap="round" />
                  <line x1="270" y1="145" x2="290" y2="145" stroke="rgba(249,115,22,0.85)" strokeWidth="7" strokeLinecap="round" />
                  <text x="14" y="82" fill="rgba(94,234,212,0.95)" fontSize="10" fontWeight="700">Cornée</text>
                  <text x="84" y="94" fill="rgba(165,243,252,0.95)" fontSize="10" fontWeight="700">Cristallin</text>
                  <text x="118" y="220" fill="rgba(255,255,255,0.75)" fontSize="10" fontWeight="700">Iris & Pupille</text>
                  <text x="228" y="76" fill="rgba(249,115,22,0.95)" fontSize="10" fontWeight="700">Rétine</text>
                  <text x="268" y="166" fill="rgba(249,115,22,0.95)" fontSize="10" fontWeight="700">Nerf</text>
                  <text x="263" y="179" fill="rgba(249,115,22,0.95)" fontSize="10" fontWeight="700">optique</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defects detail */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              Les 4 défauts réfractifs
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title">
              Comprendre chaque
              <span className="block text-gradient">trouble visuel</span>
            </h2>
          </div>

          <div className="space-y-8">
            {defects.map((defect, i) => {
              const Icon = defect.icon
              return (
                <div key={defect.name} className={`bg-white rounded-3xl border-2 ${defect.border} overflow-hidden`}>
                  <div className="grid lg:grid-cols-3 gap-0">
                    {/* Left — title */}
                    <div className={`${defect.bg} p-8 flex flex-col justify-center`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                          <Icon className={`w-6 h-6 ${defect.iconColor}`} strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">N°{i + 1}</span>
                      </div>
                      <h3 className="font-display text-3xl font-bold text-slate-900 mb-2">{defect.name}</h3>
                      <div className={`text-sm font-semibold bg-gradient-to-r ${defect.color} bg-clip-text text-transparent mb-4`}>{defect.subtitle}</div>
                      <p className="text-slate-600 text-sm leading-relaxed">{defect.description}</p>
                    </div>

                    {/* Middle — signs */}
                    <div className="p-8 border-l border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-slate-400" />
                        Signes à reconnaître
                      </h4>
                      <ul className="space-y-3">
                        {defect.signs.map((sign) => (
                          <li key={sign} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm leading-relaxed">{sign}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right — corrections */}
                    <div className="p-8 border-l border-slate-100 bg-slate-50">
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500" />
                        Options de correction
                      </h4>
                      <ul className="space-y-3">
                        {defect.corrections.map((correction) => (
                          <li key={correction} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 text-sm leading-relaxed">{correction}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
            Faites évaluer votre vision
          </h2>
          <p className="text-slate-500 mb-8 text-lg">
            Un bilan visuel complet chez un ophtalmologiste permet de diagnostiquer précisément
            vos défauts et de vous proposer la correction la plus adaptée à votre mode de vie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
              Prendre rendez-vous <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/vivre-sans-lunettes" className="btn-outline text-base px-8 py-4">
              Vivre sans lunettes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
