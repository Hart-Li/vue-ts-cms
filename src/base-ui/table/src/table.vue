<template>
  <div class="custom-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ headerTitle }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <div class="table">
      <el-table
        border
        :data="listData"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column
          v-if="showSelectionColumn"
          type="selection"
          align="center"
          width="60"
        ></el-table-column>
        <el-table-column
          v-if="showIndexColumn"
          type="index"
          label="序号"
          align="center"
          width="60"
        ></el-table-column>
        <template v-for="item in propsList" :key="item.prop">
          <el-table-column v-bind="item" align="center" show-overflow-tooltip>
            <template #default="scope">
              <slot :name="item.slotName" :row="scope.row">
                {{ scope.row[item.prop] }}
              </slot>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handlePageSizeChange"
        @current-change="handleCurrentPageChange"
        :current-page="page.currentPage"
        :page-size="page.pageSize"
        :total="totalCount"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Array,
      required: true
    },
    propsList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectionColumn: {
      type: Boolean,
      default: false
    },
    headerTitle: {
      type: String,
      default: ''
    },
    totalCount: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 10 })
    }
  },
  emits: ['selectionChange', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    const handlePageSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentPageChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }
    return {
      handleSelectionChange,
      handlePageSizeChange,
      handleCurrentPageChange
    }
  }
})
</script>

<style scoped lang="less">
.custom-table {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  .header {
    display: flex;
    height: 45px;
    padding: 0 5px;
    justify-content: space-between;
    align-items: center;

    .title {
      font-size: 20px;
      font-weight: 700;
    }

    .handler {
      align-items: center;
    }
  }

  //.table {
  //  :deep(.el-table__cell) {
  //    padding: 14px 0;
  //  }
  //}

  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}
</style>
