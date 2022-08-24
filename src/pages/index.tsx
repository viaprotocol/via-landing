import type { NextPage } from 'next'
import { Intro, Investors, Safety } from '@/views/IndexPage'
import { Footer, Header } from '@/components/layout'

const Home: NextPage = () => {
  return (
    <div className="all">
      <div className="limiter">
        <Header />

        <main>
          <Intro />
          <Investors />
          <div className="h-[120px] md:h-[64px]"></div>
          <Safety />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
