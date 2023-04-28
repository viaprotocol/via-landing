import React from 'react'

import { Section } from '@/components/layout'

function Intro() {
  return (
    <Section className="intro">
      <div className="form-wrapper">
        <a className="form-link" href="https://router.via.exchange" target="_blank" rel="noreferrer">
          <img src="/images/backgrounds/bg-form.svg" />
        </a>
      </div>
      <h1>
        Safe and efficient<br />
        cross-chain router
      </h1>
      <a data-button="large" href="https://router.via.exchange/" target="_blank" rel="noreferrer">Launch dApp</a>
    </Section>
  )
}

export { Intro }
