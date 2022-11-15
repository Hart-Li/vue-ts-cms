import commonRequest from '@/service'
import { AccountData, AccountLoginResult, UserInfo } from '@/service/user/types'
import { ResponseData } from '@/service/config/types'

enum UserApi {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: AccountData) {
  return commonRequest.post<ResponseData<AccountLoginResult>>({
    url: UserApi.AccountLogin,
    data: { ...account, name: account.username }
  })
}

export function getUserById(id: number) {
  return commonRequest.get<ResponseData<UserInfo>>({
    url: UserApi.LoginUserInfo + id
  })
}

export function getMenusByRoleId(roleId: number) {
  return commonRequest.get<ResponseData>({
    url: UserApi.UserMenus + roleId + '/menu'
  })
}
