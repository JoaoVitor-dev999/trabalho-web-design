import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="not-found page-main">
      <div className="not-found-code">404</div>
      <p className="eyebrow">Página não encontrada</p>
      <h1>Este caminho ainda não existe.</h1>
      <p>Confira o endereço ou volte para a página inicial.</p>
      <Link className="button button-primary" to="/">Voltar ao início <span aria-hidden="true">↗</span></Link>
    </main>
  )
}

export default NotFound
