import type { NextPage } from 'next'
import Header from '../Components/Header'
import Trending from '../Components/Trending'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mt-10" />
      <Trending />
      <div className="mt-20" />
    </div>
  )
}

export default Home
