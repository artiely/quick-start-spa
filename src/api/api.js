import fetch from './fetch'
// 福利
const weal = params => {
  return fetch({
    url: '/api/data/福利/10/1',
    method: 'get',
    params: params
  })
}

const apiList = {
  weal
}

export default apiList
