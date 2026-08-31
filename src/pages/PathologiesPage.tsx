import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { pathologies } from '../data/pathologies'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

export default function PathologiesPage() {
  const { t } = useT()

  return (
    <>
      <Seo title={t('seo.pathologies.title')} description={t('seo.pathologies.desc')} />
      <PageHero
        tag={t('pathologiesIndex.tag')}
        title={t('pathologiesIndex.title')}
        titleAccent={t('pathologiesIndex.accent')}
        description={t('pathologiesIndex.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.pathologies') }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathologies.map(({ id, to, Icon, color }) => (
              <Link
                key={id}
                to={to}
                className="group bg-white rounded-3xl p-7 border border-slate-100 shadow-sm card-hover flex flex-col"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-5`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-lg font-bold text-slate-900 mb-2">
                  {t(`pathologySummaries.${id}.name`)}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed flex-1">
                  {t(`pathologySummaries.${id}.short`)}
                </p>
                <span className="inline-flex items-center gap-1.5 text-teal-600 font-semibold text-sm mt-5 group-hover:gap-3 transition-all">
                  {t('pathologiesIndex.cardCta')} <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">{t('pathologiesIndex.ctaTitle')}</h2>
            <p className="text-slate-500">{t('pathologiesIndex.ctaDesc')}</p>
          </div>
          <Link to="/rendez-vous" className="btn-primary flex-shrink-0">
            {t('common.bookAppointment')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
