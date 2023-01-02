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
      :modal-config="modalConfigRef"
      :default-info="defaultInfo"
      page-name="users"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/content.config'
import { modalConfig } from '@/views/main/system/user/config/modal.config'
import PageContent from '@/components/page-content/src/PageContent.vue'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import { pageSearchData } from '@/hooks/pageSearchData'
import PageModal from '@/components/page-modal/src/PageModal.vue'
import { pageModalData } from '@/hooks/pageModalData'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    PageModal,
    PageSearch,
    PageContent
  },
  setup() {
    const [contentRef, handleResetClick, handleSearchClick] = pageSearchData()

    const insertCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, handleInsertClick, handleEditClick] =
      pageModalData(insertCallback, editCallback)
    const modalConfigRef = computed(() => {
      const store = useStore()
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map(
        (item: any) => {
          return { label: item.name, value: item.id }
        }
      )
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item: any) => {
        return { label: item.name, value: item.id }
      })
      return modalConfig
    })

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfigRef,
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
