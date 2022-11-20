import { App } from 'vue'
import { formatUTCString } from '@/utils/time'

export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(time: string) {
      return formatUTCString(time)
    },
    initialToUpper(value: string) {
      return value.substring(0, 1).toUpperCase() + value.substring(1)
    }
  }
}
