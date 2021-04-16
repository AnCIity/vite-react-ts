import { isExpire, now } from '../core'
import { ILocal, ILocalOption, ILocalRaw } from './type'

const { localStorage } = window

/**
 * 设置
 */
export function setLocal<T>(key: string, data: T, option?: ILocalOption | number) {
  if (typeof option === 'number') {
    option = { expire: option }
  } else if (option === undefined) {
    option = {}
  }
  localStorage.setItem(
    key,
    JSON.stringify({
      value: data,
      expire: option.expire ? now() + option.expire : null,
      version: option.version
    })
  )
  return true
}

/**
 * 获取
 */
export const getLocal = <T>(key: string) => {
  const item = localStorage.getItem(key)
  if (item && item[0] === '{') {
    try {
      const data = JSON.parse(item) as ILocalRaw<T>
      if (!isExpire(data.expire)) {
        return data
      }
      // 移除无效 key
      removeLocal(key)
    } catch {
      return null
    }
  }
  return null
}

/**
 * 删除
 */
export const removeLocal = (key: string): void => {
  if (key) {
    localStorage.removeItem(key)
  }
}

/**
 * 本地缓存 默认配置
 */
export const LocalConfig: ILocal<any> = {
  version: undefined,
  expire: undefined,
  prefix: ''
}

export class LocalBase<T> implements ILocal<T> {
  readonly option: ILocalOption = {
    version: LocalConfig.version,
    expire: LocalConfig.expire
  }

  protected defaultValue?: T

  readonly prefix?: string | ((key: string) => string) = LocalConfig.prefix

  constructor(option?: ILocal<T> | number) {
    if (typeof option === 'number') {
      this.option = {
        expire: option
      }
    } else if (option) {
      this.defaultValue = option.value
      if (option.prefix !== undefined) {
        this.prefix = option.prefix
      }

      this.option = { ...this.option, ...option }
    }
  }

  getKey(key: string) {
    if (typeof this.prefix === 'function') {
      return this.prefix(key)
    }
    return (this.prefix || '') + key
  }

  protected isCurrentVersion(version?: string) {
    if (this.option.version) {
      return this.option.version === version
    }
    return true
  }

  protected getLocal(key: string) {
    const data = getLocal<T>(key)
    if (data) {
      if (this.isCurrentVersion(data.version)) {
        return data.value
      }
      removeLocal(key)
    }

    return this.defaultValue
  }
}

/**
 * 本地缓存
 */
export class Local<T = any> extends LocalBase<T> {
  protected _name: string

  constructor(name: string, option?: ILocal<T> | number) {
    super(option)
    this._name = name
  }

  /**
   * cookie键
   */
  get name() {
    if (typeof this.prefix === 'function') {
      return this.prefix(this._name)
    }
    return (this.prefix || '') + this._name
  }

  get() {
    return super.getLocal(this.name)
  }

  set(value: T): void

  set(value: T, expire: number): void

  set(value: T, expire?: number) {
    if (expire === undefined) {
      setLocal(this.name, value, this.option)
    } else {
      setLocal(this.name, value, {
        expire,
        version: this.option.version
      })
    }
  }

  remove() {
    removeLocal(this.name)
  }
}
