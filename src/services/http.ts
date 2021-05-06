/**
 * @author City
 * @description axios封装，请求拦截、响应拦截、错误统一处理
 */

import { token } from '@/utils/cookie'
import axios from 'axios'

/* 创建 axios 实例 */
const instance = axios.create({ baseURL: import.meta.env.BASE_URL, timeout: 10000 })

// 异常拦截处理器
const errorHandler = (error: any) => {
  const { status } = error.response

  const err = error

  switch (status) {
    case 400:
      err.message = '请求错误'
      break
    case 401:
      err.message = '未授权，请登录'
      token.remove()
      break
    case 403:
      err.message = '拒绝访问'
      break
    case 404:
      err.message = `请求地址出错: ${error.response.config.url}`
      break
    case 408:
      err.message = '请求超时'
      break
    case 500:
      err.message = '服务器内部错误'
      break
    case 501:
      err.message = '服务未实现'
      break
    case 502:
      err.message = '网关错误'
      break
    case 503:
      err.message = '服务不可用'
      break
    case 504:
      err.message = '网关超时'
      break
    case 505:
      err.message = 'HTTP版本不受支持'
      break
    default:
      break
  }

  return Promise.reject(error)
}

/* 添加请求拦截器 */
instance.interceptors.request.use(config => {
  config.headers.authorization = token.get()

  return config
}, errorHandler)

/* 添加响应拦截器 */
instance.interceptors.response.use(response => {
  if (response.headers.authorization) {
    token.set(response.headers.authorization)
  }

  return response
}, errorHandler)

export default instance
