export const contentTableConfig = {
  headerTitle: '商品列表',
  showIndexColumn: true,
  showSelectionColumn: true,
  propsList: [
    {
      prop: 'id',
      label: 'ID',
      minWidth: 70,
      slotName: 'id'
    },
    {
      prop: 'name',
      label: '商品名称',
      minWidth: 100,
      slotName: 'name'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: 70,
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '折扣价格',
      minWidth: 70,
      slotName: 'newPrice'
    },
    {
      prop: 'desc',
      label: '描述',
      minWidth: 100,
      slotName: 'desc'
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: 100,
      slotName: 'statusBtn',
      slotType: 'DYNAMIC'
    },
    {
      prop: 'imgUrl',
      label: '图片',
      minWidth: 100,
      slotName: 'image',
      slotType: 'DYNAMIC'
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
