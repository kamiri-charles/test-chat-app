import React from 'react'
import Navbar from '../Navbar'
import ChatWrapper from '../ChatWrapper'

const Home: React.FC = () => {
  return (
    <div className='home'>
        <Navbar />
        <ChatWrapper />
    </div>
  )
}

export default Home