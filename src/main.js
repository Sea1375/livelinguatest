import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import { router } from './plugins/vue-router'

import App from './App.vue'
import store from './store'
import './assets/css/framework.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: (h) => h(App),
})
