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
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'actualName',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'mobile',
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      placeholder: '请选择状态',
      options: [
        {
          label: '正常',
          value: 0
        },
        {
          label: '停用',
          value: 1
        }
      ]
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
