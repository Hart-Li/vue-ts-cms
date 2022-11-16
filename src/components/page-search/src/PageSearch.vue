<template>
  <div class="page-search">
    <search-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">搜索区域</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button size="large">重置</el-button>
          <el-button type="primary" size="large">搜索</el-button>
        </div>
      </template>
    </search-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SearchForm from '@/base-ui/form'

export default defineComponent({
  components: {
    SearchForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      actualName: '',
      mobile: '',
      status: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style scoped>
.header {
  color: red;
  text-align: center;
}

.footer {
  text-align: right;
  padding: 0 50px 10px 0;
}
</style>
