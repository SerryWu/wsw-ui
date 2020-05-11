import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
// 导入组件库
import swui from '../packages'
import Toast from '../packages/Toast/index'
// 注册组件库
Vue.use(swui)
Vue.use(Toast,{name:'toast'})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
