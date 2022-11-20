export const contentTableConfig = {
  headerTitle: '角色列表',
  showIndexColumn: true,
  showSelectionColumn: true,
  propsList: [
    {
      prop: 'id',
      label: 'ID',
      minWidth: 100,
      slotName: 'id'
    },
    {
      prop: 'name',
      label: '角色名称',
      minWidth: 100,
      slotName: 'name'
    },
    {
      prop: 'intro',
      label: '权限介绍',
      minWidth: 100,
      slotName: 'intro'
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
  ]
}
