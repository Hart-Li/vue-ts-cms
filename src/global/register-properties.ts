import { App } from 'vue'
import { formatUTCString } from '@/utils/time'

export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(time: string) {
      return formatUTCString(time)
    }
  }
}
