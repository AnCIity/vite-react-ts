import { Cookie, CookieConfig } from '@/libs/storage/cookie'

CookieConfig.domain = 'nanzc.com'

/**
 * token
 */
export const token = new Cookie('token')
