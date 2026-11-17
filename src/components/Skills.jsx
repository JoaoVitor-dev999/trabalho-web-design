import { skillGroups } from '../data/skills'
import SkillCard from './SkillCard'

function Skills() {
  return (
    <section className="section-shell skills-section" id="habilidades">
      <div className="container">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Ferramentas do meu aprendizado</p>
            <h2>Habilidades em <span>desenvolvimento.</span></h2>
          </div>
          <p className="section-intro">Conhecimentos que venho praticando durante minha formação e em projetos pessoais.</p>
        </div>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <div className="skill-group-title"><span />{group.category}</div>
              <div className="skill-grid">
                {group.skills.map((skill) => <SkillCard key={skill.name} {...skill} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
