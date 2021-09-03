/**
 * 首字母大写
 */
export const initialUpper = (text: string) => text.slice(0, 1).toLocaleUpperCase() + text.slice(1)

/**
 * 首字母小写
 */
export const initialLower = (text: string) => text.slice(0, 1).toLocaleLowerCase() + text.slice(1)
