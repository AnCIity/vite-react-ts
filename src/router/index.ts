import { IRouteList } from '@/libs/router/type'
import Code from '@/views/Code/Code'
import Home from '@/views/Home/Home'

const routes: IRouteList = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/code',
    exact: true,
    component: Code
  }
]

export default routes
