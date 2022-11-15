let BASE_URL = ''
const TIMEOUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8001'
} else {
  BASE_URL = 'http://123.207.32.32:8002'
}

export { BASE_URL, TIMEOUT }
