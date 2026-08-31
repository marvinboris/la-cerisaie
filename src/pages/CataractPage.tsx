import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { CheckCircle, AlertCircle, Clock, ArrowRight, Microscope, Scan, Eye, Activity } from 'lucide-react'
import Seo from '../components/Seo'

const examIcons = [Microscope, Scan, Eye, Activity, Eye, Scan]

export default function CataractPage() {
  const { t, tList } = useT()
  const symptoms: string[] = tList('cataract.symptoms.items')
  const riskFactors: { label: string; desc: string }[] = tList('cataract.riskFactors.items')
  const preOpExams: { title: string; desc: string }[] = tList('cataract.exams.items')
  const whenItems: { icon: string; title: string; desc: string }[] = tList('cataract.surgery.when.items')
  const implants: { name: string; desc: string; badge: string }[] = tList('cataract.surgery.implants.items')

  return (
    <>
      <Seo title={t('seo.cataract.title')} description={t('seo.cataract.desc')} />
      <PageHero
        tag={t('cataract.hero.tag')}
        title={t('cataract.hero.title')}
        titleAccent={t('cataract.hero.accent')}
        description={t('cataract.hero.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.cataract') }]}
        cta={{ label: t('cataract.hero.cta'), to: '/rendez-vous' }}
      />

      {/* Definition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                {t('cataract.definition.tag')}
              </div>
              <h2 className="section-title mb-6">
                {t('cataract.definition.title')}
                <span className="block text-gradient">{t('cataract.definition.accent')}</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">{t('cataract.definition.p1')}</p>
              <p className="text-slate-500 leading-relaxed mb-6">{t('cataract.definition.p2')}</p>
              <p className="text-slate-500 leading-relaxed">{t('cataract.definition.p3')}</p>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl overflow-hidden h-56">
                <img loading="lazy" src="/images/cataract.png" alt="Cataracte" className="w-full h-full object-cover" />
              </div>
              <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
                <div className="relative">
                  <h3 className="font-display text-xl font-bold mb-8 text-center">{t('cataract.definition.diagram')}</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 relative">
                        <div className="absolute inset-0 rounded-full bg-teal-400/20 border-2 border-teal-400/50" />
                        <div className="absolute inset-4 rounded-full bg-teal-500/60" />
                        <div className="absolute inset-8 rounded-full bg-teal-900/90" />
                        <div className="absolute top-5 left-5 w-3 h-3 rounded-full bg-white/60" />
                      </div>
                      <p className="text-sm font-semibold text-teal-300">{t('cataract.definition.healthy')}</p>
                      <p className="text-xs text-slate-400 mt-1">{t('cataract.definition.healthySub')}</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-3 relative">
                        <div className="absolute inset-0 rounded-full bg-amber-400/20 border-2 border-amber-400/50" />
                        <div className="absolute inset-4 rounded-full bg-amber-700/60" />
                        <div className="absolute inset-8 rounded-full bg-amber-900/90" />
                        <div className="absolute top-5 left-5 w-3 h-3 rounded-full bg-white/30" />
                        <div className="absolute inset-4 rounded-full" style={{ background: 'radial-gradient(circle at 60% 40%, rgba(255,200,50,0.4), transparent 50%), radial-gradient(circle at 30% 70%, rgba(255,180,30,0.3), transparent 40%)' }} />
                      </div>
                      <p className="text-sm font-semibold text-amber-300">{t('cataract.definition.cataract')}</p>
                      <p className="text-xs text-slate-400 mt-1">{t('cataract.definition.cataractSub')}</p>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                    {(['stat1', 'stat2', 'stat3'] as const).map((k) => (
                      <div key={k}>
                        <div className="text-2xl font-bold text-white">{t(`cataract.definition.${k}.n`)}</div>
                        <div className="text-teal-300 text-xs">{t(`cataract.definition.${k}.l`)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms & Risk Factors */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                {t('cataract.symptoms.tag')}
              </div>
              <h2 className="section-title mb-8">
                {t('cataract.symptoms.title')}
                <span className="block text-gradient">{t('cataract.symptoms.accent')}</span>
              </h2>
              <ul className="space-y-4">
                {symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                    </div>
                    <span className="text-slate-600 leading-relaxed text-sm">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                {t('cataract.riskFactors.tag')}
              </div>
              <h2 className="section-title mb-8">
                {t('cataract.riskFactors.title')}
                <span className="block text-gradient">{t('cataract.riskFactors.accent')}</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {riskFactors.map((factor) => (
                  <div key={factor.label} className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-teal-200 transition-colors hover:shadow-md">
                    <div className="font-semibold text-slate-900 mb-1">{factor.label}</div>
                    <div className="text-slate-500 text-sm">{factor.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surgery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              {t('cataract.surgery.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title">
              {t('cataract.surgery.title')}
              <span className="block text-gradient">{t('cataract.surgery.accent')}</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>{t('cataract.surgery.desc1')}</p>
              <p>{t('cataract.surgery.desc2')}</p>
            </div>
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-900">{t('cataract.surgery.when.title')}</h3>
              {whenItems.map((item) => {
                const icons: Record<string, React.ElementType> = { AlertCircle, Clock, CheckCircle }
                const Icon = icons[item.icon] ?? CheckCircle
                return (
                  <div key={item.title} className="flex gap-4 bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">{item.title}</div>
                      <div className="text-slate-500 text-sm">{item.desc}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-slate-900 text-center mb-8">{t('cataract.surgery.implants.title')}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {implants.map((implant) => (
                <div key={implant.name} className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: '20px 20px' }} />
                  <div className="relative">
                    <span className="inline-block bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">{implant.badge}</span>
                    <h4 className="font-display text-2xl font-bold mb-3">{implant.name}</h4>
                    <p className="text-teal-100 text-sm leading-relaxed">{implant.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pre-op exams */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              {t('cataract.exams.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title">
              {t('cataract.exams.title')}
              <span className="block text-gradient">{t('cataract.exams.accent')}</span>
            </h2>
            <p className="text-slate-500 mt-4">{t('cataract.exams.desc')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {preOpExams.map((exam, i) => {
              const Icon = examIcons[i]
              return (
                <div key={exam.title} className="bg-white rounded-3xl p-6 border border-slate-100 hover:border-teal-200 transition-colors hover:shadow-lg">
                  <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-sm">{exam.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{exam.desc}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center">
            <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
              {t('cataract.exams.cta')} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
