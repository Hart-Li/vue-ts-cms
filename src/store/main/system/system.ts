import { Module } from 'vuex'
import { ISystemState } from '@/store/main/system/types'
import { IRootState } from '@/store/types'
import { deletePageData, getPageListData } from '@/service/main/system/system'

const SystemModule: Module<ISystemState, IRootState> = {
  state() {
    return {
      dataList: [],
      dataCount: 0
    }
  },
  actions: {
    async getPageListAction({ commit }, payload) {
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      const data = await getPageListData(pageUrl, payload.queryParams)
      const { list, totalCount } = data.data
      commit('changeDataList', list)
      commit('changeDataCount', totalCount)
    },
    async deletePageDataAction({ dispatch }, payload) {
      const { pageName, id } = payload
      const url = `/${pageName}/${id}`
      console.log(url)
      await deletePageData(url)
      dispatch('getPageListAction', {
        pageName,
        queryParams: { offset: 0, size: 10 }
      })
    }
  },
  mutations: {
    changeDataList(state, dataList) {
      state.dataList = dataList
    },
    changeDataCount(state, dataCount) {
      state.dataCount = dataCount
    }
  }
}

export default SystemModule
