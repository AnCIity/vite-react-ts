export const getTodayTime = (decade = true) => {
  const nowTime = new Date()
  const today = [nowTime.getFullYear(), nowTime.getMonth() + 1, nowTime.getDate()].join('-')

  const todayTime = new Date(today).getTime()

  return decade ? todayTime / 1000 : todayTime
}

// 采用时间戳计算
// 时间加减

/**
 * 时间戳间隔
 */
export enum TIME_SPAN {
  /**
   * 毫秒
   */
  ms = 1,
  /**
   * 秒
   */
  second = 1000 * 1,
  /**
   * 分
   */
  minute = 60 * 1000 * 1,
  /**
   * 时
   */
  hour = 3600 * 1000 * 1,
  /**
   * 天
   */
  day = 24 * 3600 * 1000 * 1,
  /**
   * 周
   */
  week = 7 * 24 * 3600 * 1000 * 1,
  /**
   * 月
   */
  month = 30 * 24 * 3600 * 1000 * 1,
  /**
   * 年
   */
  year = 365 * 24 * 3600 * 1000 * 1
}

/**
 * 时间戳间隔
 */
export enum TIME_SPAN_TEN {
  /**
   * 秒
   */
  second = 1,
  /**
   * 分
   */
  minute = 60 * 1,
  /**
   * 时
   */
  hour = 3600 * 1,
  /**
   * 天
   */
  day = 24 * 3600 * 1,
  /**
   * 周
   */
  week = 7 * 24 * 3600 * 1,
  /**
   * 月
   */
  month = 30 * 24 * 3600 * 1,
  /**
   * 年
   */
  year = 365 * 24 * 3600 * 1
}
