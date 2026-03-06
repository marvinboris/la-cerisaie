import { useState } from 'react'
import PageHero from '../components/shared/PageHero'
import { Calendar, X, ArrowRight } from 'lucide-react'

const articles = [
  {
    id: 1,
    date: '7 mars 2022',
    category: 'Prévention',
    title: 'Votre vue est précieuse',
    image: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/03/Bienvenue_Cerisaie.png',
    excerpt: "Vous avez tellement de belles choses à voir et à découvrir. La Cerisaie Eye Clinic s'engage à prendre soin de vos yeux.",
    content: `Vous avez tellement de belles choses à voir et à découvrir dans ce monde. La vue est l'un des sens les plus précieux, celui qui nous permet d'apprécier la beauté qui nous entoure, de lire, de travailler, de conduire, de regarder ceux que nous aimons.

C'est pourquoi chez La Cerisaie Eye Clinic, nous mettons tout en œuvre pour prendre soin de votre santé visuelle avec le plus grand sérieux et la plus grande bienveillance.

Ne laissez pas une baisse de vision, des douleurs oculaires, des éblouissements ou tout autre symptôme sans consultation. Une prise en charge précoce est souvent la clé d'un meilleur résultat.

**Notre équipe est à votre disposition.** N'attendez pas pour prendre rendez-vous avec l'un de nos ophtalmologistes. Ensemble, prenons soin de votre vision.`,
    color: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-50',
    tagColor: 'text-blue-700',
  },
  {
    id: 2,
    date: '7 mars 2022',
    category: 'Optique',
    title: 'Renouveler vos lunettes',
    image: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/03/nouvelles_lunettes_cerisaie.png',
    excerpt: "Vous souhaitez renouveler votre paire de lunettes ? Pas d'inquiétude, La Cerisaie Eye Clinic est à votre disposition.",
    content: `Vous souhaitez renouveler votre paire de lunettes ? Pas d'inquiétude, La Cerisaie Eye Clinic est à votre disposition !

Le renouvellement de lunettes nécessite une consultation ophtalmologique pour s'assurer que votre correction est toujours adaptée à votre vue. La vision évolue avec le temps, et des lunettes mal adaptées peuvent provoquer fatigue visuelle, maux de tête et inconfort au quotidien.

Lors de votre consultation, notre ophtalmologiste effectuera :
- Un examen complet de votre acuité visuelle
- La mesure précise de votre correction actuelle
- Une vérification de l'état général de vos yeux
- La délivrance d'une ordonnance mise à jour si nécessaire

**Prenez rendez-vous dès aujourd'hui** pour votre bilan visuel et repartez avec une ordonnance à jour, valable pour vos nouvelles lunettes ou vos lentilles de contact.`,
    color: 'from-teal-400 to-teal-600',
    bg: 'bg-teal-50',
    tagColor: 'text-teal-700',
  },
  {
    id: 3,
    date: '7 mars 2022',
    category: 'Cabinet',
    title: 'Bienvenue à La Cerisaie Eye Clinic',
    image: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2022/04/KI8_8755-1024x681.jpg',
    excerpt: "Que vous soyez un patient de longue date ou que vous nous rendiez visite pour la première fois, toute l'équipe vous souhaite la bienvenue.",
    content: `Que vous soyez un patient de longue date ou que vous nous rendiez visite pour la première fois, toute l'équipe de La Cerisaie Eye Clinic vous souhaite la bienvenue !

Nous sommes un cabinet d'ophtalmologie situé à Bonapriso, Avenue du Général de Gaulle à Douala. Depuis 2003, nous nous engageons à vous offrir des soins oculaires de qualité dans un environnement bienveillant et professionnel.

**Nos engagements envers vous :**
- Un accueil chaleureux et respectueux
- Un diagnostic précis grâce à des équipements modernes
- Une prise en charge personnalisée et à l'écoute
- Des consultations et examens complémentaires de qualité
- Une orientation vers les meilleurs centres chirurgicaux partenaires si nécessaire

N'hésitez pas à nous faire part de vos retours sur nos réseaux sociaux. Votre satisfaction est notre priorité, et vos commentaires nous permettent de nous améliorer continuellement.

**Nous vous attendons !**`,
    color: 'from-violet-400 to-violet-600',
    bg: 'bg-violet-50',
    tagColor: 'text-violet-700',
  },
  {
    id: 4,
    date: '23 décembre 2021',
    category: 'Événement',
    title: 'Bonne année 2022 !',
    image: 'https://lacerisaie-eyeclinic.com/wp-content/uploads/2021/12/1-2-1024x576.jpg',
    excerpt: "Toute l'équipe de La Cerisaie Eye Clinic vous souhaite une excellente nouvelle année, pleine de santé et de belles découvertes.",
    content: `Toute l'équipe de La Cerisaie Eye Clinic vous souhaite une excellente nouvelle année 2022, riche en bonheur, en santé et en belles découvertes !

Nous tenons à remercier chaleureusement tous nos patients qui nous ont fait confiance tout au long de l'année 2021. Votre fidélité et votre confiance sont notre plus belle récompense.

L'année 2021 a été marquée par des défis sanitaires sans précédent, mais nous avons continué à vous accueillir et à prendre soin de votre santé visuelle dans le respect des mesures de protection.

En 2022, nous continuons à nous améliorer pour vous offrir encore de meilleurs soins. De nouvelles expertises, de nouveaux équipements et toujours la même équipe dévouée à votre service.

**De la part de toute l'équipe :** Dr. Théodat Manga, Dr. Georges Mouen, Dr. Mbia Zobo, Mr. Marcel Epesse, Dr. Maxime Manga, et tout le personnel administratif et soignant — merci et bonne année !`,
    color: 'from-orange-400 to-orange-600',
    bg: 'bg-orange-50',
    tagColor: 'text-orange-700',
  },
]

export default function NewsPage() {
  const [openArticle, setOpenArticle] = useState<typeof articles[0] | null>(null)

  return (
    <>
      <PageHero
        tag="Actualités"
        title="Nos dernières"
        titleAccent="nouvelles"
        description="Restez informé des actualités de La Cerisaie Eye Clinic : conseils santé, informations sur nos services et nouvelles du cabinet."
        breadcrumbs={[{ label: 'Accueil', to: '/' }, { label: 'Actualités' }]}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {articles.map((article, i) => (
              <article key={article.id} className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                {article.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
                  <p className="text-slate-500 leading-relaxed flex-1 mb-6">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                    <span className="font-display text-5xl font-bold text-slate-100 leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <button
                      onClick={() => setOpenArticle(article)}
                      className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm hover:gap-3 transition-all duration-200"
                    >
                      Lire l'article <ArrowRight className="w-4 h-4" />
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
