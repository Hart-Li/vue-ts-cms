<template>
  <div class="page-modal">
    <el-dialog
      title="新增用户"
      v-model="dialogVisiable"
      width="30%"
      center
      destroy-on-close
    >
      <search-form v-bind="modalConfig" v-model="formData" />
      <slot></slot>
      <template #footer>
        <span class="footer">
          <el-button @click="dialogVisiable = false">取消</el-button>
          <el-button type="primary" @click="submitModelData">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import SearchForm from '@/base-ui/form'
import { useStore } from 'vuex'

export default defineComponent({
  components: { SearchForm },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisiable = ref(false)
    const formData: any = ref({})
    const changeDialogVisiable = (flag: boolean) => {
      dialogVisiable.value = flag
    }
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[item.field] = newValue[item.field]
        }
      }
    )
    const store = useStore()
    const submitModelData = () => {
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('editPageDataAction', {
          pageName: props.pageName,
          id: props.defaultInfo.id,
          params: { ...formData.value, ...props.otherInfo }
        })
      } else {
        // 新建
        store.dispatch('createPageDataAction', {
          pageName: props.pageName,
          params: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    return {
      dialogVisiable,
      formData,
      changeDialogVisiable,
      submitModelData
    }
  }
})
</script>

<style scoped></style>
