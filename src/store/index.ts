import { createStore } from 'vuex'

import { IRootStore } from './types'

import UserModule from '@/store/user/user'
import localCache from '@/utils/cache'

const store = createStore<IRootStore>({
  state: () => {
    return {
      title: '测试标题'
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    UserModule
  }
})

export function setupStore() {
  const token = localCache.getCache('token')
  if (token) {
    store.commit('changeToken', token)
  }
  const userInfo = localCache.getCache('userInfo')
  if (userInfo) {
    store.commit('changeUserInfo', userInfo)
  }
  const userMenus = localCache.getCache('userMenus')
  if (userMenus) {
    store.commit('changeUserMenus', userMenus)
  }
}

export default store
