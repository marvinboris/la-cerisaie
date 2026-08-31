import { Link, Navigate, useParams } from 'react-router-dom'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { findBySlug } from '../data/pathologies'
import { AlertCircle, CheckCircle, Info, Stethoscope, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

export default function PathologyPage() {
  const { slug = '' } = useParams()
  const { t, tList } = useT()
  const pathology = findBySlug(slug)

  if (!pathology) return <Navigate to="/404" replace />

  const key = `pathologies.${pathology.id}`
  const symptoms: string[] = tList(`${key}.symptoms`)
  const causes: string[] = tList(`${key}.causes`)
  const exams: string[] = tList(`${key}.exams`)
  const treatments: { title: string; desc: string }[] = tList(`${key}.treatments`)
  const faq: { q: string; a: string }[] = tList(`${key}.faq`)

  return (
    <>
      <Seo
        title={`${t(`${key}.name`)} — ${t('seo.pathologySuffix')}`}
        description={t(`${key}.short`)}
      />
      <PageHero
        tag={t(`${key}.tag`)}
        title={t(`${key}.title`)}
        titleAccent={t(`${key}.accent`)}
        description={t(`${key}.heroDesc`)}
        breadcrumbs={[
          { label: t('nav.home'), to: '/' },
          { label: t('nav.pathologies'), to: '/pathologies' },
          { label: t(`${key}.name`) },
        ]}
        cta={{ label: t('common.bookAppointment'), to: '/rendez-vous' }}
      />

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-slate-600 leading-relaxed">{t(`${key}.intro`)}</p>
        </div>
      </section>

      {/* Symptômes & facteurs de risque */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-orange-600" />
              </div>
              <h2 className="font-display text-xl font-bold text-slate-900">{t(`${key}.symptomsTitle`)}</h2>
            </div>
            <ul className="space-y-3">
              {symptoms.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                <Info className="w-5 h-5 text-teal-600" />
              </div>
              <h2 className="font-display text-xl font-bold text-slate-900">{t(`${key}.causesTitle`)}</h2>
            </div>
            <ul className="space-y-3">
              {causes.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Diagnostic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-tag">
              <div className="w-8 h-px bg-teal-500" />
              {t(`${key}.diagnosisTitle`)}
            </div>
            <p className="text-slate-600 leading-relaxed">{t(`${key}.diagnosis`)}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {exams.map((exam) => (
              <div key={exam} className="flex gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-100 text-sm text-slate-700">
                <Stethoscope className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                {exam}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traitements */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10">{t(`${key}.treatmentsTitle`)}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {treatments.map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm card-hover">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-10">{t(`${key}.faqTitle`)}</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <details key={item.q} className="group bg-slate-50 rounded-2xl border border-slate-100 p-6">
                <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center gap-4">
                  {item.q}
                  <span className="text-teal-600 text-xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>

          <p className="text-xs text-slate-400 leading-relaxed mt-10 border-t border-slate-100 pt-6">
            {t('pathologyPage.disclaimer')}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">{t('pathologyPage.ctaTitle')}</h2>
            <p className="text-slate-500">{t('pathologyPage.ctaDesc')}</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/pathologies" className="btn-outline">{t('pathologyPage.backToList')}</Link>
            <Link to="/rendez-vous" className="btn-primary">
              {t('common.bookAppointment')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
