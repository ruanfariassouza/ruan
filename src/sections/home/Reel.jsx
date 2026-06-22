import { useLayoutEffect, useRef } from 'react'
import { gsap } from '../../utils/gsap'
import usePreloader from '../../hooks/usePreloader'

const cards = [
  { num: '01', title: 'React · Three.js · GSAP', type: 'video', src: '/videos/screen_recording_site.mp4', poster: '/images/portfolio_cover.jpg' },
  { num: '02', title: 'App · Branding · Social', type: 'image', src: '/images/vivajunto_mockup.png' },
  { num: '03', title: 'Tech · Content · Strategy', type: 'image', src: '/images/iflow_mockup.png' },
  { num: '04', title: 'Em breve', type: 'soon' },
]

export default function Reel() {
  const rootRef = useRef(null)
  const trackRef = useRef(null)
  const { isLoading } = usePreloader()

  useLayoutEffect(() => {
    if (isLoading || window.innerWidth < 768) return undefined
    const context = gsap.context(() => {
      const distance = () => Math.max(0, trackRef.current.scrollWidth - window.innerWidth)
      gsap.to(trackRef.current, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    })
    return () => context.revert()
  }, [isLoading])

  return (
    <section ref={rootRef} className="reel" aria-label="Projetos selecionados">
      <div className="reel__intro shell">
        <p className="eyebrow"><span /> Projetos selecionados</p>
        <p>Uma seleção de experiências digitais, marcas e conteúdo com direção.</p>
      </div>
      <div ref={trackRef} className="reel__track">
        {cards.map((card) => (
          <article key={card.num} className={`reel-card reel-card--${card.type}`} data-cursor={card.type === 'video' ? 'video' : 'project'}>
            {card.type === 'video' && <video src={card.src} poster={card.poster} autoPlay={!isLoading} muted loop playsInline preload="metadata" />}
            {card.type === 'image' && <img src={card.src} alt={card.title} loading="lazy" />}
            {card.type === 'soon' && <div className="reel-card__soon"><span>Próxima história</span><strong>?</strong></div>}
            <span className="reel-card__num">{card.num}</span>
            <h3>{card.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
