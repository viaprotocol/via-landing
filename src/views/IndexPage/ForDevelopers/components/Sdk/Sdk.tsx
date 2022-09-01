import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { VIA_SDK_SNIPPET } from './config'

function Sdk() {
  return (
    <>
      Sdk...
      <CodeMirror
        value={VIA_SDK_SNIPPET}
        height="480px"
        extensions={[javascript({ jsx: true })]}
      />
    </>
  )
}

export { Sdk }
