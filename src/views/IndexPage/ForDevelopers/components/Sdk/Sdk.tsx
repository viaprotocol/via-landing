import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { EditorView } from '@codemirror/view'
import { VIA_SDK_SNIPPET } from './config'

import { sublime } from '@uiw/codemirror-theme-sublime'

import RangoIcon from 'public/images/aggregators/rango.svg'
import SymbiosisIcon from 'public/images/aggregators/symbiosis.svg'
import DebridgeIcon from 'public/images/aggregators/debridge.svg'
import LifiIcon from 'public/images/aggregators/lifi.svg'
import XyIcon from 'public/images/aggregators/xy.svg'
import SocketIcon from 'public/images/aggregators/socket.svg'
import ViaIcon from 'public/images/aggregators/via.svg'

import Client1Icon from 'public/images/clients/client-1.svg'
import Client2Icon from 'public/images/clients/client-2.svg'
import { ActionLink } from '../ActionLink'

function Sdk() {
  return (
    <div className="flex w-full flex-col lg:flex-row">
      <div className="flex w-full flex-col p-10 lg:w-1/2 lg:justify-between">
        <div>
          <h3 className="mb-3 text-[28px] font-semibold leading-[40px] lg:text-[32px] lg:leading-[44px]">SDK</h3>
          <p className="mb-6 max-w-[490px] text-[24px] leading-[32px] text-white/40 lg:mb-4 lg:text-[24px] lg:leading-[36px]">
            Show routes 5 times faster than with other aggregators SDK
          </p>
          <div className="mt-6 flex gap-2">
            <RangoIcon />
            <SymbiosisIcon />
            <DebridgeIcon />
            <LifiIcon />
            <XyIcon />
            <SocketIcon />
            <ViaIcon />
          </div>
          <div className="mt-8">
            <ActionLink text="Learn more" href="https://github.com/viaprotocol/via-sdk-js#readme" />
          </div>
        </div>
        <div className="mt-11">
          <div className="mb-5 font-semibold">Selected clients</div>
          <div className="flex flex-wrap gap-6">
            <Client1Icon />
            <Client2Icon />
          </div>
        </div>
      </div>
      <div className="relative w-full lg:w-1/2 text-[15px]">
        <CodeMirror
          value={VIA_SDK_SNIPPET}
          height="480px"
          extensions={[
            javascript({ jsx: true }),
            EditorView.lineWrapping
          ]}
          theme={sublime}
          editable={false}
          basicSetup={{
            highlightActiveLine: false,
            highlightActiveLineGutter: false,
            foldGutter: false
          }}
        />
        <CopyToClipboard text={VIA_SDK_SNIPPET}>
          <button className="absolute right-4 bottom-4 rounded-lg bg-darkblack/60 px-2 py-1.5 font-semibold leading-[24px] text-white/80 transition-all hover:bg-darkblack/80 hover:text-white active:text-white/60">Copy</button>
        </CopyToClipboard>
      </div>
    </div>
  )
}

export { Sdk }
