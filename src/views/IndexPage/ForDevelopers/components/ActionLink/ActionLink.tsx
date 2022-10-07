import React from 'react'

import type { TActionLinkProps } from './types'

function ActionLink({ text, href }: TActionLinkProps) {
  return (
    <div>
      <a className="active:bg-acid/20 -ml-2 rounded-lg py-1.5 px-2 font-semibold text-acid/80 hover:bg-acid/10 hover:text-acid" href={href} target="_blank" rel="noreferrer" >{text}</a>
    </div>
  )
}

export { ActionLink }
