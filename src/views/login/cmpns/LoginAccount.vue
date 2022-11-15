<template>
  <div class="login-account">
    <el-form
      label-width="60px"
      require-asterisk-position="left"
      :rules="rules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="帐号" prop="username">
        <el-input v-model="account.username" autofocus ref="usernameRef" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

import { rules } from '../config/account_config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const account = reactive({
      username: localCache.getCache('username'),
      password: localCache.getCache('password')
    })
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const usernameRef = ref(null)
    const loginAction = (isRemeberMe: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isRemeberMe) {
            localCache.setCache('username', account.username)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('username')
            localCache.deleteCache('password')
          }
          store.dispatch('loginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      usernameRef,
      formRef
    }
  }
})
</script>

<style scoped></style>
