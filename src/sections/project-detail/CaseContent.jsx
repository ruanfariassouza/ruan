export default function CaseContent({ project }) {
  return (
    <section className="case-content">
      <div className="case-content__statement shell"><p>{project.statement}</p></div>
      <figure className="case-content__full"><img src={project.gallery[0]} alt={`${project.name} — aplicação principal`} loading="lazy" /></figure>
      <div className="case-content__grid shell">
        <figure><img src={project.gallery[1]} alt={`${project.name} — detalhe visual`} loading="lazy" /></figure>
        <div className="case-content__note"><span>Direção criativa</span><p>Uma linguagem visual construída para comunicar com clareza, manter consistência e transformar atenção em conexão.</p></div>
      </div>
      {project.video && (
        <div className="case-content__video shell" data-cursor="video">
          <video src={project.video} poster={project.image} muted loop autoPlay playsInline controls aria-label={`Vídeo do projeto ${project.name}`} />
        </div>
      )}
      <div className="case-metrics shell">
        {project.metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
      </div>
    </section>
  )
}
