// import { MAIN_DOMAIN } from '@constants/platform'

// interface IParams {
//   key: string
//   domain?: string
// }

// class Cookie {
//   key: string

//   domain: string

//   constructor({ key, domain = MAIN_DOMAIN }: IParams) {
//     this.key = key
//     this.domain = domain
//   }

//   set(f: string, value: string, options: any = {}) {
//     let cookie = `${this.key + f}=${decodeURIComponent(value)}`
//     if (options) {
//       if (options.expireDays) {
//         const ms = options.expireDays * 24 * 3600 * 1000
//         const date = new Date()
//         date.setTime(date.getTime() + ms)
//         cookie += `;expires=${date.toUTCString()}`
//       }
//       if (options.hours) {
//         const ms = options.hours * 3600 * 1000
//         const date = new Date()
//         date.setTime(date.getTime() + ms)
//         cookie += `;expires=${date.toUTCString()}`
//       }
//       if (options.minutes) {
//         const ms = options.minutes * 60 * 1000
//         const date = new Date()
//         date.setTime(date.getTime() + ms)
//         cookie += `;expires=${date.toUTCString()}`
//       }
//       if (options.seconds) {
//         const ms = options.seconds * 1000
//         const date = new Date()
//         date.setTime(date.getTime() + ms)
//         cookie += `;expires=${date.toUTCString()}`
//       }
//       if (options.path) {
//         cookie += `;path=${options.path}`
//       }
//       if (options.secure) {
//         cookie += ';true'
//       }
//     }
//     cookie += `;domain=${this.domain}`
//     document.cookie = cookie
//   }

//   get(f: string) {
//     const arr = document.cookie.split('; ')
//     const cookie = arr.find(cookie => cookie.includes(`${this.key + f}=`))
//     if (!cookie) return ''
//     return decodeURIComponent(cookie.split('=')[1])
//   }

//   remove(f: string) {
//     this.set(f, '', { seconds: -1, path: '/' })
//   }
// }

// export default Cookie
