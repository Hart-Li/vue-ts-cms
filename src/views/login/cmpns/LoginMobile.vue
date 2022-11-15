<template>
  <div>
    <el-form :model="mobile" :rules="rules" ref="formRef">
      <el-form-item label="手机号" prop="number" autofocus>
        <el-input v-model="mobile.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="captchaCode">
        <div class="captcha-code-item">
          <el-input v-model="mobile.captchaCode" />
          <el-button type="primary" class="captcha-button"
            >获取验证码
          </el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/mobile_config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const mobile = reactive({
      number: localCache.getCache('mobileNumber'),
      captchaCode: ''
    })
    const store = useStore()
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isRemeberMe: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isRemeberMe) {
            localCache.setCache('mobileNumber', mobile.number)
          } else {
            localCache.deleteCache('mobileNumber')
          }
          store.dispatch('mobileLogin', { ...mobile })
        }
      })
    }
    return {
      mobile,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped>
.captcha-code-item {
  display: flex;
}

.captcha-button {
  margin-left: 10px;
}
</style>
