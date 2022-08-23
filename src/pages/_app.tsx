import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <title>Via Protocol | Advanced Cross-Chain Liquidity Aggregation Protocol</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
