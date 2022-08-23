import type { NextPage } from 'next'
import { Intro, Demo } from '@/views/IndexPage'
import { Footer, Header } from '@/components/layout'

const Home: NextPage = () => {
  return (
    <div className="all">
      <div className="limiter">
        <Header />

        <main>
          <Intro />
          <Demo />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
