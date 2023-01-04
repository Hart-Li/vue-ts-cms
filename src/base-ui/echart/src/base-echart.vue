<template>
  <div
    class="base-echart"
    :style="{ width: width, height: height }"
    ref="baseEchart"
  ></div>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts'
import { defineProps, onMounted, ref, watchEffect, withDefaults } from 'vue'
import { EChartsOption } from 'echarts'
import useEcharts from '@/base-ui/echart/hooks/useEcharts'

const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '300px'
  }
)

const baseEchart = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEcharts(baseEchart.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped></style>
