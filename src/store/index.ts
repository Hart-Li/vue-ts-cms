import { createStore } from 'vuex'

import { IRootState, IStoreType } from './types'

import UserModule from '@/store/login/login'
import SystemModule from '@/store/main/system/system'
import localCache from '@/utils/cache'
import { getPageListData } from '@/service/main/system/system'

const store = createStore<IRootState>({
  state: () => {
    return {
      title: '测试标题',
      entireDepartment: [],
      entireRole: [],
      entireMenu: []
    }
  },
  mutations: {
    changeEntireDepartment(state, payload) {
      state.entireDepartment = payload
    },
    changeEntireRole(state, payload) {
      state.entireRole = payload
    },
    changeEntireMenu(state, payload) {
      state.entireMenu = payload
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 请求所有的部门和角色数据
      const departmentResult = await getPageListData('department/list', {
        offset: 1,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data
      const roleResult = await getPageListData('role/list', {
        offset: 1,
        size: 1000
      })
      const { list: roleList } = roleResult.data
      const menuResult = await getPageListData('menu/list', {})
      const { list: menuList } = menuResult.data
      commit('changeEntireDepartment', departmentList)
      commit('changeEntireRole', roleList)
      commit('changeEntireMenu', menuList)
    }
  },
  getters: {},
  modules: {
    UserModule,
    SystemModule
  }
})

export function setupStore() {
  const token = localCache.getCache('token')
  if (token) {
    store.commit('changeToken', token)
    store.dispatch('getInitialDataAction')
  }
  const userInfo = localCache.getCache('userInfo')
  if (userInfo) {
    store.commit('changeUserInfo', userInfo)
  }
  const userMenus = localCache.getCache('userMenus')
  if (userMenus) {
    store.commit('changeUserMenus', userMenus)
  }
  // store.dispatch('getInitialDataAction')
}

export default store
