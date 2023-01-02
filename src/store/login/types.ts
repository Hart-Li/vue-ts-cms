import { UserInfo } from '@/service/login/types'

export interface UserState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}
