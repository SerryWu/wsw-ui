import Pupop from './src'
import './src/index.scss'
// 为组件提供 install 安装方法，供按需引入
Pupop.install = function (Vue) {
  Vue.component(Pupop.name, Pupop)
}
// 导出组件

export default Pupop