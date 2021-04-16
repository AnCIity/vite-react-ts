export const now = () => +new Date()

export const isExpire = (_expire?: number) => {
  if (_expire) {
    return _expire < now()
  }
  return false
}
