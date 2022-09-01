import React from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { VIA_SDK_SNIPPET } from './config'

import { sublime } from '@uiw/codemirror-theme-sublime'

function Sdk() {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="w-full p-10 lg:w-1/2">
        <h3 className="mb-3 text-[32px] font-semibold">SDK</h3>
        <p className="max-w-[300px] text-[24px] text-white/40">
          Show routes 5 times faster than with other aggregators API
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <CodeMirror
          value={VIA_SDK_SNIPPET}
          height="480px"
          extensions={[
            javascript({ jsx: true })
          ]}
          theme={sublime}
          editable={false}
          basicSetup={{
            foldGutter: false
          }}
        />
      </div>
    </div>
  )
}

export { Sdk }
