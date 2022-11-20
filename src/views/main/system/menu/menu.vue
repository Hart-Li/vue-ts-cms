<template>
  <div class="menu">
    <page-content page-name="menu" :content-table-config="contentTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentTableConfig } from '@/views/main/system/menu/config/content.config'
import PageContent from '@/components/page-content/src/PageContent.vue'

export default defineComponent({
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
