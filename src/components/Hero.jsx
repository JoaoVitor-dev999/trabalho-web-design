import { Link } from 'react-router-dom'

const quickTech = ['React', 'JavaScript', 'MySQL', 'CSS3']

function Hero() {
  return (
    <section className="hero section-shell" id="inicio">
      <div className="hero-content container">
        <div className="hero-copy">
          <p className="eyebrow">Estudante de Tecnologia da Informação</p>
          <h1>Olá! Sou estudante de <span>TI.</span></h1>
          <p className="hero-lead">Desenvolvedor em constante evolução.</p>
          <p className="hero-description">Tenho interesse em tecnologia e desenvolvimento de software. Estou aprendendo programação, banco de dados e desenvolvimento web, sempre buscando transformar conhecimentos em soluções práticas.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/projetos">Conheça meus projetos <span aria-hidden="true">↗</span></Link>
            <Link className="button button-secondary" to="/contato">Entre em contato</Link>
          </div>
          <div className="hero-tech">
            <span className="hero-tech-label">Estudando e praticando</span>
            <div className="tech-pills" aria-label="Tecnologias em estudo">
              {quickTech.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <img src="/profile-placeholder.svg" alt="Ilustração divertida de um cachorro de óculos fumando." />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
