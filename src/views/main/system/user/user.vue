<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @handleResetClick="handleResetClick"
      @handleSearchClick="handleSearchClick"
    />
    <page-content
      ref="contentRef"
      page-name="users"
      :content-table-config="contentTableConfig"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/content.config'
import PageContent from '@/components/page-content/src/PageContent.vue'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import { pageSearchData } from '@/hooks/pageSearchData'

export default defineComponent({
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    // const [contentRef, handleResetClick, handleSearchClick] = pageSearchData()
    const contentRef = ref<InstanceType<typeof PageContent>>()
    const handleResetClick = () => {
      contentRef.value?.getContentData()
      console.log('点击事件', contentRef)
    }
    const handleSearchClick = (queryData: any = {}) => {
      contentRef.value?.getContentData(queryData)
    }
    return {
      searchFormConfig,
      contentTableConfig,
      contentRef,
      handleResetClick,
      handleSearchClick
    }
  }
})
</script>

<style scoped lang="less"></style>
