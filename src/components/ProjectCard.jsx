function ProjectCard({ project, onOpen }) {
  return (
    <article className={`project-card project-accent-${project.id}`}>
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className="project-status"><i />{project.status}</span>
      </div>
      <div className="project-art" aria-hidden="true">
        <span className="project-art-orbit" />
        <span className="project-art-symbol">{project.id === 1 ? '▤' : project.id === 2 ? '{ }' : '✳'}</span>
        <span className="project-art-label">{project.category}</span>
      </div>
      <div className="project-card-body">
        <p className="project-category">Projeto selecionado</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-card-actions">
          <button className="text-button" type="button" onClick={() => onOpen(project)}>
            Ver detalhes <span aria-hidden="true">↗</span>
          </button>
          {project.githubUrl ? (
            <a className="github-link" href={project.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
          ) : (
            <button className="github-link unavailable" type="button" disabled title="Adicione o link do repositório em src/data/projects.js">GitHub indisponível</button>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
