import Vue from 'vue'

import App from './App.vue'
import AppRouter from './routing';

new Vue({
  el: '#app',
  router: AppRouter,
  render: h => h(App)
})
