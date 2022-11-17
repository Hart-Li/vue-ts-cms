import { App } from 'vue'
import registerElement from './register-element'
import { registerProperties } from '@/global/register-properties'

export function registerApp(app: App) {
  app.use(registerElement)
  app.use(registerProperties)
}
