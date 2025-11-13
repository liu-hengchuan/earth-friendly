import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router.js'

Vue.use(Antd)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})