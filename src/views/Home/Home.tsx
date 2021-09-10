import React from 'react'
import instance from '@/services/http'
import useRequest from '@/libs/react/hooks/useLayoutRequest'
import { generateNumberArray } from '@/libs/javascript/Number'
import LazyView from '@/libs/react/components/LazyView/LazyView'
import './home.styl'

const numberList = generateNumberArray(1, 1)

const Home: React.FC = () => {
  const { loading, result, run } = useRequest<any>(() => instance.get('/article/'))

  return (
    <div className='home' style={{ paddingBottom: '2000px' }}>
      <button onClick={run}>Request</button>

      <p>Loading: {`${loading}`}</p>

      {`${result?.data?.length}`}

      <ul className='lazy-view'>
        {numberList.map(num => (
          <li className='lazy-item' key={num}>
            <LazyView>{num}</LazyView>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
