import type { NextPage } from 'next'
import { Demo, Intro, Investors, SafetyFirst, Features, ForDevelopers, TransactionTracking } from '@/views/IndexPage'

import { Footer, Header, MobileMenu } from '@/components/layout'
import { Wallets } from '@/views/IndexPage/Wallets'
import { Supported } from '@/views/IndexPage/Supported'
import { Ecosystem } from '@/views/IndexPage/Ecosystem'
import styles from '@/styles/Common.module.scss'

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
            <Ecosystem />
            <div className="h-[120px] md:h-[200px]"></div>
            <div className={styles.leftDot}>
              <Wallets />
            </div>
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
