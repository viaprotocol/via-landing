import type { NextPage } from 'next'
import Header from '../components/Header'
import Intro from '../components/Intro'
import { Footer } from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="all">
      <div className="limiter">
        <Header />

        <main>
          <Intro />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default Home
