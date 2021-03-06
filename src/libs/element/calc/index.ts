/**
 * 元素获取基于视口坐标
 */
export const elementGetRectByView = (element: HTMLElement) => {
  // 剔除边框
  const rect = element.getBoundingClientRect()
  const top = document.documentElement.clientTop
  const left = document.documentElement.clientLeft

  return {
    top: rect.top - top,
    bottom: document.documentElement.clientHeight - rect.bottom - top,
    left: rect.left - left,
    right: document.documentElement.clientWidth - rect.right - left
  }
}

/**
 * 元素是否完全处于视口
 */
export const elementWhetherAllInView = (element: HTMLElement) => {
  const rect = elementGetRectByView(element)
  return (
    rect.top + element.clientHeight <=
      (window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth) && rect.top >= 0
  )
}

/**
 * 元素是否部分处于视口
 */
export const elementWhetherPartInView = (element: HTMLElement, skew = 0) => {
  const rect = elementGetRectByView(element)
  return (
    rect.top - skew <= (window.innerHeight || document.documentElement.clientWidth || document.body.clientWidth) &&
    rect.top + skew + element.clientHeight > 0
  )
}

/**
 * 元素递归计算 offsetParent offsetLeft offsetTop 属性到 body 的准确值
 */
export const elementCalcOffsetToBody = (element: any, attr: string) => {
  let parent = 0
  if (element.offsetParent) parent = elementCalcOffsetToBody(element.offsetParent, attr)

  return element[attr] + parent
}
