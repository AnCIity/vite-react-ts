/**
 * 数值在规定时间内到达目标值
 *
 * @param targetValue 目标值
 * @param time 耗时
 * @param callback 回调函数
 */
const transformNumber = (targetValue: number, time: number, callback: (v: number) => void) => {
  // 需求思考：
  // 3s完成 4ms变动一次 计算3s中变动多少次
  // 4000目标值 每次变动多少才能到达目标值
  const next = targetValue / (time / 4)
  let count = 0

  const id = setInterval(() => {
    if (count >= targetValue) {
      clearInterval(id)
      count = targetValue
    } else {
      count += next
    }

    callback(Math.floor(count)) // only show int
  }, 4)
}

export default transformNumber
