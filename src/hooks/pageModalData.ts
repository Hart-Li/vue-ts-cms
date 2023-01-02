import { ref } from 'vue'
import PageModal from '@/components/page-modal/src/PageModal.vue'

type CallbackType = (item?: any) => void

export function pageModalData(insertCb: CallbackType, editCb: CallbackType) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleInsertClick = () => {
    defaultInfo.value = {}
    pageModalRef.value?.changeDialogVisiable(true)
    insertCb && insertCb()
  }

  const handleEditClick = (rowData: any) => {
    defaultInfo.value = rowData
    pageModalRef.value?.changeDialogVisiable(true)
    editCb && editCb(rowData)
  }
  return [pageModalRef, defaultInfo, handleInsertClick, handleEditClick]
}
