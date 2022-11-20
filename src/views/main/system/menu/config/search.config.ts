import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请选择时间范围',
      otherOptions: {
        type: 'datetimerange',
        startPlaceholder: '请选择开始时间',
        endPlaceholder: '请选择开始时间'
      }
    }
  ],
  labelWidth: '120px',
  itemStyle: {
    padding: '5px 30px '
  }
}
