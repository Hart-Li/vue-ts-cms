import { RouteRecordRaw } from 'vue-router'
import { IBreadcrumb } from '@/base-ui/breadcrumb/types'

let firstMenu: any = null

export function mapMenusToRoutes(menus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1.加载默认的所有的 routes
  const allRoutes: RouteRecordRaw[] = []
  // 第一个参数为路径，第二个参数为是否使用递归方式去查找，第三个参数为正则匹配规则
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })

  // 2.根据后端返回的数据添加需要的 routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        if (!firstMenu) {
          firstMenu = menu
        }
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(menus)
  return routes
}

export function pathMapToBreadcrumbs(userMenus: any[], currentPath: string) {
  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const userMenu of userMenus) {
    if (userMenu.type === 1) {
      const result = pathMapToMenu(userMenu.children, currentPath)
      if (result) {
        breadcrumbs?.push({ name: userMenu.name, path: userMenu.url })
        breadcrumbs?.push({ name: result.name, path: result.url })
        return result
      }
    } else if (userMenu.type === 2 && userMenu.url === currentPath) {
      return userMenu
    }
  }
}

export { firstMenu }
