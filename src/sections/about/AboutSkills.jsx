import { useRef, useState } from 'react'

const categories = [
  { title: 'Social Media', items: ['Estratégia', 'Calendário editorial', 'Roteiros', 'Métricas', 'Community'] },
  { title: 'Design', items: ['Direção visual', 'Branding', 'Carrosséis', 'Motion', 'Prototipagem'] },
  { title: 'Dev', items: ['React', 'Three.js', 'GSAP', 'WebGL', 'Vite'] },
  { title: 'Ferramentas', items: ['Canva', 'CapCut', 'Figma', 'ChatGPT', 'Meta Suite'] },
]

export default function AboutSkills() {
  const trackRef = useRef(null)
  const drag = useRef({ active: false, start: 0, scroll: 0 })
  const [dragging, setDragging] = useState(false)

  const onPointerDown = (event) => {
    drag.current = { active: true, start: event.clientX, scroll: trackRef.current.scrollLeft }
    setDragging(true)
    trackRef.current.setPointerCapture(event.pointerId)
  }
  const onPointerMove = (event) => {
    if (!drag.current.active) return
    trackRef.current.scrollLeft = drag.current.scroll - (event.clientX - drag.current.start)
  }
  const endDrag = () => { drag.current.active = false; setDragging(false) }

  return (
    <section className="about-skills section-pad">
      <div className="shell section-heading"><p className="eyebrow"><span /> Repertório</p><h2>O que eu levo<br />para a mesa.</h2></div>
      <div
        ref={trackRef}
        className={`about-skills__track ${dragging ? 'is-dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {categories.map((category, index) => (
          <article key={category.title}>
            <span>0{index + 1}</span><h3>{category.title}</h3>
            <ul>{category.items.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
