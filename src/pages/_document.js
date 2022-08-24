import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#000000" />
          <link rel="apple-touch-icon" href="/images/meta/meta-logo-192.png" />
          <link rel="manifest" href="/manifest.json" />

          <meta
            name="description"
            content="Via Protocol unites cross-chain protocols and finds the cheapest 1-transaction any-to-any swaps."
          />

          <meta property="og:url" content="https://via.exchange/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Via Protocol | Advanced Cross-Chain Liquidity Aggregation Protocol" />
          <meta
            property="og:description"
            content="Via Protocol unites cross-chain protocols and finds the cheapest 1-transaction any-to-any swaps."
          />
          <meta property="og:image" content="/images/meta/meta-preview-fb.jpg" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="via.exchange" />
          <meta property="twitter:url" content="https://via.exchange/" />
          <meta name="twitter:title" content="Via Protocol | Advanced Cross-Chain Liquidity Aggregation Protocol" />
          <meta
            name="twitter:description"
            content="Via Protocol unites cross-chain protocols and finds the cheapest 1-transaction any-to-any swaps."
          />
          <meta name="twitter:image" content="/images/meta/meta-preview.jpg" />
          <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;700&display=optional" rel="stylesheet" />
        </Head>
        <body className='dark'>
          <Main />
          <NextScript />
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer', 'GTM-NZG9GMK');
            `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
