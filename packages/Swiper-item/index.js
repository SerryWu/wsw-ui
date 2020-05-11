import SwiperItem from './src/index.vue'
import './src/index.scss'
SwiperItem.install = function (Vue) {
  Vue.component(SwiperItem.name, SwiperItem)
}
// 导出组件

export default SwiperItem