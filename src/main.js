import 'feather-icons'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/all.css'
import loading from './components/loading'

Vue.config.productionTip = false;
Vue.use(loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
