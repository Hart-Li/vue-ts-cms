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
      @handleInsertClick="handleInsertClick"
      @handleEditClick="handleEditClick"
    />
    <page-modal
      ref="pageModalRef"
      :modal-config="modalConfig"
      :default-info="defaultInfo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/content.config'
import { modalConfig } from '@/views/main/system/user/config/modal.config.js'
import PageContent from '@/components/page-content/src/PageContent.vue'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import { pageSearchData } from '@/hooks/pageSearchData'
import PageModal from '@/components/page-modal/src/PageModal.vue'
import { pageModalData } from '@/hooks/pageModalData'

export default defineComponent({
  components: {
    PageModal,
    PageSearch,
    PageContent
  },
  setup() {
    const [contentRef, handleResetClick, handleSearchClick] = pageSearchData()
    const [pageModalRef, defaultInfo, handleInsertClick, handleEditClick] =
      pageModalData()

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      contentRef,
      handleResetClick,
      handleSearchClick,
      handleInsertClick,
      handleEditClick,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped lang="less"></style>
