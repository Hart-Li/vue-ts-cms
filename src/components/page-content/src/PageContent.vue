<template>
  <div class="content">
    <custom-table
      v-bind="contentTableConfig"
      :list-data="dataList"
      :total-count="dataCount"
      v-model:page="pageInfo"
    >
      <template #statusBtn="scope">
        <el-button size="small" :type="scope.row.enable ? 'success' : 'danger'">
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #handlerBtns="scope" v-if="isUpdate || isDelete">
        <el-button
          text
          link
          style="color: #64b2fe"
          v-if="isUpdate"
          @click="handleEditClick(scope.row)"
        >
          <el-icon>
            <Edit />
          </el-icon>
          编辑
        </el-button>
        <el-button
          text
          link
          style="color: #64b2fe"
          v-if="isDelete"
          @click="handleDeleteClick(scope.row)"
        >
          <el-icon>
            <Delete />
          </el-icon>
          删除
        </el-button>
      </template>
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate" @click="handleInsertClick">
          <el-icon>
            <CirclePlus />
          </el-icon>
          新建用户
        </el-button>
      </template>

      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName"></template>
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </custom-table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import CustomTable from '@/base-ui/table'
import { useStore } from 'vuex'
import { userPermission } from '@/hooks/userPermission'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: { CustomTable },
  emits: ['handleInsertClick', 'handleEditClick'],
  setup(props, { emit }) {
    const store = useStore()

    const isCreate = userPermission(props.pageName, 'create')
    const isUpdate = userPermission(props.pageName, 'update')
    const isDelete = userPermission(props.pageName, 'delete')
    const isQuery = userPermission(props.pageName, 'query')

    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getContentData())
    const getContentData = (queryData: any = {}) => {
      if (!isQuery) return
      store.dispatch('getPageListAction', {
        pageName: props.pageName,
        params: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryData
        }
      })
    }
    getContentData()
    const dataList = computed(() => store.state.SystemModule.dataList)
    const dataCount = computed(() => store.state.SystemModule.dataCount)
    const otherPropSlots = props.contentTableConfig?.propsList.filter(
      (item: any) => {
        if (item.slotType != 'DYNAMIC') return false
        return true
      }
    )
    const handleDeleteClick = (rowData: any) => {
      store.dispatch('deletePageDataAction', {
        pageName: props.pageName,
        id: rowData.id
      })
    }
    const handleInsertClick = () => {
      emit('handleInsertClick')
    }
    const handleEditClick = (rowData: any) => {
      emit('handleEditClick', rowData)
    }
    return {
      dataList,
      dataCount,
      getContentData,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      isQuery,
      handleDeleteClick,
      handleInsertClick,
      handleEditClick
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
