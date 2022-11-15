<template>
  <div class="nav-header">
    <el-icon @click="handleFoldClick">
      <component :is="isFold ? 'Expand' : 'Fold'"></component>
    </el-icon>
    <div class="content">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from '@/components/nav-header/src/UserInfo.vue'
import Breadcrumb from '@/base-ui/breadcrumb'
import { pathMapToBreadcrumbs } from '@/utils/map-menus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  components: { UserInfo, Breadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const breadcrumbs = computed(() => {
      const store = useStore()
      const userMenus = store.state.UserModule.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapToBreadcrumbs(userMenus, currentPath)
    })
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  height: 100%;
  display: flex;
  vertical-align: middle;

  .el-icon {
    height: 100%;
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
