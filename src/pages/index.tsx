import type { NextPage } from 'next'
import { Intro, Investors } from '@/views/IndexPage'
import { Footer, Header } from '@/components/layout'

const Home: NextPage = () => {
  return (
    <div className="all">
      <div className="limiter">
        <Header />

        <main>
          <Intro />
          <Investors />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
