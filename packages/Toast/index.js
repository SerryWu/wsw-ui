import Toast from './src'
import './src/index.scss'
import Vue from 'vue';
// 为组件提供 install 安装方法，供按需引入
let instance = ''
Toast.install = function (Vue,options) {
  var {name="toast"} = options;

  Vue.prototype[`$${name}`] = ToastConstuctor


  function ToastConstuctor(props){
    if(!instance) {
      var Instance = Vue.extend(Toast);
      instance = new Instance().$mount();
      document.body.appendChild(instance.$el)
    }
    var _props = instance.$options.props;
    for(let i in _props) { 
      instance[i] = _props[i].default || '';
    }

    console.log(instance)
    if(typeof props ==  'string') {
      instance.text = props;
    } else { 
      for(let i in props) { 
        props[i] && (instance[i] = props[i]);
      }
    }

    // instance = Object.
    instance.open();
    return instance
  }

  ToastConstuctor.loading = function(text) { 
    this({loading:true,text})
  }


}
// 导出组件

export default Toast