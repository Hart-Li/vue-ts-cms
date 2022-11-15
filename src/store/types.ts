import { UserState } from '@/store/user/types'

export interface IRootStore {
  title: string
}

export interface IRootWithModule {
  user: UserState
}
