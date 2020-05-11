import Tab from './src/index.vue'
import './src/index.scss'
Tab.install = function (Vue) {
  Vue.component(Tab.name, Tab)
}
// 导出组件

export default Tab