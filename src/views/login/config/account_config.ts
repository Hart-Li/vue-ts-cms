export const rules = {
  username: [
    {
      required: true,
      message: '请填写用户名',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须为5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请填写密码',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,12}$/,
      message: '密码必须为6-12个字母或数字',
      trigger: 'blur'
    }
  ]
}
