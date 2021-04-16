export interface ICookieOption {
  /**
   *
   */
  expire?: number
  /**
   * 路径
   */
  path?: string
  /**
   *
   */
  secure?: boolean
  /**
   * 域名
   */
  domain?: string
}

export interface ICookie extends ICookieOption {
  /**
   * 前缀
   */
  prefix?: string | ((key: string) => string)
}
