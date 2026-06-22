import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import useInView from '../../hooks/useInView'
import usePreloader from '../../hooks/usePreloader'

const ParticleField = lazy(() => import('../../canvas/scenes/ParticleField'))
const socials = ['Instagram', 'LinkedIn', 'Behance', 'GitHub']

export default function ContactHome() {
  const rootRef = useRef(null)
  const active = useInView(rootRef)
  const { isLoading } = usePreloader()
  const [webgl, setWebgl] = useState(() => window.innerWidth >= 768)

  useEffect(() => {
    const query = window.matchMedia('(min-width: 768px)')
    const update = () => setWebgl(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return (
    <section ref={rootRef} className="contact-home">
      <div className="contact-home__gradient" />
      {webgl && <div className="contact-home__canvas"><Suspense fallback={null}><ParticleField active={active && !isLoading} /></Suspense></div>}
      <div className="contact-home__content shell">
        <p className="eyebrow"><span /> Vamos criar juntos</p>
        <a className="contact-home__email" href="mailto:ruan@email.com" data-cursor="link">ruan@email.com</a>
        <p className="contact-home__availability">Aberto a projetos de social media, conteúdo, estratégia e experiências digitais.</p>
        <div className="social-row">
          {socials.map((social) => <a key={social} href={`https://${social.toLowerCase()}.com`} target="_blank" rel="noreferrer" data-cursor="link">{social}<span>↗</span></a>)}
        </div>
      </div>
    </section>
  )
}
