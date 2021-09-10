interface IOptions {
  /**
   * 立即执行
   *
   * default = true
   */
  immediate?: boolean
  /**
   * 间隔
   *
   * default = 1000
   */
  interval?: number
}

/**
 * 创建节流函数
 * @param callback 执行函数
 * @param interval
 * @returns 执行函数
 */
const createThrottleInterval = <T extends (...args: any[]) => void>(
  callback: T,
  options: IOptions | number = 1000
): T => {
  /**
   * 立即执行
   */
  const immediate = typeof options === 'number' ? false : options.immediate || true
  /**
   * 间隔
   */
  const interval = typeof options === 'number' ? options : options.interval || 1000
  /**
   * 上次执行时间
   */
  let prevTime = 0

  /**
   * 节流函数
   */
  const throttled = (...args: any[]) => {
    const nowTime = +new Date()
    const nowInterval = nowTime - prevTime

    if (nowInterval > interval) {
      callback(...args)
      prevTime = nowTime
    }
  }

  return throttled as T
}

export default createThrottleInterval
