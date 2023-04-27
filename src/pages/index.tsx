import type { NextPage } from 'next'
import { Demo, Intro, Stats, Investors, SafetyFirst, Features, ForDevelopers, TransactionTracking } from '@/views/IndexPage'

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
            <div className="h-[80px] md:h-[100px]" />
            <Stats />
            <div className="h-[120px] md:h-[200px]" />
            <Investors />
            <div className="h-[86px] md:h-[160px]" />
            <Demo />
            <div className="h-[120px] md:h-[130px]" />
            <SafetyFirst />
            <div className="h-[120px] md:h-[200px]" />
            <Supported />
            <Features />
            <div className="h-[120px] md:h-[200px]" />
            <Ecosystem />
            <div className="h-[120px] md:h-[200px]" />
            <div className={styles.leftDot}>
              <Wallets />
            </div>
            <div className="h-[120px] md:h-[200px]" />
            <TransactionTracking />
            <div className="h-[120px] md:h-[200px]" />
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
