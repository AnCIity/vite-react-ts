// import { elementGetRectByView } from '../../calc'

/**
 * 元素移动
 */
class MoveElement {
  private flag = false

  constructor(private readonly element: HTMLElement) {
    this.mount()
  }

  private mount() {
    // 元素初始样式
    this.element.style.position = 'fixed'
    this.element.style.cursor = 'default'
    this.element.style.top = '0'
    this.element.style.left = '0'

    // 设置过度效果

    this.element.addEventListener('mousedown', e => this.down(e))
    this.element.addEventListener('mousemove', e => this.move(e))
    this.element.addEventListener('mouseup', e => this.up(e))
  }

  private down(_e: MouseEvent) {
    this.flag = true

    return this.element
  }

  private move(e: MouseEvent) {
    if (!this.flag) return
    this.element.style.cursor = 'move'

    const { movementX, movementY } = e

    this.element.style.top = `${parseFloat(this.element.style.top) + movementY}px`
    this.element.style.left = `${parseFloat(this.element.style.left) + movementX}px`
  }

  private up(_e: MouseEvent) {
    this.flag = false

    /* 恢复样式 */
    this.element.style.cursor = 'default'
  }
}

export default MoveElement
