export const contentTableConfig = {
  headerTitle: '用户列表',
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
      label: '用户名',
      minWidth: 100,
      slotName: 'name'
    },
    {
      prop: 'realname',
      label: '姓名',
      minWidth: 100,
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号',
      minWidth: 100,
      slotName: 'cellphone'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: 70,
      slotName: 'statusBtn'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: 180,
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
