// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import './assets/styles/layout.less'
import api from './api'
Vue.use(api)
Vue.use(MintUI)

// import {Lazyload} from 'mint-ui'
// Vue.use(Lazyload)

import {currency} from './filter'

Vue.filter('currency', currency)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
