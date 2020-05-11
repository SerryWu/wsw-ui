// 导入button组件
import XButton from './Button'
import Tabs from './Tabs'

import Tab from './Tab'
// import './Tab/src/index.scss'
import Swiper from './Swiper'
// import './Swiper/src/index.scss'
import SwiperItem from './Swiper-item'
// import './Swiper-item/src/index.scss'
import Loading from './Loading'
// import './Loading/src/index.scss'
import Popup from './Popup'
import Toast from './Toast'
// import './Popup/src/index.scss'
// 组件列表
const components = [
  XButton,
  Tabs,
  Tab,
  Swiper,
  SwiperItem,
  Loading,
  Popup,
  Toast
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}



// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  XButton,
  Tabs,
  Tab,
  Swiper,
  SwiperItem,
  Loading,
  Popup,
  Toast
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
}

