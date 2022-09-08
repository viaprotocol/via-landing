import type { NextPage } from 'next'
import { Demo, Intro, Investors, SafetyFirst, Features, ForDevelopers, ForOrganizations, TransactionTracking } from '@/views/IndexPage'

import { Footer, Header, MobileMenu } from '@/components/layout'
import { Wallets } from '@/views/IndexPage/Wallets'
import { Shortcuts } from '@/views/IndexPage/Shortcuts'
import { Supported } from '@/views/IndexPage/Supported'

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
            <div className="h-[120px] md:h-[200px]"></div>
            <Supported />
            <Features />
            <div className="h-[120px] md:h-[200px]"></div>
            <ForOrganizations />
            <div className="h-[120px] md:h-[200px]"></div>
            <Wallets />
            <div className="h-[120px] md:h-[184px]"></div>
            <Shortcuts />
            <div className="h-[120px] md:h-[200px]"></div>
            <TransactionTracking />
            <div className="h-[120px] md:h-[200px]"></div>
            <ForDevelopers />
          </main>

          <Footer />
        </div>
      </div>

      <MobileMenu />
    </>
  )
}

export default Home
