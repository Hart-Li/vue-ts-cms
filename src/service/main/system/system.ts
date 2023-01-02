import commonRequest from '@/service'
import { ResponseData } from '@/service/config/types'

export function getPageListData(url: string, params: any) {
  return commonRequest.post<ResponseData>({
    url: url,
    params: params
  })
}

export function deletePageData(url: string) {
  return commonRequest.delete<ResponseData>({ url: url })
}

export function createPageData(url: string, params: any) {
  return commonRequest.post<ResponseData>({ url: url, params: params })
}

export function editPageData(url: string, params: any) {
  return commonRequest.patch<ResponseData>({ url: url, params: params })
}
