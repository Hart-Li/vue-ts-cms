<template>
  <div class="custom-table">
    <el-table border :data="listData" style="width: 100%">
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.prop" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
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
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
