/**
 * @author City
 * @description 内存缓存
 */

import { IObject } from '@/typings'

/**
 * 内存缓存
 */
class Cache {
  private cache: IObject = {}

  /**
   * 设置
   */
  set(k: string, v: unknown): void {
    this.cache[k] = v
  }

  /**
   * 获取
   */
  get(k: string): void {
    return this.cache[k]
  }

  /**
   * 删除
   */
  remove(k: string): void {
    delete this.cache[k]
  }

  /**
   * 是否有缓存
   */
  has(k: string): boolean {
    return !!this.cache[k]
  }

  /**
   * 清空
   */
  clear(): void {
    this.cache = {}
  }
}

export default Cache
