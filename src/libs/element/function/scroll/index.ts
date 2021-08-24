/**
 * 文档滚动任务管理
 *
 * Tips:
 */

class Scroll {
  /**
   * 距离顶部数值
   */
  private top = 0

  /**
   * 任务队列
   */
  private queue: ((top: number) => void)[] = []

  constructor() {
    this.init()
  }

  /**
   * 初始化任务
   */
  private init() {
    document.body.onscroll = () => {
      this.top = document.documentElement.scrollTop
      this.test()
    }
  }

  /**
   * 运行任务
   */
  private test() {
    this.queue.forEach(item => item(this.top))
  }

  /**
   * 添加任务
   */
  add(testObj: (top: number) => void, run = false) {
    if (run) testObj(this.top)

    this.queue.push(testObj)
  }

  /**
   * 删除任务
   */
  remove(testObj: (top: number) => void) {
    const index = this.queue.indexOf(testObj)
    if (index !== -1) this.queue.splice(index, 1)
  }
}

/**
 * 滚动任务单例
 */
const scrollTask = new Scroll()

export default scrollTask
