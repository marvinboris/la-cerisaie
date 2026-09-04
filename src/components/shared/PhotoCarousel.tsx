import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  src: string
  caption: string
}

/** ponytail: scroll-snap natif + deux boutons, pas de lib carousel. */
export default function PhotoCarousel({ slides, prevLabel, nextLabel }: { slides: Slide[]; prevLabel: string; nextLabel: string }) {
  const track = useRef<HTMLDivElement>(null)
  const scroll = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.7, behavior: 'smooth' })
  const btn = 'absolute top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-slate-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors'

  return (
    <div className="relative">
      <div ref={track} className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2">
        {slides.map((s) => (
          <figure key={s.src} className="snap-center flex-shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] relative rounded-3xl overflow-hidden aspect-[3/2] bg-slate-200">
            <img loading="lazy" src={s.src} alt={s.caption} className="w-full h-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white px-6 pt-12 pb-5 text-sm font-medium">{s.caption}</figcaption>
          </figure>
        ))}
      </div>
      <button type="button" onClick={() => scroll(-1)} aria-label={prevLabel} className={`${btn} left-2`}>
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button type="button" onClick={() => scroll(1)} aria-label={nextLabel} className={`${btn} right-2`}>
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  )
}
