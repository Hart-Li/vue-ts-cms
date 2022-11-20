import { UserInfo } from '@/service/user/types'

export interface UserState {
  token: string
  userInfo: any
  userMenus: any
  permissions: string[]
}
