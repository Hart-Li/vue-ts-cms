import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el, 'light', { renderer: 'svg' })
  const setOptions = (options: EChartsOption) => {
    echartInstance.setOption(options)
  }
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  // 用对象类型可以只取其中一个数据
  return {
    echartInstance,
    setOptions
  }
}
