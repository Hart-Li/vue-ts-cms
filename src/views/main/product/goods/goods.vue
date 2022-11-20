<template>
  <div class="goods">
    <page-content page-name="goods" :content-table-config="contentTableConfig">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #statusBtn="scope">
        <el-button size="small" :type="scope.row.status ? 'success' : 'danger'">
          {{ scope.row.status ? '上架' : '下架' }}
        </el-button>
      </template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from '@/views/main/product/goods/config/content.config'
import PageContent from '@/components/page-content/src/PageContent.vue'

export default defineComponent({
  components: { PageContent },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
