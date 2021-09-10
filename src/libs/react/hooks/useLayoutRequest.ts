import { useCallback, useEffect, useState } from 'react'

interface IOptions {
  /**
   * 立即执行
   * default = false
   */
  immediate: boolean
}

const useRequest = <T>(service: () => Promise<T>, options?: IOptions) => {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<T>()
  const [error, setError] = useState<Error | null>(null)

  const run = useCallback(() => {
    setLoading(true)
    setError(null)

    service()
      .then(res => setResult(res))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [service])

  useEffect(() => {
    if (options?.immediate && run) run()
  }, [options?.immediate, run])

  return { loading, result, error, run }
}

export default useRequest
