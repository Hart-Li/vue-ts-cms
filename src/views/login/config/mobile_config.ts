export const rules = {
  number: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^1[3-9]\d{9}$/,
      message: '手机号格式不对',
      trigger: 'blur'
    }
  ],
  captchaCode: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9a-zA-Z]{6}$/,
      message: '验证码必须为六位数字或字母组合',
      trigger: 'blur'
    }
  ]
}
