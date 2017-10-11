// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

const config = {
  databaseURL: "https://kanban-realtime-8923c.firebaseio.com",
  projectId: "kanban-realtime-8923c"
}
const db = firebase.initializeApp(config).database()
Vue.prototype.$dbFire = db.ref('todos')

var VueFire = require('vuefire')
var Firebase = require('firebase')

// explicit installation required in module environments
Vue.use(VueFire)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
