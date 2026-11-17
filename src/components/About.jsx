const highlights = [
  { number: '01', title: 'Formação acadêmica', text: 'Ensino Superior em andamento — 3º semestre, na área de Tecnologia da Informação.' },
  { number: '02', title: 'Desenvolvimento', text: 'Praticando lógica de programação, desenvolvimento web e banco de dados.' },
  { number: '03', title: 'Objetivo profissional', text: 'Evoluir na área de tecnologia e transformar aprendizado em soluções práticas.' },
]

function About() {
  return (
    <section className="section-shell about-section" id="sobre">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Um pouco sobre mim</p>
          <h2>Curiosidade que vira <span>conhecimento.</span></h2>
          <p className="section-intro">Uma trajetória em construção, guiada por prática, dedicação e vontade de aprender.</p>
        </div>
        <div className="about-layout">
          <div className="about-copy">
            <p>Sou estudante de Tecnologia da Informação, interessado em programação, desenvolvimento web, banco de dados e infraestrutura. Durante minha formação, venho desenvolvendo projetos práticos para aprimorar minha lógica de programação e compreender como diferentes tecnologias trabalham em conjunto.</p>
            <p>Busco constantemente novos conhecimentos e oportunidades para evoluir na área de tecnologia.</p>
            <span className="about-signature">Estudante de Tecnologia da Informação</span>
          </div>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.number}>
                <span className="highlight-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
