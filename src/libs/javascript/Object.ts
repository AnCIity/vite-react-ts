/**
 * 删除对象元素
 */
export const deleteObject = <T extends { [k: string]: any }>(key: string, obj: T): T => {
  if (obj[key]) delete obj[key]

  return { ...obj }
}
