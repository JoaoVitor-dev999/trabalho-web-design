import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects({ featured = false }) {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProject = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }
  const closeProject = useCallback(() => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }, [])

  const visibleProjects = featured ? projects.slice(0, 3) : projects

  return (
    <section className={`section-shell projects-section ${featured ? 'projects-featured' : ''}`} id={featured ? 'projetos' : undefined}>
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Aprendizado em prática</p>
            <h2>Projetos em <span>construção.</span></h2>
          </div>
          <p className="section-intro">Experimentos acadêmicos e pessoais que acompanham minha evolução na tecnologia.</p>
        </div>
        <div className="projects-grid">
          {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={openProject} />)}
        </div>
        {featured && <div className="projects-more"><Link className="text-button" to="/projetos">Explorar todos os projetos <span aria-hidden="true">→</span></Link></div>}
      </div>
      {isModalOpen && <ProjectModal project={selectedProject} onClose={closeProject} />}
    </section>
  )
}

export default Projects
