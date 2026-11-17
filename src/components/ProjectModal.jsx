import { useEffect } from 'react'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar detalhes">×</button>
        <p className="eyebrow">Projeto {project.number} · {project.status}</p>
        <h2 id="modal-title">{project.title}</h2>
        <p className="modal-description">{project.details}</p>
        <h3>Tecnologias estudadas</h3>
        <div className="project-tags">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="modal-footer">
          {project.githubUrl ? <a className="button button-primary" href={project.githubUrl} target="_blank" rel="noreferrer">Abrir repositório ↗</a> : <span className="modal-note">Link do repositório ainda não informado.</span>}
          <button className="button button-secondary" type="button" onClick={onClose}>Fechar</button>
        </div>
      </section>
    </div>
  )
}

export default ProjectModal
