<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <dashboard-card title="分类商品数量（饼图）">
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </dashboard-card>
      </el-col>
      <el-col :span="10">
        <dashboard-card title="不同城市商品销售">
          <map-echart :map-data="addressGoodsSale"></map-echart>
        </dashboard-card>
      </el-col>
      <el-col :span="7">
        <dashboard-card title="分类商品数量（玫瑰图）">
          <rose-echart :rose-data="categoryGoodsSale"></rose-echart>
        </dashboard-card>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="12">
        <dashboard-card title="分类商品的销量">
          <line-echart v-bind="lineData"></line-echart>
        </dashboard-card>
      </el-col>
      <el-col :span="12">
        <dashboard-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </dashboard-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import DashboardCard from '@/base-ui/card'
import { PieEchart, RoseEchart, LineEchart } from '@/components/page-echarts'
import BarEchart from '@/components/page-echarts/src/bar-echart.vue'
import MapEchart from '@/components/page-echarts/src/map-echart.vue'

export default defineComponent({
  components: {
    MapEchart,
    BarEchart,
    LineEchart,
    RoseEchart,
    PieEchart,
    DashboardCard
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboardModule/getDashboardDataAction')
    const categoryGoodsCount = computed(() => {
      return store.state.dashboardModule.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      return store.state.dashboardModule.categoryGoodsSale.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const lineData = computed(() => {
      const xLabels: string[] = []
      const values: number[] = []
      store.state.dashboardModule.categoryGoodsSale.forEach((item: any) => {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      })
      return {
        xLabels,
        values
      }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: number[] = []
      store.state.dashboardModule.categoryGoodsFavor.forEach((item: any) => {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      })
      return {
        xLabels,
        values
      }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboardModule.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      lineData
    }
  }
})
</script>

<style scoped></style>
