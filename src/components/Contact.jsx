import { useState } from 'react'
import { contactInfo } from '../data/contact'

const initialForm = { name: '', email: '', message: '' }

function Contact() {
  const [formData, setFormData] = useState(initialForm)
  const [feedback, setFeedback] = useState('')

  const updateField = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    if (feedback) setFeedback('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    if (formData.name.trim().length < 2) {
      setFeedback('Informe um nome com pelo menos 2 caracteres.')
      return
    }
    if (!emailIsValid) {
      setFeedback('Informe um endereço de e-mail válido.')
      return
    }
    if (formData.message.trim().length < 10) {
      setFeedback('Escreva uma mensagem com pelo menos 10 caracteres.')
      return
    }
    setFeedback('Formulário validado! Este é um modo demonstrativo: nenhuma mensagem foi enviada.')
    setFormData(initialForm)
  }

  const socialItems = [
    { label: 'E-mail', value: contactInfo.email, href: contactInfo.email ? `mailto:${contactInfo.email}` : '' },
    { label: 'GitHub', value: contactInfo.github, href: contactInfo.github },
    { label: 'LinkedIn', value: contactInfo.linkedin, href: contactInfo.linkedin },
  ]

  return (
    <section className="section-shell contact-section">
      <div className="container">
        <div className="section-heading contact-heading">
          <p className="eyebrow">Vamos nos conectar</p>
          <h1>Uma boa conversa pode ser o <span>começo.</span></h1>
          <p className="section-intro">Tem uma ideia, uma sugestão ou quer trocar experiências sobre tecnologia? Deixe uma mensagem.</p>
        </div>
        <div className="contact-layout">
          <aside className="contact-aside">
            <div className="contact-note">
              <span className="contact-note-icon">✳</span>
              <h2>Em busca de aprender sempre.</h2>
              <p>Estou aberto a conhecer pessoas, compartilhar aprendizados e descobrir novos desafios na área de tecnologia.</p>
            </div>
            <div className="contact-list">
              {socialItems.map((item) => (
                <div className="contact-item" key={item.label}>
                  <span className="contact-item-label">{item.label}</span>
                  {item.href ? <a href={item.href} target={item.label === 'E-mail' ? undefined : '_blank'} rel={item.label === 'E-mail' ? undefined : 'noreferrer'}>{item.value || 'Acessar'} <span aria-hidden="true">↗</span></a> : <span className="contact-placeholder">Adicione seu {item.label} em src/data/contact.js</span>}
                </div>
              ))}
            </div>
          </aside>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-heading"><span>01 / Mensagem</span><p>Os campos com * são obrigatórios.</p></div>
            <label htmlFor="contact-name">Seu nome <span>*</span></label>
            <input id="contact-name" name="name" type="text" placeholder="Como podemos te chamar?" value={formData.name} onChange={updateField} required minLength={2} autoComplete="name" />
            <label htmlFor="contact-email">Seu e-mail <span>*</span></label>
            <input id="contact-email" name="email" type="email" placeholder="voce@exemplo.com" value={formData.email} onChange={updateField} required autoComplete="email" />
            <label htmlFor="contact-message">Mensagem <span>*</span></label>
            <textarea id="contact-message" name="message" placeholder="Conte um pouco sobre o que você gostaria de conversar..." value={formData.message} onChange={updateField} required minLength={10} rows="5" />
            <button className="button button-primary form-submit" type="submit">Enviar mensagem <span aria-hidden="true">↗</span></button>
            {feedback && <p className="form-feedback" role="status">{feedback}</p>}
            <p className="form-disclaimer">Demonstração acadêmica: este formulário não envia dados a um servidor.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
