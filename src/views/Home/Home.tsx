import React from 'react'
import instance from '@/services/http'
import useRequest from '@/libs/react/hooks/useLayoutRequest'
import './home.styl'

const Home: React.FC = () => {
  const { loading, result, run } = useRequest<any>(() => instance.get('/article/'))

  return (
    <div className='home'>
      <button onClick={run}>Request</button>

      <p>Loading: {`${loading}`}</p>

      {`${result?.data?.length}`}
    </div>
  )
}

export default Home
