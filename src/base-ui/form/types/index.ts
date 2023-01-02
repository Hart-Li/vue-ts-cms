type IFormType = 'input' | 'password' | 'select' | 'datepicker'

class IFormOptions {
  label: any
  value: any
}

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  options?: IFormOptions[]
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
