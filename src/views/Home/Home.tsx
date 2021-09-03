import message from '@/libs/react/components/Message'
import React, { useEffect } from 'react'
// import instance from '@/services/http'
// import MoveElement from '@/libs/element/function/moveElement'
import './home.styl'

const Home: React.FC = () => {
  useEffect(() => {
    // const element = document.getElementById('move-test')
    // if (!element) return
    // const moveElement = new MoveElement(element)
  }, [])

  return (
    <div className='home'>
      {/* <button onClick={() => instance.get('/article/')}>Request</button> */}

      <div onClick={() => message.success('123')}>Success</div>
      <div onClick={() => message.error('123')}>Error</div>
      <div onClick={() => message.warning('123')}>Warning</div>

      {/* <div id='move-test' /> */}
    </div>
  )
}

export default Home
