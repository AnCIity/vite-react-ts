import React from 'react'

export interface IRoute {
  /**
   * 路径
   */
  path: string
  /**
   * 重定向
   */
  redirect?: string
  /**
   * 是否精确匹配
   */
  exact?: boolean
  /**
   * 权限
   */
  auth?: string[]
  /**
   * 渲染组件
   */
  component?: React.FC<{ routes: IRoute[] }>
  /**
   * 子路由
   */
  routes?: IRoute[]
}

export type IRouteList = IRoute[]
