import { useStore } from 'vuex'

export function userPermission(pageName: string, actionName: string) {
  const store = useStore()
  const permissions = store.state.UserModule.permissions
  const findStr = ':' + pageName + ':' + actionName
  return (
    permissions.find((item: any) => {
      return item.indexOf(findStr) !== -1
    }) !== undefined
  )
}
