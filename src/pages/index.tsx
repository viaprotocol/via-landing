import type { NextPage } from 'next'
import { Demo, Intro, Investors, Safety, Features } from '@/views/IndexPage'

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
            <Safety />
            <div className="h-[120px] md:h-[200px]"></div>
            <Features />
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
