import { Module } from 'vuex'
import { UserState } from '@/store/user/types'
import { IRootState } from '@/store/types'
import {
  accountLoginRequest,
  getUserById,
  getMenusByRoleId
} from '@/service/user/user'
import { UserInfo } from '@/service/user/types'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

const UserModule: Module<UserState, IRootState> = {
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: UserInfo) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
      const routes = mapMenusToRoutes(userMenus)
      for (const route of routes) {
        router.addRoute('main', route)
      }
    }
  },
  actions: {
    async loginAction({ commit }, payload: any) {
      const loginResult = await accountLoginRequest(payload)
      const token = loginResult.data.token
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 请求获取用户信息
      const userResult = await getUserById(loginResult.data.id)
      const userInfo = userResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 请求获取用户的菜单列表
      const userMenusResult = await getMenusByRoleId(userInfo.role.id)
      console.log(userMenusResult)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)
      // 调到首页
      await router.push('/main')
    },
    mobileLogin({ commit }, payload: any) {
      console.log('执行手机登录', payload)
    }
  },
  getters: {}
}

export default UserModule
