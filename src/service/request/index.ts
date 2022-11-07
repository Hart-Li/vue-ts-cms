import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface CommonRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => any
}

interface CommonRequestConfig extends AxiosRequestConfig {
  interceptors?: CommonRequestInterceptors
}

class CommonRequest {
  instance: AxiosInstance
  interceptors?: CommonRequestInterceptors

  constructor(config: CommonRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: CommonRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default CommonRequest
