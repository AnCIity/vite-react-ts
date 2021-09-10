import React from 'react'
import instance from '@/services/http'
import useRequest from '@/libs/react/hooks/useLayoutRequest'
import LazyView from '@/libs/react/components/LazyView/LazyView'
import './home.styl'

const numberList = [
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01iBCvnc1JTKFZ8yp7F-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN011AT2In1JTKFizJMb6-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01FFieTz1JTKFX5SKit-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN01w7V2ff1JTKFfZZ5KB-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i2/1109671029/O1CN01PUb2mT1JTKFizM2w8-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i4/1109671029/O1CN01tJBqKN1JTKFiFHTa3-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01iBCvnc1JTKFZ8yp7F-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN011AT2In1JTKFizJMb6-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01FFieTz1JTKFX5SKit-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN01w7V2ff1JTKFfZZ5KB-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i2/1109671029/O1CN01PUb2mT1JTKFizM2w8-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i4/1109671029/O1CN01tJBqKN1JTKFiFHTa3-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01iBCvnc1JTKFZ8yp7F-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN011AT2In1JTKFizJMb6-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01FFieTz1JTKFX5SKit-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN01w7V2ff1JTKFfZZ5KB-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i2/1109671029/O1CN01PUb2mT1JTKFizM2w8-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i4/1109671029/O1CN01tJBqKN1JTKFiFHTa3-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01iBCvnc1JTKFZ8yp7F-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN011AT2In1JTKFizJMb6-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01FFieTz1JTKFX5SKit-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN01w7V2ff1JTKFfZZ5KB-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i2/1109671029/O1CN01PUb2mT1JTKFizM2w8-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i4/1109671029/O1CN01tJBqKN1JTKFiFHTa3-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01iBCvnc1JTKFZ8yp7F-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN011AT2In1JTKFizJMb6-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01FFieTz1JTKFX5SKit-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN01w7V2ff1JTKFfZZ5KB-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i2/1109671029/O1CN01PUb2mT1JTKFizM2w8-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i4/1109671029/O1CN01tJBqKN1JTKFiFHTa3-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01iBCvnc1JTKFZ8yp7F-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN011AT2In1JTKFizJMb6-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i1/1109671029/O1CN01FFieTz1JTKFX5SKit-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i3/1109671029/O1CN01w7V2ff1JTKFfZZ5KB-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i2/1109671029/O1CN01PUb2mT1JTKFizM2w8-1109671029.jpg',
  'https://img.alicdn.com/imgextra/i4/1109671029/O1CN01tJBqKN1JTKFiFHTa3-1109671029.jpg'
]

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
            <LazyView>
              <img src={num} alt='' />
            </LazyView>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
