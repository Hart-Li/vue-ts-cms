<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <div class="content">
      <custom-table :props-list="props" :list-data="userList">
        <template #enable="scope">
          <el-button
            size="small"
            :type="scope.row.enable ? 'success' : 'danger'"
          >
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
        <template #createAt="scope">
          {{ $filters.formatTime(scope.row.createAt) }}
        </template>
      </custom-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
import CustomTable from '@/base-ui/table'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    PageSearch,
    CustomTable
  },
  setup() {
    const store = useStore()
    store.dispatch('getPageListAction', {
      pageUrl: '/users/list',
      queryParams: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.SystemModule.userList)
    const userCount = computed(() => store.state.SystemModule.userCount)

    const props = [
      {
        prop: 'id',
        label: 'ID',
        minWidth: 100
      },
      {
        prop: 'name',
        label: '用户名',
        minWidth: 180
      },
      {
        prop: 'realname',
        label: '姓名',
        minWidth: 100
      },
      {
        prop: 'cellphone',
        label: '手机号',
        minWidth: 100
      },
      {
        prop: 'enable',
        label: '状态',
        minWidth: 100
      },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: 180
      }
    ]
    return {
      searchFormConfig,
      userCount,
      userList,
      props
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  //margin-top: 50px;
  border-top: 20px solid #f5f5f5;
}
</style>
