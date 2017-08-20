// 导入模块
import axios from 'axios'
import {SERVER_BASE_URL} from './config'

export default function fetch (options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: SERVER_BASE_URL,
      timeout: 5000,
      headers: {}
    })
    // http request 拦截器
    instance.interceptors.request.use(
      config => {
        // 添加自己的业务逻辑代码 比如请求进度 请求头带token
        // iView.LoadingBar.start();
        // config.headers.Authorization = "token";
        return config
      },
      err => {
        // iView.LoadingBar.error();
        return Promise.reject(err)
      })

    // http response 拦截器
    instance.interceptors.response.use(
      response => {
        // iView.LoadingBar.finish();
        return response
      },
      error => {
        // iView.LoadingBar.error();
        return Promise.reject(error) // 返回接口返回的错误信息
      })

    // 请求处理
    instance(options)
      .then((res) => {
        // resolve(res.data)
        // 可根据自己业务设计返回结果
        if (res.status === 200) {
          if (res.data.error === false) {
            resolve(res.data.results)
          }
        }
        return false
      })
      .catch((error) => {
        console.error(`oh shit!` + error) // 全局捕获了错误并打印，就不用再每个接口.catch()了，有业务需求也可以.catch()
        reject(error)
      })
  })
}
