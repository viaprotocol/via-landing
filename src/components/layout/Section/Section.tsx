import React, { PropsWithChildren } from 'react'
import cx from 'classnames'

function Section({ className, children }: PropsWithChildren<{className?: string}>) {
  return (
    <section className={cx(className, 'max-w-[1172px] ml-auto mr-auto px-2.5 md:px-8')}>
      {children}
    </section>
  )
}

export { Section }
