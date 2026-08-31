import { useState } from 'react'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { Calendar, X, ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'

type Article = {
  id: number; date: string; category: string; title: string; image: string
  excerpt: string; content: string; color: string; bg: string; tagColor: string
}

export default function NewsPage() {
  const { t, tList } = useT()
  const articles: Article[] = tList('news.articles')
  const [openArticle, setOpenArticle] = useState<Article | null>(null)

  return (
    <>
      <Seo title={t('seo.news.title')} description={t('seo.news.desc')} />
      <PageHero
        tag={t('news.hero.tag')}
        title={t('news.hero.title')}
        titleAccent={t('news.hero.accent')}
        description={t('news.hero.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.news') }]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <article key={article.id} className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {article.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img loading="lazy" src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${article.color} opacity-20`} />
                  </div>
                )}
                <div className={`h-1 bg-gradient-to-r ${article.color}`} />
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${article.bg} ${article.tagColor}`}>
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs">{article.date}</span>
                    </div>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed flex-1 mb-6">{article.excerpt}</p>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                    <span className="font-display text-5xl font-bold text-slate-100 leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <button
                      onClick={() => setOpenArticle(article)}
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
                    >
                      {t('common.readArticle')} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article modal */}
      {openArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setOpenArticle(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 bg-gradient-to-r ${openArticle.color} rounded-t-3xl`} />
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${openArticle.bg} ${openArticle.tagColor} mb-3 inline-block`}>
                    {openArticle.category}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-slate-900">{openArticle.title}</h2>
                  <div className="flex items-center gap-1.5 text-slate-400 mt-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-sm">{openArticle.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => setOpenArticle(null)}
                  className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-xl flex items-center justify-center transition-colors flex-shrink-0 ml-4"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>

              <div className="prose prose-slate max-w-none">
                {openArticle.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <p key={i} className="font-bold text-slate-900 text-base mb-4">
                        {paragraph.replace(/\*\*/g, '')}
                      </p>
                    )
                  }
                  if (paragraph.startsWith('- ') || paragraph.includes('\n- ')) {
                    const items = paragraph.split('\n').filter(l => l.startsWith('- '))
                    return (
                      <ul key={i} className="space-y-2 mb-4">
                        {items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 flex-shrink-0" />
                            {item.replace('- ', '')}
                          </li>
                        ))}
                      </ul>
                    )
                  }
                  return (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4 text-sm">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
