(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("toast", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["toast"] = factory(require("vue"));
	else
		root["toast"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/toast/src/index.vue?vue&type=template&id=fbcd8318&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"sw_toast"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"sw_toast_wrapper",class:{'sw_icon':_vm.loading},style:(_vm.toastStyle)},[_c('sw-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loading",attrs:{"size":"40","color":"#fff"}}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.text)}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/toast/src/index.vue?vue&type=template&id=fbcd8318&

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Loading/src/index.vue?vue&type=template&id=8320016e&
var srcvue_type_template_id_8320016e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sw_loading"},[_c('div',{staticClass:"sw_loading_wrapper",class:_vm.vertical?'vertical':''},[(_vm.type==1)?_c('svg',{staticClass:"sw_circular",style:(_vm.loadingSize),attrs:{"viewbox":("0 0 " + _vm.size + " " + _vm.size)}},[_c('circle',{staticClass:"sw_path",attrs:{"stroke":_vm.color,"stroke-width":_vm.strokeWidth,"cx":_vm.size/2,"cy":_vm.size/2,"r":_vm.size/2-_vm.strokeWidth,"fill":"none"}})]):_vm._e(),_vm._v(" "),(_vm.type==2)?_c('svg',{staticClass:"sw_circular",style:(_vm.loadingSize),attrs:{"viewbox":("0 0 " + _vm.size + " " + _vm.size)}},[_c('circle',{staticClass:"sw_path1",attrs:{"stroke-width":_vm.strokeWidth,"cx":_vm.size/2,"cy":_vm.size/2,"r":_vm.size/2-_vm.strokeWidth,"fill":_vm.color}}),_vm._v(" "),_c('circle',{staticClass:"sw_path2",attrs:{"stroke-width":_vm.strokeWidth,"cx":_vm.size/2,"cy":_vm.size/2,"r":_vm.size/2-_vm.strokeWidth,"fill":_vm.color}})]):_vm._e(),_vm._v(" "),_vm._t("default")],2)])}
var srcvue_type_template_id_8320016e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/Loading/src/index.vue?vue&type=template&id=8320016e&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Loading/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'swLoading',
  props: {
    size: {
      type: [Number, String],
      default: 50
    },
    strokeWidth: {
      type: Number,
      default: 3
    },
    color: {
      type: String,
      default: "#39a9ed"
    },
    type: {
      type: [String, Number],
      default: 1
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    loadingSize: function loadingSize() {
      return {
        width: this.size + 'px',
        height: this.size + 'px'
      };
    }
  },
  created: function created() {}
});
// CONCATENATED MODULE: ./packages/Loading/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Loading_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Loading/src/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Loading_srcvue_type_script_lang_js_,
  srcvue_type_template_id_8320016e_render,
  srcvue_type_template_id_8320016e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src = (component.exports);
// EXTERNAL MODULE: ./packages/Loading/src/index.scss
var Loading_src = __webpack_require__(12);

// CONCATENATED MODULE: ./packages/Loading/index.js

 // 为组件提供 install 安装方法，供按需引入

src.install = function (Vue) {
  Vue.component(src.name, src);
}; // 导出组件


/* harmony default export */ var Loading = (src);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/toast/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var toast_srcvue_type_script_lang_js_ = ({
  name: 'swToast',
  components: {
    'sw-loading': Loading
  },
  props: {
    text: {
      type: String,
      default: "轻提示"
    },
    duration: {
      type: Number,
      default: 1500
    },
    animate: {
      type: Number,
      default: 200
    },
    loading: {
      default: false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  computed: {
    toastStyle: function toastStyle() {
      return {
        "transition-property": 'opacity',
        "transition-duration": this.animate / 1000 + 's'
      };
    }
  },
  mounted: function mounted() {},
  methods: {
    open: function open() {
      var _this = this;

      clearTimeout(this.timer);
      this.show = true;
      this.timer = setTimeout(function () {
        _this.close();
      }, this.duration);
    },
    close: function close() {
      this.show = false;
    }
  }
});
// CONCATENATED MODULE: ./packages/toast/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_toast_srcvue_type_script_lang_js_ = (toast_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/toast/src/index.vue





/* normalize component */

var src_component = Object(componentNormalizer["a" /* default */])(
  packages_toast_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var toast_src = (src_component.exports);
// EXTERNAL MODULE: ./packages/toast/src/index.scss
var packages_toast_src = __webpack_require__(13);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/toast/index.js


 // 为组件提供 install 安装方法，供按需引入

var instance = '';

toast_src.install = function (Vue, options) {
  var _options$name = options.name,
      name = _options$name === void 0 ? "toast" : _options$name;
  Vue.prototype["$".concat(name)] = ToastConstuctor;

  function ToastConstuctor(props) {
    if (!instance) {
      var Instance = Vue.extend(toast_src);
      instance = new Instance().$mount();
      document.body.appendChild(instance.$el);
    }

    var _props = instance.$options.props;

    for (var i in _props) {
      instance[i] = _props[i].default || '';
    }

    console.log(instance);

    if (typeof props == 'string') {
      instance.text = props;
    } else {
      for (var _i in props) {
        props[_i] && (instance[_i] = props[_i]);
      }
    } // instance = Object.


    instance.open();
    return instance;
  }

  ToastConstuctor.loading = function (text) {
    this({
      loading: true,
      text: text
    });
  };
}; // 导出组件


/* harmony default export */ var toast = __webpack_exports__["default"] = (toast_src);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map