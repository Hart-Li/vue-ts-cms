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

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request<T>(config: CommonRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: CommonRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'GET' })
  }

  post<T>(config: CommonRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'POST' })
  }

  delete<T>(config: CommonRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'DELETE' })
  }

  patch<T>(config: CommonRequestConfig): Promise<T> {
    return this.instance.request({ ...config, method: 'PATCH' })
  }
}

export default CommonRequest
