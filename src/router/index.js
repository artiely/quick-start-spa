import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Index from '@/views/Index'
import Order from '@/views/Order'
// import Find from '@/views/Find'
// import User from '@/views/User'
// import Detail from '@/views/Detail'
// 异步加载的组件
// const Detail = () => import('@/views/Detail').then(() => { alert(1) })
// const User = () => import('@/views/User').then(() => { console.log(1) })
// const Home = () => import('@/views/Home') //不加.then没问题加.then报错
// const Find = () => import('@/views/Find').then(() => { console.log(2) })

// const Home = resolve => {
//   require.ensure(['@/views/Home'], () => {
//     resolve(require('@/views/Home'))
//   }).then(console.log(33))
// }

const Find = resolve => {
  require.ensure(['@/views/Find'], () => {
    resolve(require('@/views/Find'))
  }).then(console.log(33))
}

const User = resolve => {
  require.ensure(['@/views/User'], () => {
    resolve(require('@/views/User'))
  }).then(console.log(33))
}

const Detail = resolve => {
  require.ensure(['@/views/Detail'], () => {
    resolve(require('@/views/Detail'))
  }).then(console.log(33))
}

Vue.use(Router)

Router.prototype.back = function () {
  this.isBack = true
  window.history.go(-1)
}
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/order',
        name: 'Order',
        component: Order
      },
      {
        path: '/find',
        name: 'Find',
        component: Find
      },
      {
        path: '/user',
        name: 'User',
        component: User
      }
    ]
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  }
]

export default new Router({
  // mode: 'history',
  // base: __dirname,
  routes
})
