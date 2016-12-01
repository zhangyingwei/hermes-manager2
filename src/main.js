import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/AdminLTE/css/AdminLTE.css'
import './assets/AdminLTE/css/skins/skin-red.css'
import Home from './components/Home'
import RssSiteManage from './components/content/rsssitetable/RssSiteManage'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/home',
  component: Home
}, {
  path: '/rss/sitemanage',
  component: RssSiteManage
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
