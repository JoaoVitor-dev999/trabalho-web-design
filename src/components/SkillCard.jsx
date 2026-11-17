function SkillCard({ name, description, icon }) {
  return (
    <article className="skill-card">
      <span className="skill-icon" aria-hidden="true">{icon}</span>
      <h4>{name}</h4>
      <p>{description}</p>
      <span className="skill-level">Em aprendizado</span>
    </article>
  )
}

export default SkillCard
