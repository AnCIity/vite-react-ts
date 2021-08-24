import { IAllProps } from '@typings/public/types'

/**
 * 删除对象元素
 */
export const deleteObject = <T extends IAllProps>(key: string, obj: T): T => {
  if (obj[key]) delete obj[key]

  return { ...obj }
}
