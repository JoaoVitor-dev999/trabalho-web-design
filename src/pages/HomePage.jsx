import { Link } from 'react-router-dom'
import About from '../components/About'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects featured />
      <section className="next-step-section">
        <div className="container next-step-content">
          <div><p className="eyebrow">Próximo passo</p><h2>Vamos construir uma boa conversa?</h2></div>
          <Link className="button button-primary" to="/contato">Fale comigo <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage
