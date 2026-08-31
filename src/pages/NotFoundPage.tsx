import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  const { t } = useT()

  return (
    <>
      <Seo title={t('seo.notFound.title')} description={t('seo.notFound.desc')} noindex />
      <PageHero
        tag={t('notFound.tag')}
        title={t('notFound.title')}
        titleAccent={t('notFound.accent')}
        description={t('notFound.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('notFound.tag') }]}
      />
      <section className="py-24 bg-white">
        <div className="max-w-lg mx-auto px-4 flex flex-wrap gap-3 justify-center">
          <Link to="/" className="btn-outline">{t('notFound.home')}</Link>
          <Link to="/rendez-vous" className="btn-primary">
            {t('common.bookAppointment')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
