import type { NextPage } from 'next'
import { Demo, Intro, Investors, Safety, Features } from '@/views/IndexPage'
import { Footer, Header } from '@/components/layout'

const Home: NextPage = () => {
  return (
    <div className="all">
      <div className="limiter">
        <Header />

        <main>
          <Intro />
          <Demo />
          <Investors />
          <div className="h-[86px] md:h-[150px]"></div>
          <Safety />
          <div className="h-[120px] md:h-[200px]"></div>
          <Features />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
