import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'

interface IOptions {
  /**
   * 根 DOM
   */
  root?: HTMLElement
  /**
   * 是否存活
   */
  isAlive?: boolean
}

const reactDirectiveCore = (element: ReactElement, options: IOptions = {}): HTMLElement => {
  const { root = document.body, isAlive = false } = options

  const mountDom = document.createElement('div')
  root.appendChild(mountDom)

  // 向组件注入 onClose 方法，以便组件能调用关闭
  const Clone = React.cloneElement(element, {
    visible: true,
    hide: () => {
      if (!isAlive) {
        ReactDOM.unmountComponentAtNode(mountDom)
        mountDom.parentNode?.removeChild(mountDom)
        return
      }

      mountDom.style.display = 'none'
    }
  })

  ReactDOM.render(Clone, mountDom)

  return mountDom
}

export class DirectiveElement {
  private mountDom: HTMLElement | undefined

  constructor(private element: ReactElement, private options: IOptions = { root: document.body }) {}

  open() {
    // 不存活
    if (!this.options.isAlive) {
      reactDirectiveCore(this.element, this.options)
      return
    }

    // 存在 DOM
    if (this.mountDom) {
      this.mountDom.style.display = 'block'
      return
    }

    // 不存在 DOM
    this.mountDom = reactDirectiveCore(this.element, this.options)
  }
}
