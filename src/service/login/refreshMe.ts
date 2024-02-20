import yierRequest1 from '..'

console.log('test')
const jwt = localStorage.getItem('jwt')

export async function refreshMe() {
  const res = await yierRequest1
    .request({
      url: '/api/v1/me',
      headers: {
        Authorization: 'Bearer' + ' ' + localStorage.getItem('jwt')
      },
      interceptors: {
        requestSuccessFn(config) {
          console.log('refreshme请求成功拦截')
          return config
        },
        responseSuccessFn(res) {
          console.log('refreshme响应成功拦截')
          return res
        }
      },
      method: 'get'
    })
  console.log(res)
}
