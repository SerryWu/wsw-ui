import Swiper from './src/index.vue'
import './src/index.scss'
// 为组件提供 install 安装方法，供按需引入

Swiper.install = function (Vue) {
  Vue.component(Swiper.name, Swiper)
}
// 导出组件

export default Swiper