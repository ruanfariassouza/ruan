import { useLayoutEffect, useRef } from 'react'
import Tag from '../../components/ui/Tag'
import usePreloader from '../../hooks/usePreloader'
import { gsap } from '../../utils/gsap'

const skills = ['Criação de Conteúdo', 'Planejamento Editorial', 'Copywriting', 'Análise de Métricas', 'IA Aplicada', 'React', 'Three.js', 'GSAP']

export default function AboutIntro() {
  const rootRef = useRef(null)
  const { isLoading } = usePreloader()

  useLayoutEffect(() => {
    if (isLoading) return undefined
    const context = gsap.context(() => {
      gsap.fromTo('[data-about-reveal]', { y: 60, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.16,
        ease: 'expo.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 72%' },
      })
    })
    return () => context.revert()
  }, [isLoading])

  return (
    <section ref={rootRef} className="about-intro shell section-pad" id="sobre">
      <div data-about-reveal>
        <p className="eyebrow"><span /> Sobre mim</p>
        <h2>Eu crio conteúdo com intenção. Cada post tem objetivo, cada campanha tem direção.</h2>
      </div>
      <div className="about-intro__copy" data-about-reveal>
        <p>Sou Ruan Farias, social media creator e digital creative de Vila Velha, Espírito Santo. Transformo ideias em conteúdo claro, visual e capaz de mover pessoas.</p>
        <p>Uno estratégia, escrita, design e tecnologia para construir presenças digitais consistentes — da primeira ideia à leitura dos resultados.</p>
        <div className="tag-list">{skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div>
      </div>
    </section>
  )
}
