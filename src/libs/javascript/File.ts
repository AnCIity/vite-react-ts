/**
 * 复制文本至剪切板
 */
export const copyToClipboard = (copyString = '') =>
  new Promise((resolve, reject) => {
    try {
      if (window && (window as any)?.clipboardData) {
        ;(window as any).clipboardData.setData('text', copyString)

        resolve(false)
      } else {
        ;(s => {
          document.oncopy = e => {
            e.clipboardData?.setData('text', s)
            e.preventDefault()
            document.oncopy = null

            resolve(false)
          }
        })(copyString)
        document.execCommand('Copy')
      }
    } catch (error) {
      reject()
    }
  })

/**
 * 保存base64到文件
 */
export const saveFile = (data: any, filename: string) => {
  if (window.navigator.msSaveOrOpenBlob) {
    const bstr = atob(data.split(',')[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n) {
      u8arr[n] = bstr.charCodeAt(n)
      n -= 1
    }
    const blob = new Blob([u8arr])
    window.navigator.msSaveOrOpenBlob(blob, filename)
  } else {
    const aLink = document.createElement('a')
    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', true, true) // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
    aLink.download = filename
    aLink.href = data
    aLink.click()
  }
}
