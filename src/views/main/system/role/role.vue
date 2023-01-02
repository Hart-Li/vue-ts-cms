<template>
  <div class="role">
    <page-search :search-form-config="searchFormConfig" />
    <page-content
      page-name="role"
      :content-table-config="contentTableConfig"
      @handleInsertClick="handleInsertClick"
      @handleEditClick="handleEditClick"
    />
    <page-modal
      ref="pageModalRef"
      page-name="role"
      :modal-config="modalConfig"
      :default-info="defaultInfo"
      :other-info="otherInfo"
    >
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      ></el-tree>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
import PageSearch from '@/components/page-search/src/PageSearch.vue'
import PageContent from '@/components/page-content/src/PageContent.vue'
import PageModal from '@/components/page-modal/src/PageModal.vue'

import { searchFormConfig } from '@/views/main/system/role/config/search.config'
import { contentTableConfig } from '@/views/main/system/role/config/content.config'
import { modalConfig } from '@/views/main/system/role/config/modal.config'

import { pageModalData } from '@/hooks/pageModalData'
import { useStore } from 'vuex'
import { getMenuLeafKeys } from '@/utils/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const insertCallback = () => {
      console.log('insertCallback')
    }
    const editCallback = (rowData: any) => {
      const leafKeys = getMenuLeafKeys(rowData.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })
    }
    const [pageModalRef, defaultInfo, handleInsertClick, handleEditClick] =
      pageModalData(insertCallback, editCallback)
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleInsertClick,
      handleEditClick,
      menus,
      otherInfo,
      handleCheckChange,
      elTreeRef
    }
  }
})
</script>

<style scoped></style>
