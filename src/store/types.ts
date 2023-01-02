import { UserState } from '@/store/login/types'

export interface IRootState {
  title: string
  entireDepartment: any[]
  entireRole: any[]
  entireMenu: any[]
}

export interface IRootWithModule {
  user: UserState
}

export type IStoreType = IRootState & IRootWithModule
