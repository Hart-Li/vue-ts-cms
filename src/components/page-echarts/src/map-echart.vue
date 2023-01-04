<template>
  <div class="map-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import BaseEchart from '@/base-ui/echart/src/base-echart.vue'
import { computed, defineProps } from 'vue'
import { IDataType } from '@/components/page-echarts/types'

const props = defineProps<{
  mapData: IDataType[]
}>()

const options = computed(() => {
  return {}
})
</script>

<style scoped></style>
