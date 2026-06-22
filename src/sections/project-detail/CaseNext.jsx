import { useState } from 'react'
import { Link } from 'react-router-dom'
import HoverImage from '../../components/shared/HoverImage'

export default function CaseNext({ project }) {
  const [hovered, setHovered] = useState(false)
  return (
    <section className="case-next shell">
      <HoverImage src={project.image} alt={project.name} visible={hovered} />
      <Link to={`/projetos/${project.slug}`} data-cursor="project" onPointerEnter={() => setHovered(true)} onPointerLeave={() => setHovered(false)}>
        <span>Próximo projeto</span><h2>{project.name}</h2><strong>↗</strong>
      </Link>
    </section>
  )
}
