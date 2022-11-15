type IFormType = 'input' | 'password' | 'select' | 'datepicker'

class IFormOptions {
  label: any
  value: any
}

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  options?: IFormOptions[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  itemLayout?: any
}
