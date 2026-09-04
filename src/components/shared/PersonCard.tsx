import { Maximize2, Stethoscope } from 'lucide-react'

export interface Person {
  name: string
  role: string
  speciality: string
  description?: string
  badge?: string | null
  color: string
  photo: string
}

export default function PersonCard({ person, enlargeLabel, onOpen }: { person: Person; enlargeLabel: string; onOpen: () => void }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      <button type="button" onClick={onOpen} aria-label={`${enlargeLabel} — ${person.name}`} className="relative aspect-[4/5] overflow-hidden group cursor-zoom-in">
        <img loading="lazy" src={person.photo} alt={person.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
        {person.badge && (
          <span className="absolute top-3 left-3 bg-teal-500 text-white text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap">{person.badge}</span>
        )}
        <span className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-white/90 text-slate-700 shadow flex items-center justify-center">
          <Maximize2 className="w-4 h-4" />
        </span>
      </button>
      <div className={`h-1 bg-gradient-to-r ${person.color}`} />
      <div className="p-6 text-center flex-1 flex flex-col">
        <h3 className="font-display text-lg font-bold text-slate-900 mb-1">{person.name}</h3>
        <div className="flex items-center justify-center gap-1.5 mb-3">
          <Stethoscope className="w-3.5 h-3.5 text-teal-500" />
          <span className="text-teal-600 font-medium text-sm">{person.role}</span>
        </div>
        {person.description && <p className="text-slate-500 text-sm leading-relaxed mb-4">{person.description}</p>}
        <div className="mt-auto bg-slate-50 rounded-xl px-4 py-2 text-xs text-slate-600 font-medium">{person.speciality}</div>
      </div>
    </div>
  )
}
