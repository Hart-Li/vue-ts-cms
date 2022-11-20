<template>
  <div class="role">
    <page-search :search-form-config="searchFormConfig" />
    <page-content page-name="role" :content-table-config="contentTableConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import PageContent from '@/components/page-content/src/PageContent.vue'

import { searchFormConfig } from '@/views/main/system/role/config/search.config'
import { contentTableConfig } from '@/views/main/system/role/config/content.config'

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
