<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="login-tabs" stretch v-model="selectTab">
      <el-tab-pane name="login_account">
        <template #label>
          <span class="login-tab-label">
            <el-icon><UserFilled /></el-icon>
            <span>帐号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="login_mobile">
        <template #label>
          <span class="login-tab-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-mobile ref="mobileRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="other-container">
      <el-checkbox :checked="isRememberMe" v-model="isRememberMe"
        >记住我
      </el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button
      @click="handleLoginAction"
      class="login-btn"
      type="primary"
      size="large"
      >立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from '@/views/login/cmpns/LoginAccount.vue'
import LoginMobile from '@/views/login/cmpns/LoginMobile.vue'

export default defineComponent({
  components: { LoginMobile, LoginAccount },
  setup() {
    const isRememberMe = ref(true)
    const selectTab = ref('login_account')
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const mobileRef = ref<InstanceType<typeof LoginMobile>>()
    const handleLoginAction = () => {
      if (selectTab.value === 'login_account') {
        accountRef.value?.loginAction(isRememberMe.value)
      } else {
        mobileRef.value?.loginAction(isRememberMe.value)
      }
    }
    return {
      isRememberMe,
      handleLoginAction,
      accountRef,
      mobileRef,
      selectTab
    }
  }
})
</script>

<style scoped>
.title {
  text-align: center;
}

.login-panel {
  margin-bottom: 130px;
  width: 320px;
}

.login-tab-label .el-icon {
  vertical-align: middle;
}

.login-tabs .login-tab-label span {
  vertical-align: middle;
  padding: 4px;
}

.other-container {
  margin: 10px 5px 0px;
  display: flex;
  justify-content: space-between;
}

.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
