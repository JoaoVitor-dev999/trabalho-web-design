import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navigationItems = [
  { label: 'Início', to: '/' },
  { label: 'Sobre mim', to: '/#sobre' },
  { label: 'Habilidades', to: '/#habilidades' },
  { label: 'Projetos', to: '/projetos' },
  { label: 'Contato', to: '/contato' },
]

function Navbar() {
  const location = useLocation()
  const [menuLocationKey, setMenuLocationKey] = useState(null)
  const isMenuOpen = menuLocationKey === location.key

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.slice(1)
      window.setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 0)
    }
  }, [location.pathname, location.hash])

  const isItemActive = (to) => {
    if (to.startsWith('/#')) return location.pathname === '/' && location.hash === to.slice(1)
    if (to === '/') return location.pathname === '/' && !location.hash
    return location.pathname === to
  }

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegação principal">
        <Link className="brand" to="/" aria-label="Página inicial">
          <span className="brand-mark" aria-hidden="true">●</span>
          <span className="brand-name">Portfólio</span>
        </Link>

        <button
          className={`menu-toggle ${isMenuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuLocationKey(isMenuOpen ? null : location.key)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="main-navigation" className={`nav-links ${isMenuOpen ? 'is-open' : ''}`}>
          {navigationItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              className={() => `nav-link ${isItemActive(item.to) ? 'active' : ''}`}
              onClick={() => setMenuLocationKey(null)}
            >
              {item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contato" onClick={() => setMenuLocationKey(null)}>
            Vamos conversar <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
