import Vue from 'vue'
import Router from 'vue-router'
import TabDemo from "../pages/TabDemo"
import List from "../pages/List"
import SwiperDemo from "../pages/SwiperDemo"
import LoadingDemo from '../pages/LoadingDemo'
import PopupDemo from '../pages/PopupDemo'
import ToastDemo from '../pages/ToastDemo'
Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: { name: 'List' }
  },
  {
    path: '/ToastDemo',
    name: 'ToastDemo',
    component: ToastDemo,
  },
  {
    path: '/PopupDemo',
    name: 'PopupDemo',
    component: PopupDemo,
  },
  {
    path: '/LoadingDemo',
    name: 'LoadingDemo',
    component: LoadingDemo,
  },
  {
    path: '/TabDemo',
    name: 'TabDemo',
    component: TabDemo,
  },
  {
    path: '/SwiperDemo',
    name: 'SwiperDemo',
    component: SwiperDemo,
  },
  {
    path: '/List',
    name: 'List',
    component: List,
  },
]

const router = new Router({
  routes
})

export { router }
