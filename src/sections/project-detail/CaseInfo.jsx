export default function CaseInfo({ project }) {
  const facts = [
    ['Cliente / Projeto', project.client],
    ['Ano', project.year],
    ['Tipo', project.type],
    ['Ferramentas', project.tools],
  ]
  return (
    <section className="case-info shell section-pad">
      <div className="case-info__facts">
        {facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
      </div>
      <div className="case-info__copy"><p className="eyebrow"><span /> Contexto</p><h2>{project.description}</h2></div>
    </section>
  )
}
