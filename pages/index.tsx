import type { NextPage } from 'next'
import Header from '../components/Header'
import Intro from '../components/Intro'

const Home: NextPage = () => {
  return (
    <div className="all">
      <div className="limiter">
        <Header></Header>

        <main>
          <Intro />
        </main>
      </div>
    </div>
  )
}

export default Home
