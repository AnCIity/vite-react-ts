import { TIME_SPAN } from './const'
import { ICookie, ICookieOption } from './type'

/**
 * 获取cookie
 */
export const getCookie = (key: string): string => {
  const str = `${key}=`
  const { cookie } = document
  const cLen = cookie.length
  let i

  do {
    i = cookie.indexOf(str, i)
    if (i === -1) break
    if (i !== 0 && cookie[i - 1] !== ' ') {
      i += str.length
    } else {
      let end = cookie.indexOf(';', i + str.length)
      if (end === -1) end = cLen
      return decodeURIComponent(cookie.substring(i + str.length, end))
    }
  } while (i < cLen)

  return ''
}

/**
 * 设置cookie
 */
export const setCookie = (key: string, value: string, option?: ICookieOption): void => {
  const arr = [`${key}=${decodeURIComponent(value)}`]
  if (option) {
    const date = new Date()
    date.setTime(date.getTime() + (option.expire === undefined ? TIME_SPAN.year : option.expire))
    arr.push(`expires=${date.toUTCString()}`)
    if (option.path) {
      arr.push(`path=${option.path}`)
    }
    if (option.secure) {
      arr.push(`secure=true`)
    }
    if (option.domain) {
      arr.push(`domain=${option.domain}`)
    }
  }
  document.cookie = arr.join(';')
}

/**
 * 删除cookie
 */
export const removeCookie = (key: string): void => {
  document.cookie = `${key}=;expires=${new Date(0)}`
}

/**
 * cookie 默认配置
 */
export const CookieConfig: ICookie = {
  expire: undefined,
  path: '/',
  secure: false,
  domain: document.domain,
  prefix: ''
}

/**
 * cookie
 */
export class Cookie implements ICookie {
  readonly option: ICookieOption = {
    expire: CookieConfig.expire,
    path: CookieConfig.path,
    secure: CookieConfig.secure,
    domain: CookieConfig.domain
  }

  readonly prefix?: string | ((key: string) => string) = CookieConfig.prefix

  protected _name: string

  /**
   * cookie键
   */
  get name(): string {
    if (typeof this.prefix === 'function') {
      return this.prefix(this._name)
    }
    return (this.prefix || '') + this._name
  }

  constructor(name: string, option?: ICookie | number) {
    this._name = name
    if (typeof option === 'number') {
      this.option.expire = option
    } else if (option) {
      if (option.prefix !== undefined) {
        this.prefix = option.prefix
      }

      this.option = { ...this.option, ...option }
    }
  }

  get(): string {
    return getCookie(this.name)
  }

  set(value: string): void

  set(value: string, expire: number): void

  set(value: string, expire?: number): void {
    if (expire === undefined) {
      setCookie(this.name, value, this.option)
    } else {
      setCookie(this.name, value, {
        ...this.option,
        expire
      })
    }
  }

  remove(): void {
    removeCookie(this.name)
  }
}
