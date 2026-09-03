import { Link } from 'react-router-dom'
import { useT } from '../i18n/useT'
import PageHero from '../components/shared/PageHero'
import { CheckCircle, Award, Users, Heart, Stethoscope, GraduationCap, ArrowRight } from 'lucide-react'
import { insurers } from '../data/insurers'
import Seo from '../components/Seo'
import JsonLd from '../components/JsonLd'
import { SITE_NAME, SITE_URL } from '../lib/seo'

const valueIcons = [Award, Heart, Users]

export default function AboutPage() {
  const { t, tList } = useT()
  const values: { title: string; desc: string }[] = tList('about.values.items')
  const doctors: { name: string; role: string; speciality: string; description: string; badge: string | null; color: string; photo: string; initials: string }[] = tList('doctors')
  const staff: { name: string; role: string; speciality: string; color: string; photo: string | null; initials: string }[] = tList('staff')
  const historyPoints: string[] = tList('about.history.points')

  return (
    <>
      <Seo title={t('seo.about.title')} description={t('seo.about.desc')} image="/images/team/manga-theodat.jpg" />
      <JsonLd
        data={doctors.map((d) => ({
          '@type': 'Physician',
          name: d.name,
          image: `${SITE_URL}${d.photo}`,
          description: d.description,
          medicalSpecialty: 'Ophthalmology',
          url: `${SITE_URL}/a-propos`,
          worksFor: { '@type': 'MedicalClinic', name: SITE_NAME, url: SITE_URL },
        }))}
      />
      <PageHero
        tag={t('about.hero.tag')}
        title={t('about.hero.title')}
        titleAccent={t('about.hero.accent')}
        description={t('about.hero.desc')}
        breadcrumbs={[{ label: t('nav.home'), to: '/' }, { label: t('nav.about') }]}
      />

      {/* History & mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag">
                <div className="w-8 h-px bg-teal-500" />
                {t('about.history.tag')}
              </div>
              <h2 className="section-title mb-6">
                {t('about.history.title')}
                <span className="block text-gradient">{t('about.history.accent')}</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">{t('about.history.p1')}</p>
              <p className="text-slate-500 leading-relaxed mb-8">{t('about.history.p2')}</p>
              <ul className="space-y-3">
                {historyPoints.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-900 to-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
              <div className="relative">
                <div className="text-center mb-10">
                  <div className="text-6xl font-bold font-display mb-2">2003</div>
                  <div className="text-teal-300 text-sm font-medium tracking-wider uppercase">{t('about.history.founded')}</div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { n: '20+', l: t('about.history.tag') },
                    { n: '11', l: t('home.stats.1.label') },
                    { n: '3', l: t('home.stats.2.label') },
                    { n: '4', l: t('home.about.statsItems.3.l') },
                  ].map((s) => (
                    <div key={s.n} className="bg-white/10 rounded-2xl p-5 text-center border border-white/10">
                      <div className="text-3xl font-bold text-white">{s.n}</div>
                      <div className="text-teal-200 text-xs mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              {t('about.values.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title">{t('about.values.title')}
              <span className="block text-gradient">{t('about.values.accent')}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val, i) => {
              const Icon = valueIcons[i]
              return (
                <div key={val.title} className="bg-white rounded-3xl p-8 border border-slate-100 hover:border-teal-200 transition-colors hover:shadow-lg">
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-teal-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="section-tag justify-center">
              <div className="w-8 h-px bg-teal-500" />
              {t('about.team.tag')}
              <div className="w-8 h-px bg-teal-500" />
            </div>
            <h2 className="section-title">{t('about.team.title')}
              <span className="block text-gradient">{t('about.team.accent')}</span>
            </h2>
          </div>

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-8">{t('about.team.ophtalmologists')}</h3>
          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {doctors.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy" src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {member.badge && (
                    <span className="absolute top-3 right-3 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">
                      {member.badge}
                    </span>
                  )}
                </div>
                <div className={`h-1 bg-gradient-to-r ${member.color}`} />
                <div className="p-8 text-center">
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center gap-1.5 mb-4">
                    <Stethoscope className="w-3.5 h-3.5 text-teal-500" />
                    <span className="text-teal-600 font-medium text-sm">{member.role}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{member.description}</p>
                  <div className="bg-slate-50 rounded-xl px-4 py-2 text-xs text-slate-600 font-medium">{member.speciality}</div>
                  <div className="mt-5 pt-5 border-t border-slate-100 flex justify-center gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {t('about.team.specialist')}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Award className="w-3.5 h-3.5" />
                      {t('about.team.expert')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-8">{t('about.team.staff')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {staff.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl p-6 border border-slate-100 flex items-center gap-4 hover:border-teal-200 transition-colors">
                {member.photo ? (
                  <img loading="lazy" src={member.photo} alt={member.name} className="w-14 h-14 rounded-xl object-cover object-top flex-shrink-0 shadow-md" />
                ) : (
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white font-bold font-display shadow-md flex-shrink-0 text-sm`}>
                    {member.initials}
                  </div>
                )}
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{member.name}</div>
                  <div className="text-teal-600 text-xs font-medium">{member.role}</div>
                  <div className="text-slate-500 text-xs mt-1 leading-snug">{member.speciality}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Admin staff */}
          <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img loading="lazy" src="/images/team/accueil.jpg" alt={t('about.team.adminTitle')} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-50/50 hidden lg:block" />
              </div>
              <div className="p-8 flex flex-col justify-center text-center lg:text-left">
                <h4 className="font-display text-xl font-bold text-slate-900 mb-2">{t('about.team.adminTitle')}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{t('about.team.adminDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-shrink-0 text-center md:text-left">
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">{t('about.insurance.title')}</h3>
              <p className="text-slate-500 text-sm">{t('about.insurance.sub')}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {insurers.map((ins) => (
                <div key={ins.id} className="bg-white border border-slate-200 rounded-2xl px-6 py-3 shadow-sm hover:border-teal-300 transition-colors flex items-center justify-center h-16">
                  <img loading="lazy" src={ins.logo} alt={ins.name} className="h-8 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 mb-4">{t('about.cta.title')}</h2>
          <p className="text-slate-500 mb-8">{t('about.cta.desc')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rendez-vous" className="btn-primary text-base px-8 py-4 shadow-lg shadow-teal-200">
              {t('common.bookAppointment')} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">{t('common.contactUs')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
