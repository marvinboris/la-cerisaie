import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { ArrowRight, CheckCircle, Zap, Users, Shield, AlertTriangle } from 'lucide-react'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'

const ageIcons = [Zap, Users, Shield]
const ageGradients = ['from-teal-500 to-teal-600', 'from-blue-500 to-blue-600', 'from-violet-500 to-violet-600']
const ageBgs = ['bg-teal-50', 'bg-blue-50', 'bg-violet-50']
const ageBorders = ['border-teal-200', 'border-blue-200', 'border-violet-200']

export default function RefractiveSurgeryPage() {
  const { t, tList } = useT()
  type Reason = { icon: string; label: string; desc: string }
  type Technique = { name: string; desc: string; badge: string }
  type AgeGuide = { age: string; title: string; intro: string; techniques: Technique[] }
  type Advantage = { label: string; desc: string }

  const reasons: Reason[] = tList('refractiveSurgery.reasons.items')
  const ageGuides: AgeGuide[] = tList('refractiveSurgery.ageGuide.items')
  const advantages: Advantage[] = tList('refractiveSurgery.safety.advantages')

  return (
    <>
      <Seo title={t('seo.refractiveSurgery.title')} description={t('seo.refractiveSurgery.desc')} />
      <JsonLd data={{ '@type': 'MedicalProcedure', name: t('seo.refractiveSurgery.title'), description: t('seo.refractiveSurgery.desc') }} />
      <PageHero
        tag={t('refractiveSurgery.hero.tag')}
        title={t('refractiveSurgery.hero.title')}
        titleAccent={t('refractiveSurgery.hero.accent')}
        description={t('refractiveSurgery.hero.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.noGlasses') }]}
        cta={{ label: t('refractiveSurgery.hero.cta'), to: '/rendez-vous' }}
      />

      {/* Why */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              {t('refractiveSurgery.reasons.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-4">
              {t('refractiveSurgery.reasons.title')}
              <span className="block text-gradient">{t('refractiveSurgery.reasons.accent')}</span>
            </h2>
            <p className="text-slate-500 text-lg">{t('refractiveSurgery.reasons.desc')}</p>
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
              {t('refractiveSurgery.ageGuide.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title mb-4">
              {t('refractiveSurgery.ageGuide.title')}
              <span className="block text-gradient">{t('refractiveSurgery.ageGuide.accent')}</span>
            </h2>
            <p className="text-slate-500 text-lg" dangerouslySetInnerHTML={{ __html: t('refractiveSurgery.ageGuide.desc') }} />
          </div>

          <div className="space-y-8">
            {ageGuides.map((guide, i) => {
              const Icon = ageIcons[i]
              return (
                <div key={guide.age} className={`bg-white rounded-3xl border-2 ${ageBorders[i]} overflow-hidden`}>
                  <div className="grid lg:grid-cols-5">
                    <div className={`${ageBgs[i]} p-8 lg:col-span-1 flex flex-col justify-center items-center text-center`}>
                      <div className={`w-14 h-14 bg-gradient-to-br ${ageGradients[i]} rounded-2xl flex items-center justify-center shadow-lg mb-4`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="font-display text-2xl font-bold text-slate-900">{guide.age}</div>
                      <div className="text-slate-500 text-sm mt-1">{guide.title}</div>
                    </div>
                    <div className="p-8 lg:col-span-4">
                      <p className="text-slate-600 leading-relaxed mb-6">{guide.intro}</p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {guide.techniques.map((tech) => (
                          <div key={tech.name} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="font-bold text-slate-900 text-sm">{tech.name}</span>
                              <span className={`text-xs bg-gradient-to-r ${ageGradients[i]} text-white rounded-full px-2 py-0.5 font-medium`}>{tech.badge}</span>
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
                  {t('refractiveSurgery.safety.tag')}
                </div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">{t('refractiveSurgery.safety.title')}</h2>
                <p className="text-teal-100 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t('refractiveSurgery.safety.desc') }} />
                <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <p className="text-teal-100 text-sm leading-relaxed">{t('refractiveSurgery.safety.warning')}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/rendez-vous" className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                    {t('refractiveSurgery.safety.cta')} <ArrowRight className="w-4 h-4" />
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
