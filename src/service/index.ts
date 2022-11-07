import CommonRequest from '@/service/request'
import { BASE_URL, TIMEOUT } from '@/service/request/config'

console.log(BASE_URL)
console.log(TIMEOUT)

const commonRequest = new CommonRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})

export default commonRequest
