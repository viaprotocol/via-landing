import React from 'react'
import { socials } from '../data/socials'

function Intro() {
  return (
    <section className="first">
      <div className="form-wrapper">
        <a className="form-link" href="https://router.via.exchange" target="_blank" rel="noreferrer">
          <img src="/images/backgrounds/bg-form.svg" />
        </a>
      </div>
      <h1>
        Cross-chain<br />
        without limits
      </h1>
      <a data-button="large" href="https://router.via.exchange/" target="_blank" rel="noreferrer">Launch dApp</a>

      <div className="socials">
        {socials.map(social => (
          <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
            {social.icon}
            <span className="visually-hidden">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Intro
