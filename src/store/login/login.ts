import { Module } from 'vuex'
import { UserState } from '@/store/login/types'
import { IRootState } from '@/store/types'
import {
  accountLoginRequest,
  getUserById,
  getMenusByRoleId
} from '@/service/login/login'
import { UserInfo } from '@/service/login/types'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToPermissions, mapMenusToRoutes } from '@/utils/map-menus'
import { deletePageData } from '@/service/main/system/system'

const UserModule: Module<UserState, IRootState> = {
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: {},
      permissions: []
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

      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async loginAction({ commit, dispatch }, payload: any) {
      const loginResult = await accountLoginRequest(payload)
      const token = loginResult.data.token
      commit('changeToken', token)
      localCache.setCache('token', token)
      // 发送初始化请求
      dispatch('getInitialDataAction', null, { root: true })
      // 请求获取用户信息
      const userResult = await getUserById(loginResult.data.id)
      const userInfo = userResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)
      // 请求获取用户的菜单列表
      const userMenusResult = await getMenusByRoleId(userInfo.role.id)
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
