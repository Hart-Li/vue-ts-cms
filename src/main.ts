import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import store, { setupStore } from '@/store'

import 'normalize.css'
import '@/assets/css/index.less'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { registerApp } from '@/global'

const app = createApp(App)

setupStore()

app.use(router)
app.use(store)
app.use(registerApp)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
