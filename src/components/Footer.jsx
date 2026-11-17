import { Link } from 'react-router-dom'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link className="brand" to="/" aria-label="Voltar para o início"><span className="brand-mark" aria-hidden="true">●</span><span className="brand-name">Portfólio</span></Link>
          <p>Desenvolvido com dedicação e aprendizado.</p>
        </div>
        <Link className="back-to-top" to="/#inicio">Voltar ao início <span aria-hidden="true">↑</span></Link>
        <p className="copyright">© {currentYear} · Portfólio pessoal</p>
      </div>
    </footer>
  )
}

export default Footer
