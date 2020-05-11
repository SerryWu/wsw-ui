import Loading from './src'
import './src/index.scss'
// 为组件提供 install 安装方法，供按需引入
Loading.install = function (Vue) {
  Vue.component(Loading.name, Loading)
}
// 导出组件

export default Loading