/**
 * 删除数组元素
 */
export const deleteArray = (value: any, array: any[]): any[] => {
  const index = array.findIndex(v => v === value)
  if (index !== -1) array.splice(index, 1)

  return [...array]
}

/**
 * 删除数组元素根据条件
 */
export const deleteArrayBy = (
  callback: (value: any, index: number, obj: any[]) => unknown,
  array: any[]
): any[] => {
  const index = array.findIndex(callback)

  if (index !== -1) array.splice(index, 1)

  return [...array]
}
