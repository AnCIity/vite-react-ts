// 函数柯里化: 顺序传参

const currying = (callback: (...args: any[]) => any) => {
  const params: any[] = []

  const fn = (...args: any[]) => {
    params.push(...args)

    fn.toString = () => callback(...params)
    fn.valueOf = () => callback(...params)

    return fn
  }

  return fn
}

export default currying
