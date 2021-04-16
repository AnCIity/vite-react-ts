export interface ILocalOption {
  /**
   *
   */
  expire?: number
  /**
   *
   */
  version?: string
}

export interface ILocal<T> extends ILocalOption {
  /**
   * 前缀
   */
  prefix?: string | ((key: string) => string)

  value?: T
}

export interface ILocalRaw<T> extends ILocalOption {
  value: T
}
