import { ref } from 'vue'
import PageContent from '@/components/page-content/src/PageContent.vue'

export function pageSearchData() {
  const contentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    contentRef.value?.getContentData()
  }
  const handleSearchClick = (queryData: any = {}) => {
    contentRef.value?.getContentData(queryData)
  }
  return [contentRef, handleResetClick, handleSearchClick]
}
