/**
 * @author City
 * @description axios封装，请求拦截、响应拦截、错误统一处理
 */

import axios from 'axios'
// 用于调用挂载自己封装的 message
// import Vue from "vue";

/* 创建 axios 实例 */
const instance = axios.create({ baseURL: '/api' })
/* 设置 post请求头 */
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* 添加请求拦截器 */
instance.interceptors.request.use(
  config =>
    // 在发送请求之前做些什么

    config,
  error =>
    // 对请求错误做些什么

    error
)

/* 添加响应拦截器 */
instance.interceptors.response.use(
  response =>
    // 对响应数据做点什么

    response,
  error =>
    // 对响应错误做点什么

    error
)

export default instance
