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
