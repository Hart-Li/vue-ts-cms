export const contentTableConfig = {
  headerTitle: '角色列表',
  showIndexColumn: false,
  showSelectionColumn: false,
  propsList: [
    {
      prop: 'id',
      label: 'ID',
      minWidth: 70,
      slotName: 'id'
    },
    {
      prop: 'name',
      label: '菜单名称',
      minWidth: 100,
      slotName: 'name'
    },
    {
      prop: 'type',
      label: '类型',
      minWidth: 70,
      slotName: 'type'
    },
    {
      prop: 'url',
      label: '菜单URL',
      minWidth: 70,
      slotName: 'url'
    },
    {
      prop: 'permission',
      label: '权限',
      minWidth: 100,
      slotName: 'permission'
    },
    {
      prop: 'icon',
      label: '菜单icon',
      minWidth: 70,
      slotName: 'icon'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: 100,
      slotName: 'createAt'
    },
    {
      prop: 'handler',
      label: '操作',
      minWidth: 120,
      slotName: 'handlerBtns'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  },
  showFooter: false
}
