import React, { PropsWithChildren } from 'react'
import cx from 'classnames'

function Section({ className, children }: PropsWithChildren<{className?: string}>) {
  return (
    <section className={cx(className, 'max-w-[1172px] ml-auto mr-auto')}>
      {children}
    </section>
  )
}

export { Section }
