import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import store from "./store"
import http from "./api/api.js"
import { mixinH } from "/common/mixin.js"
import navBar from "@/components/navBar"
export function createApp() {
  const app = createSSRApp(App)
  app.mixin(mixinH)
  
  app.use(store)
  
  app.config.globalProperties.$store = store
  app.config.globalProperties.$http = http
  
  // 注册全局组件
  app.component("navBar",navBar);
  return {
    app
  }
}
// #endif