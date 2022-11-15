<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapsed ? '60px' : '210px'">
        <nav-menu :collpase="isCollapsed" />
      </el-aside>
      <el-container>
        <el-header height="48px">
          <nav-header @foldChange="handleCollapseChange" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header/src/NavHeader.vue'

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapsed = ref(false)
    const handleCollapseChange = (value: boolean) => {
      isCollapsed.value = value
    }
    return {
      isCollapsed,
      handleCollapseChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    transition: width 0.3s linear;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none;

    /* IE 10+ */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }

  .page-content {
    height: calc(100% - 48px);
    align-content: center;

    .page-info {
      background-color: white;
      border-radius: 5px;
    }
  }
}
</style>
