import { Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import { CheckCircle, AlertCircle, Clock, ArrowRight, Microscope, Scan, Eye, Activity } from 'lucide-react'

const symptoms = [
  "Vision floue de loin (panneaux de signalisation, télévision) ou de près (lecture)",
  "Éblouissements et halos autour des lumières, surtout la nuit",
  "Fatigue oculaire plus rapide que d'habitude",
  "Perception des couleurs altérée, jaunissement de la vision",
  "Vision double persistante dans un œil",
  "Changements fréquents de la correction optique",
]

const riskFactors = [
  { label: 'Âge', desc: 'Facteur principal — après 60 ans' },
  { label: 'Diabète', desc: 'Accélère la formation de la cataracte' },
  { label: 'Corticoïdes', desc: 'Traitement prolongé aux stéroïdes' },
  { label: 'Myopie forte', desc: 'Prédisposition génétique' },
  { label: 'Traumatisme', desc: 'Choc ou blessure à l\'œil' },
  { label: 'UV', desc: 'Exposition prolongée au soleil sans protection' },
]

const preOpExams = [
  { icon: Microscope, title: 'Biométrie par ultrasons (mode A)', desc: "Mesure précise de l'œil pour vérifier son état en arrière de la cataracte et calculer les mesures de l'implant artificiel à poser." },
  { icon: Scan, title: 'Biométrie optique', desc: "Confirmation des calculs d'implant par mesure optique de haute précision, notamment pour les patients ayant subi une chirurgie réfractive antérieure." },
  { icon: Eye, title: 'Topographie cornéenne', desc: "Cartographie de la surface de la cornée pour évaluer un éventuel traitement de l'astigmatisme lors de l'intervention." },
  { icon: Activity, title: 'Microscopie spéculaire', desc: "Évaluation de la fragilité et de la densité des cellules de la cornée, qui renseigne sur le risque opératoire et la récupération post-opératoire." },
  { icon: Eye, title: 'Champ visuel', desc: "Évaluation de la fonction du nerf optique pour détecter une pathologie associée comme le glaucome, qui nécessiterait une prise en charge spécifique." },
  { icon: Scan, title: 'OCT & Rétinophotographie', desc: "Examen détaillé de la rétine et du nerf optique pour s'assurer qu'aucune pathologie associée ne compromettrait le résultat de l'intervention." },
]

export default function CataractPage() {
  return (
    <>
      <PageHero
        tag="Pathologie oculaire"
        title="La cataracte :"
        titleAccent="tout comprendre"
        description="La cataracte est l'opacification du cristallin, la lentille naturelle de l'œil située en arrière de la pupille et de l'iris. C'est la première cause de cécité réversible dans le monde, mais elle se traite très efficacement par chirurgie."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'La cataracte' }]}
        cta={{ label: 'Prendre rendez-vous', to: '/rendez-vous' }}
      />

      {/* Qu'est-ce que c'est */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                Définition
              </div>
              <h2 className="section-title mb-6">
                Qu'est-ce que
                <span className="block text-gradient">la cataracte ?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Le cristallin est normalement transparent et joue le rôle d'une lentille focalisante.
                Avec l'âge ou sous l'effet de certains facteurs, il peut progressivement s'opacifier :
                c'est la cataracte.
              </p>
              <p className="text-slate-500 leading-relaxed mb-6">
                Cette opacification provoque une baisse progressive de la vision, comme si l'on regardait
                au travers d'une vitre embuée. La vision des contrastes, des couleurs et la sensibilité
                aux éblouissements sont souvent affectées avant même la baisse d'acuité visuelle.
              </p>
              <p className="text-slate-500 leading-relaxed">
                La cataracte touche principalement les personnes de plus de 60 ans, mais peut apparaître
                plus tôt sous l'influence de facteurs de risque spécifiques. La chirurgie est le seul
                traitement efficace et définitif.
              </p>
            </div>

            {/* Visual illustration */}
            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden h-56">
                <img
                  src="https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/03/Cataracte-clinic-eye-cerisaie.png"
                  alt="Cataracte - La Cerisaie Eye Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
            <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
              <div className="relative">
                <h3 className="font-display text-xl font-bold mb-8 text-center">Cristallin normal vs. cataracte</h3>
                <div className="grid grid-cols-2 gap-6">
                  {/* Normal eye */}
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 relative">
                      <div className="absolute inset-0 rounded-full bg-teal-400/20 border-2 border-teal-400/50" />
                      <div className="absolute inset-4 rounded-full bg-teal-500/60" />
                      <div className="absolute inset-8 rounded-full bg-teal-900/90" />
                      <div className="absolute top-5 left-5 w-3 h-3 rounded-full bg-white/60" />
                    </div>
                    <p className="text-sm font-semibold text-teal-300">Cristallin sain</p>
                    <p className="text-xs text-slate-400 mt-1">Transparent, vision nette</p>
                  </div>
                  {/* Cataract eye */}
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-3 relative">
                      <div className="absolute inset-0 rounded-full bg-amber-400/20 border-2 border-amber-400/50" />
                      <div className="absolute inset-4 rounded-full bg-amber-700/60" />
                      <div className="absolute inset-8 rounded-full bg-amber-900/90" />
                      <div className="absolute top-5 left-5 w-3 h-3 rounded-full bg-white/30" />
                      {/* Opacities */}
                      <div className="absolute inset-4 rounded-full" style={{ background: 'radial-gradient(circle at 60% 40%, rgba(255,200,50,0.4), transparent 50%), radial-gradient(circle at 30% 70%, rgba(255,180,30,0.3), transparent 40%)' }} />
                    </div>
                    <p className="text-sm font-semibold text-amber-300">Cataracte</p>
                    <p className="text-xs text-slate-400 mt-1">Cristallin opacifié, vision floue</p>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">60+</div>
                    <div className="text-teal-300 text-xs">Âge habituel</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">~70</div>
                    <div className="text-teal-300 text-xs">Âge moyen d'opération</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">&lt;80</div>
                    <div className="text-teal-300 text-xs">Recommandé d'opérer</div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Symptoms */}
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                Signes d'alerte
              </div>
              <h2 className="section-title mb-8">
                Reconnaître les
                <span className="block text-gradient">symptômes</span>
              </h2>
              <ul className="space-y-4">
                {symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                    <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-sm leading-relaxed">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risk factors */}
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                Facteurs de risque
              </div>
              <h2 className="section-title mb-8">
                Qui est
                <span className="block text-gradient">concerné ?</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {riskFactors.map((factor) => (
                  <div key={factor.label} className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-teal-200 transition-colors">
                    <div className="font-semibold text-slate-900 mb-1">{factor.label}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{factor.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
                <p className="text-amber-800 text-sm leading-relaxed">
                  <strong>Important :</strong> Si vous ressentez l'un de ces symptômes, consultez
                  rapidement un ophtalmologiste. Un diagnostic précoce permet une meilleure prise en charge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When to operate */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-tag justify-center">
            <div className="w-8 h-px bg-teal-500" />
            Décision opératoire
            <div className="w-8 h-px bg-teal-500" />
          </div>
          <h2 className="section-title mb-6">
            Quand se faire
            <span className="block text-gradient">opérer ?</span>
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            La plupart des chirurgies de la cataracte ont lieu autour de 70 ans.
            Il est recommandé d'opérer avant 80 ans, car l'intervention devient plus complexe au-delà.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Clock, title: 'Décision du patient', desc: "C'est vous qui décidez du moment opératoire selon votre gêne fonctionnelle au quotidien, pas le chirurgien.", color: 'bg-teal-50 text-teal-600' },
              { icon: CheckCircle, title: 'Gêne visuelle', desc: "L'opération est indiquée quand la cataracte perturbe suffisamment vos activités : conduite, lecture, travail.", color: 'bg-blue-50 text-blue-600' },
              { icon: AlertCircle, title: 'Cas urgents', desc: "Le chirurgien peut recommander l'intervention si la cataracte empêche de traiter une autre pathologie oculaire associée.", color: 'bg-amber-50 text-amber-600' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 text-left">
                  <div className={`w-12 h-12 ${item.color} rounded-2xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Treatment */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              Traitement
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-6">
              La chirurgie :
              <span className="block text-gradient">seul traitement efficace</span>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              La chirurgie de la cataracte consiste à remplacer le cristallin opacifié par un implant
              intraoculaire artificiel (cristallin artificiel), pouvant également corriger les défauts réfractifs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-14">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-6">L'intervention en pratique</h3>
              <div className="space-y-4">
                {[
                  'Réalisée sous anesthésie locale (gouttes)',
                  'Ambulatoire — retour à domicile le jour même',
                  'Durée de 15 à 30 minutes par œil',
                  "L'implant peut corriger la myopie, l'hypermétropie et l'astigmatisme",
                  'Récupération visuelle dans les jours suivants',
                  "L'opération de l'autre œil si nécessaire quelques semaines après",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-300 flex-shrink-0" />
                    <span className="text-teal-100 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl border border-slate-100 p-8">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-6">Les implants intraoculaires</h3>
              <div className="space-y-4">
                {[
                  { type: 'Implant monofocal', desc: "Corrige la vision de loin. Le patient conserve généralement des lunettes pour la lecture.", badge: 'Standard' },
                  { type: 'Implant torique', desc: "Corrige en plus l'astigmatisme pour une vision nette de loin sans lunettes.", badge: 'Astigmatisme' },
                  { type: 'Implant multifocal', desc: "Corrige à la fois la vision de loin et de près. Permet souvent de se passer totalement de lunettes.", badge: 'Premium' },
                ].map((implant) => (
                  <div key={implant.type} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-slate-900 text-sm">{implant.type}</span>
                        <span className="text-xs bg-teal-100 text-teal-700 rounded-full px-2 py-0.5 font-medium">{implant.badge}</span>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed">{implant.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pre-op exams */}
          <div>
            <h3 className="font-display text-2xl font-bold text-slate-900 text-center mb-10">
              Le bilan pré-opératoire à La Cerisaie
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {preOpExams.map((exam) => {
                const Icon = exam.icon
                return (
                  <div key={exam.title} className="bg-white rounded-3xl p-6 border border-slate-100 hover:border-teal-200 transition-colors hover:shadow-md">
                    <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-teal-600" strokeWidth={1.5} />
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">{exam.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{exam.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">
            Consultez un spécialiste
          </h2>
          <p className="text-slate-500 mb-8">
            Si vous présentez des signes de cataracte, prenez rendez-vous avec l'un de nos ophtalmologistes pour un diagnostic complet et personnalisé.
          </p>
          <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
            Prendre rendez-vous <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
