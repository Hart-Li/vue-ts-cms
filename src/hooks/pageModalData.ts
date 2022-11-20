import { ref } from 'vue'
import PageModal from '@/components/page-modal/src/PageModal.vue'

export function pageModalData() {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleInsertClick = () => {
    defaultInfo.value = {}
    pageModalRef.value?.changeDialogVisiable(true)
  }

  const handleEditClick = (rowData: any) => {
    defaultInfo.value = rowData
    pageModalRef.value?.changeDialogVisiable(true)
  }
  return [pageModalRef, defaultInfo, handleInsertClick, handleEditClick]
}
