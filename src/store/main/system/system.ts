import { Module } from 'vuex'
import { ISystemState } from '@/store/main/system/types'
import { IRootState } from '@/store/types'
import { getPageListData } from '@/service/main/system/system'

const SystemModule: Module<ISystemState, IRootState> = {
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const data = await getPageListData(payload.pageUrl, payload.queryParams)
      const { list, totalCount } = data.data
      commit('changeUserList', list)
      commit('changeUserCount', totalCount)
    }
  },
  mutations: {
    changeUserList(state, userList) {
      state.userList = userList
    },
    changeUserCount(state, userCount) {
      state.userCount = userCount
    }
  }
}

export default SystemModule
