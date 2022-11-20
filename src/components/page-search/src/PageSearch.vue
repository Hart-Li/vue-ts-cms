<template>
  <div class="page-search">
    <search-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2 class="header">搜索区域</h2>
      </template>
      <template #footer>
        <div class="footer">
          <el-button size="large" @click="handleResetClick">重置</el-button>
          <el-button type="primary" size="large" @click="handleSearchClick"
            >搜索
          </el-button>
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
  emits: ['handleResetClick', 'handleSearchClick'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)
    const handleResetClick = () => {
      formData.value = formOriginData
      emit('handleResetClick')
    }
    const handleSearchClick = () => {
      emit('handleSearchClick', formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleSearchClick
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
