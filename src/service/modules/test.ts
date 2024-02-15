// import yierRequest1 from '..'

// console.log('test')
// yierRequest1
//   .request({
//     url: '/api/v1/validation_codes',
//     params: {
//       email: '3405176636@qq.com'
//     },
//     interceptors: {
//       requestSuccessFn(config) {
//         console.log('单次请求成功拦截')
//         return config
//       },
//       responseSuccessFn(res) {
//         console.log('单次响应成功拦截')
//         return res
//       },
//     },
//     method: 'post'
//   })
//   .then((res) => {
//     console.log('come')
//     console.log(res)
//   })
