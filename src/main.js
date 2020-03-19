// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueGtag from 'vue-gtag'
import autofocus from 'vue-autofocus-directive'

Vue.directive('autofocus', autofocus)

Vue.use(VueGtag, {
  config: { id: 'UA-26178243-15' } // <---change here
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
