import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () =>
  import('@/components/HelloWorld')

Vue.use(Router)
Router.prototype.back = () => {
  this.isBack = true
  window.history.go(-1)
}
const router = new Router({
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    // 登录验证
    /* let token = null
    if (token) {
      next({
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } */
  } else {
    next()
  }
})

export default router
