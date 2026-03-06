import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { ArrowRight } from 'lucide-react'

export default function VisionDefectsPage() {
  const { t, tList } = useT()
  type Defect = { name: string; color: string; bg: string; border: string; description: string; signs: string[]; corrections: string[] }
  const defects: Defect[] = tList('visionDefects.defects.items')

  return (
    <>
      <PageHero
        tag={t('visionDefects.hero.tag')}
        title={t('visionDefects.hero.title')}
        titleAccent={t('visionDefects.hero.accent')}
        description={t('visionDefects.hero.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.visionDefects') }]}
        cta={{ label: t('visionDefects.hero.cta'), to: '/rendez-vous' }}
      />

      {/* Anatomy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                {t('visionDefects.anatomy.tag')}
              </div>
              <h2 className="section-title mb-6">
                {t('visionDefects.anatomy.title')}
                <span className="block text-gradient">{t('visionDefects.anatomy.accent')}</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{t('visionDefects.anatomy.desc1')}</p>
              <p className="text-slate-500 leading-relaxed">{t('visionDefects.anatomy.desc2')}</p>
            </div>

            <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
              <div className="relative">
                <svg viewBox="0 0 300 200" className="w-full max-w-sm mx-auto">
                  <ellipse cx="150" cy="100" rx="130" ry="80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <ellipse cx="90" cy="100" rx="40" ry="50" fill="rgba(74,127,165,0.3)" stroke="rgba(74,127,165,0.6)" strokeWidth="1.5" />
                  <circle cx="155" cy="100" r="35" fill="rgba(74,127,165,0.4)" stroke="rgba(74,127,165,0.7)" strokeWidth="1.5" />
                  <circle cx="155" cy="100" r="18" fill="rgba(27,56,110,0.9)" />
                  <circle cx="163" cy="93" r="5" fill="rgba(255,255,255,0.5)" />
                  <rect x="200" y="85" width="50" height="30" rx="5" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                  <line x1="150" y1="100" x2="200" y2="100" stroke="rgba(74,127,165,0.8)" strokeWidth="2" strokeDasharray="4,2" />
                  <circle cx="200" cy="100" r="4" fill="rgba(74,127,165,1)" />
                  <text x="82" y="155" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">{t('visionDefects.anatomy.cornea')}</text>
                  <text x="155" y="155" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">{t('visionDefects.anatomy.lens')}</text>
                  <text x="222" y="155" fill="rgba(255,255,255,0.6)" fontSize="9" textAnchor="middle">{t('visionDefects.anatomy.retina')}</text>
                  <text x="200" y="96" fill="rgba(74,127,165,1)" fontSize="8" textAnchor="middle">{t('visionDefects.anatomy.focus')}</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              {t('visionDefects.defects.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title">
              {t('visionDefects.defects.title')}
              <span className="block text-gradient">{t('visionDefects.defects.accent')}</span>
            </h2>
          </div>
          <div className="space-y-6">
            {defects.map((defect) => (
              <div key={defect.name} className={`bg-white rounded-3xl border-2 ${defect.border} overflow-hidden`}>
                <div className="grid lg:grid-cols-3">
                  <div className={`${defect.bg} p-8 flex flex-col justify-center`}>
                    <div className={`inline-block px-4 py-2 rounded-2xl bg-gradient-to-r ${defect.color} text-white font-display text-2xl font-bold mb-4 w-fit`}>
                      {defect.name}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{defect.description}</p>
                  </div>
                  <div className="p-8 border-l border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">{t('visionDefects.defects.signs')}</h4>
                    <ul className="space-y-2">
                      {defect.signs.map((sign) => (
                        <li key={sign} className="flex items-start gap-2 text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-8 border-l border-slate-100">
                    <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wide">{t('visionDefects.defects.corrections')}</h4>
                    <ul className="space-y-2">
                      {defect.corrections.map((correction) => (
                        <li key={correction} className="flex items-start gap-2 text-slate-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                          {correction}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">{t('visionDefects.cta.title')}</h2>
          <p className="text-slate-500 mb-8">{t('visionDefects.cta.desc')}</p>
          <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
            {t('visionDefects.cta.cta')} <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
