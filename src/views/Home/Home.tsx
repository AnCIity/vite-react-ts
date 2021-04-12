import React from 'react'
import instance from '@/services/http'
import './home.styl'

const Home: React.FC = () => (
  <div className='home'>
    <button onClick={() => instance.get('/article/')}>Request</button>
  </div>
)

export default Home
