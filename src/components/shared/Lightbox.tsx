import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { Person } from './PersonCard'

/** ponytail: <dialog> natif (Échap, focus, backdrop) plutôt qu'une lib de lightbox. */
export default function Lightbox({ person, closeLabel, onClose }: { person: Person | null; closeLabel: string; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (person && !dialog.open) dialog.showModal()
    if (!person && dialog.open) dialog.close()
  }, [person])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      className="bg-transparent p-0 max-w-[92vw] max-h-[92vh] backdrop:bg-slate-900/80 backdrop:backdrop-blur-sm"
    >
      {person && (
        <figure className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
          <img src={person.photo} alt={person.name} className="max-h-[78vh] w-auto object-contain" />
          <figcaption className="px-6 py-4 text-center">
            <div className="font-display font-bold text-slate-900">{person.name}</div>
            <div className="text-teal-600 text-sm">{person.role}</div>
          </figcaption>
          <button type="button" onClick={onClose} aria-label={closeLabel} className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 text-slate-700 shadow flex items-center justify-center hover:bg-white">
            <X className="w-4 h-4" />
          </button>
        </figure>
      )}
    </dialog>
  )
}
