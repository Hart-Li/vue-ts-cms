<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collpase" class="title">小玩意</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      text-color="#b7bdc3"
      active-text-color="#fff"
      background-color="#001529"
      :collapse="collpase"
    >
      <template v-for="item in userMenus" :key="item.id">
        <el-sub-menu :index="item.id + ''">
          <template #title>
            <el-icon v-if="item.icon">
              <component :is="item.icon.split('el-icon-')[1]"></component>
            </el-icon>
            <span v-if="!collpase">{{ item.name }}</span>
          </template>
          <template v-for="childItem in item.children" :key="childItem.id">
            <el-menu-item
              :index="childItem.id + ''"
              @click="handleMenuItemClick(childItem)"
            >
              <el-icon v-if="childItem.icon">
                <component
                  :is="childItem.icon.split('el-icon-')[1]"
                ></component>
              </el-icon>
              <span>{{ childItem.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { pathMapToMenu } from '@/utils/map-menus'

export default defineComponent({
  props: {
    collpase: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // 获取菜单
    const store = useStore()
    const userMenus = computed(() => store.state.UserModule.userMenus)

    // 映射 url
    const route = useRoute()
    const currentPath = route.path
    const menu = pathMapToMenu(userMenus.value, currentPath)
    const defaultValue = ref(menu.id + '')

    // 处理点击
    const router = useRouter()
    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }
    return {
      userMenus,
      defaultValue,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
}

.logo {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  .img {
    height: 100%;
    margin: 0 10px;
  }

  .title {
    font-size: 16px;
    font-weight: 700;
    color: white;
    white-space: nowrap;
  }
}

.el-menu {
  border-right: none;
  user-select: none;
}

.el-sub-menu {
  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135;
  }

  .el-menu-item:hover {
    color: #fff;
  }

  .el-menu-item.is-active {
    background-color: #0a60bd;
  }
}
</style>
