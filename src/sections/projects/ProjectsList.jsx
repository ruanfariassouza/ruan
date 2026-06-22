import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HoverImage from '../../components/shared/HoverImage'
import { projects } from '../../data/projects'
import usePreloader from '../../hooks/usePreloader'
import { gsap } from '../../utils/gsap'

export default function ProjectsList() {
  const rootRef = useRef(null)
  const [preview, setPreview] = useState(null)
  const { isLoading } = usePreloader()

  useLayoutEffect(() => {
    if (isLoading) return undefined
    const context = gsap.context(() => {
      gsap.fromTo('.project-row', { y: 50, autoAlpha: 0 }, {
        y: 0,
        autoAlpha: 1,
        stagger: 0.12,
        duration: 0.9,
        delay: 0.2,
        ease: 'expo.out',
      })
    })
    return () => context.revert()
  }, [isLoading])

  return (
    <section ref={rootRef} className="projects-list shell">
      <HoverImage src={preview?.image || projects[0].image} alt={preview?.name || ''} visible={Boolean(preview)} />
      {projects.map((project) => (
        <Link
          key={project.slug}
          className="project-row"
          to={`/projetos/${project.slug}`}
          data-cursor="project"
          onPointerEnter={() => setPreview(project)}
          onPointerLeave={() => setPreview(null)}
        >
          <span className="project-row__num">{project.num}</span>
          <h2>{project.name}</h2>
          <div className="project-row__tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <span className="project-row__year">{project.year}</span>
          <span className="project-row__arrow">↗</span>
        </Link>
      ))}
    </section>
  )
}
