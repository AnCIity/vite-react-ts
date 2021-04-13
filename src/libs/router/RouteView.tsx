/**
 * @author City
 * @description 路由视图
 * @todo 权限控制
 */

import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IRouteList } from './type'

interface IProps {
  routes: IRouteList
}

const RouteView = (props: IProps) => {
  const { routes } = props

  return (
    <>
      {routes.map(({ path, exact = false, redirect, component: C, routes: children = [] }) => (
        <Route
          key={path}
          path={path}
          exact={!!exact}
          render={() => (redirect ? <Redirect key={path} to={redirect} /> : <>{C ? <C routes={children} /> : '404'}</>)}
        />
      ))}
    </>
  )
}

export default React.memo(RouteView)
