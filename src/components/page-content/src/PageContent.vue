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
      <template #handlerBtns>
        <el-button text link style="color: #64b2fe">
          <el-icon>
            <Edit />
          </el-icon>
          编辑
        </el-button>
        <el-button text link style="color: #64b2fe">
          <el-icon>
            <Delete />
          </el-icon>
          删除
        </el-button>
      </template>
      <template #headerHandler>
        <el-button type="primary">
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
  setup(props) {
    const store = useStore()
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })
    watch(pageInfo, () => getContentData())
    const getContentData = (queryData: any = {}) => {
      store.dispatch('getPageListAction', {
        pageName: props.pageName,
        queryParams: {
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
    console.log(otherPropSlots)
    return {
      dataList,
      dataCount,
      getContentData,
      pageInfo,
      otherPropSlots
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
