// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require("./assets/vendor/bootstrap/css/bootstrap.min.css")
require("./assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css")
require("./assets/fonts/Linearicons-Free-v1.0.0/icon-font.min.css")
require("./assets/vendor/animate/animate.css")
require("./assets/vendor/css-hamburgers/hamburgers.min.css")
require("./assets/vendor/animsition/css/animsition.min.css")
require("./assets/vendor/select2/select2.min.css")
require("./assets/vendor/daterangepicker/daterangepicker.css")
require("./assets/css/util.css")
require("./assets/css/main.css")
require("../node_modules/bootstrap/dist/css/bootstrap.css")
//require("../node_modules/bootstrap/dist/js/bootstrap.js")
import './assets/css/style.css'
//import './assets/vendor/bootstrap/css/bootstrap.min.css'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
