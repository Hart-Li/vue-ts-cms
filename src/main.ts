import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import commonRequest from '@/service'

import { registerApp } from '@/global'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(registerApp)

app.mount('#app')

commonRequest.request({
  url: '/home/multidata'
})
