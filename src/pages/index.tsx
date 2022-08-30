import type { NextPage } from 'next'
import { Demo, Intro, Investors, SafetyFirst, Features, TransactionTracking } from '@/views/IndexPage'

import { Footer, Header, MobileMenu } from '@/components/layout'
import { Wallets } from '@/views/IndexPage/Wallets'
import { Shortcuts } from '@/views/IndexPage/Shortcuts'

const Home: NextPage = () => {
  return (
    <>
      <div className="all">
        <div className="limiter">
          <Header />

          <main>
            <Intro />
            <Investors />
            <div className="h-[86px] md:h-[160px]"></div>
            <Demo />
            <div className="h-[120px] md:h-[130px]"></div>
            <SafetyFirst />
            {/* todo: replace spacer after new blocks between */}
            {/* <div className="h-[120px] md:h-[200px]"></div> */}
            <div className="h-4"></div>
            <Features />
            <div className="h-[120px] md:h-[200px]"></div>
            <TransactionTracking />
            <div className="h-[120px] md:h-[200px]"></div>
            <Wallets />
              <div className="h-[120px] md:h-[184px]"></div>
            <Shortcuts />
          </main>

          <Footer />
        </div>
      </div>

      <MobileMenu />
    </>
  )
}

export default Home
