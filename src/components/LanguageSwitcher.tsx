import { useTranslation } from 'react-i18next'

interface Props {
  transparent?: boolean
}

export default function LanguageSwitcher({ transparent = false }: Props) {
  const { i18n } = useTranslation()
  const current = i18n.language?.startsWith('en') ? 'en' : 'fr'

  return (
    <div className="flex items-center gap-0.5">
      {(['fr', 'en'] as const).map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          className={`text-xs font-bold px-2 py-1 rounded-md transition-all duration-200 uppercase tracking-wide ${
            current === lng
              ? transparent
                ? 'bg-white/20 text-white'
                : 'bg-teal-600 text-white'
              : transparent
                ? 'text-white/60 hover:text-white hover:bg-white/10'
                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
          }`}
        >
          {lng}
        </button>
      ))}
    </div>
  )
}
