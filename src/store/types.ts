import { UserState } from '@/store/user/types'

export interface IRootState {
  title: string
}

export interface IRootWithModule {
  user: UserState
}

export type IStoreType = IRootState & IRootWithModule
