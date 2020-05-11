(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("swui", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["swui"] = factory(require("vue"));
	else
		root["swui"] = factory(root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__) {
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "XButton", function() { return /* reexport */ Button; });
__webpack_require__.d(__webpack_exports__, "Tabs", function() { return /* reexport */ Tabs; });
__webpack_require__.d(__webpack_exports__, "Tab", function() { return /* reexport */ Tab; });
__webpack_require__.d(__webpack_exports__, "Swiper", function() { return /* reexport */ Swiper; });
__webpack_require__.d(__webpack_exports__, "SwiperItem", function() { return /* reexport */ Swiper_item; });
__webpack_require__.d(__webpack_exports__, "Loading", function() { return /* reexport */ Loading; });
__webpack_require__.d(__webpack_exports__, "Popup", function() { return /* reexport */ Popup; });
__webpack_require__.d(__webpack_exports__, "Toast", function() { return /* reexport */ Toast; });

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Button/src/index.vue?vue&type=template&id=066643fa&
var srcvue_type_template_id_066643fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sw_button"},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/Button/src/index.vue?vue&type=template&id=066643fa&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Button/src/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var srcvue_type_script_lang_js_ = ({
  name: 'swButton',
  props: {
    type: String
  },
  created: function created() {
    console.log(this.$slots.default);
  }
});
// CONCATENATED MODULE: ./packages/Button/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var Button_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/Button/src/index.vue?vue&type=style&index=0&lang=css&
var srcvue_type_style_index_0_lang_css_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./packages/Button/src/index.vue






/* normalize component */

var component = normalizeComponent(
  Button_srcvue_type_script_lang_js_,
  srcvue_type_template_id_066643fa_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./packages/Button/index.js
 // 为组件提供 install 安装方法，供按需引入

src.install = function (Vue) {
  Vue.component(src.name, src);
}; // 导出组件


/* harmony default export */ var Button = (src);
// CONCATENATED MODULE: ./packages/Tabs/src/Title.js
/* harmony default export */ var Title = ({
  name: 'SwTitle',
  props: {
    scrollable: Boolean,
    myIndex: Number,
    title: String,
    disabled: Boolean
  },
  data: function data() {
    return {
      children: []
    };
  },
  computed: {
    getClass: function getClass() {
      var className = '';

      if (this.scrollable) {
        className = className + ' scrollable';
      }

      if (this.disabled) {
        className = className + ' disabled';
      }

      return className;
    }
  },
  mounted: function mounted() {},
  methods: {},
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": this.getClass
    }, [this.title]);
  }
});
// CONCATENATED MODULE: ./packages/Tabs/src/Line.js
/* harmony default export */ var Line = ({
  name: 'SwLine',
  props: {
    lineStyle: Object
  },
  data: function data() {
    return {};
  },
  computed: {},
  mounted: function mounted() {},
  methods: {},
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": "sw_line",
      "style": this.lineStyle
    });
  }
});
// CONCATENATED MODULE: ./packages/Tabs/src/util.js
var scrollLeftRafId = '';
var cancelRaf = window.cancelAnimationFrame;
var raf = window.requestAnimationFrame;
function scrollLeftTo(scroller, to, duration) {
  if (!duration) {
    scroller.scrollLeft = to;
  }

  cancelRaf(scrollLeftRafId);
  var count = 0;
  var from = scroller.scrollLeft;
  var frames = duration === 0 ? 1 : Math.round(duration * 1000 / 16);

  function animate() {
    scroller.scrollLeft += (to - from) / frames;

    if (++count < frames) {
      scrollLeftRafId = raf(animate);
    }
  }

  animate();
}
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Tabs/src/index.vue?vue&type=script&lang=js&



/* harmony default export */ var Tabs_srcvue_type_script_lang_js_ = ({
  name: 'SwTabs',
  provide: function provide() {
    return {
      'parent': this
    };
  },
  props: {
    duration: {
      type: Number,
      default: 0.2
    },
    swipeThreshold: {
      type: Number,
      default: 4
    },
    active: {
      type: Number,
      default: 0
    }
  },
  model: {
    prop: 'active'
  },
  data: function data() {
    return {
      children: [],
      lineStyle: {},
      curIndex: 0
    };
  },
  computed: {
    scrollable: function scrollable() {
      return this.children.length > this.swipeThreshold;
    }
  },
  mounted: function mounted() {
    this.setCurIndex(this.active);
  },
  activated: function activated() {
    this.setCurIndex(this.active);
    this.setScroll(true);
  },
  methods: {
    setCurIndex: function setCurIndex() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.active;
      this.curIndex = index;
      this.$emit('input', this.curIndex);
    },
    sendClick: function sendClick(key) {
      if (this.children[key].disabled) {
        this.$emit('disableClick', key, this.children[key]);
      } else {
        this.setCurIndex(key);
        this.$emit('click', this.curIndex, this.children[this.curIndex]);
      }
    },
    setScroll: function setScroll(immediate) {
      var _this = this;

      this.$nextTick(function () {
        var _this$$refs = _this.$refs,
            nav = _this$$refs.nav,
            _this$$refs$titles = _this$$refs.titles,
            titles = _this$$refs$titles === void 0 ? null : _this$$refs$titles;
        if (!titles) return;
        var titleEl = titles[_this.curIndex].$el;
        var to = titleEl.offsetLeft - (nav.offsetWidth - titleEl.offsetWidth) / 2;
        scrollLeftTo(nav, to, immediate ? 0 : _this.duration);
      });
    },
    setLine: function setLine() {
      var _this2 = this;

      this.$nextTick(function () {
        var _this2$$refs$titles = _this2.$refs.titles,
            titles = _this2$$refs$titles === void 0 ? null : _this2$$refs$titles;

        if (!titles) {
          return;
        }

        var offsetWidth = titles[_this2.curIndex].$el.offsetWidth;
        var width = offsetWidth * 0.8;
        var left = _this2.curIndex * offsetWidth + (offsetWidth - width) / 2;
        _this2.lineStyle = {
          width: "".concat(width, "px"),
          transform: "translateX(".concat(left, "px)")
        };
      });
    }
  },
  watch: {
    children: function children() {
      this.setLine();
    },
    curIndex: function curIndex() {
      this.setLine();
      this.setScroll();
    },
    active: function active() {
      this.setCurIndex(this.active);
    }
  },
  render: function render() {
    var _this3 = this;

    var h = arguments[0];
    var nav = this.children.map(function (item, key) {
      return h(Title, {
        "ref": 'titles',
        "refInFor": true,
        "attrs": {
          "title": item.title,
          "disabled": item.disabled,
          "myIndex": key,
          "isActive": _this3.curIndex === key,
          "scrollable": _this3.scrollable
        },
        "nativeOn": {
          "click": function click() {
            _this3.sendClick(key);
          }
        }
      });
    });
    return h("div", [h("div", {
      "class": "sw_nav",
      "ref": "nav"
    }, [nav, h(Line, {
      "attrs": {
        "lineStyle": this.lineStyle
      }
    })]), h("div", {
      "class": "wrapper"
    }, [this.$slots.default])]);
  }
});
// CONCATENATED MODULE: ./packages/Tabs/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Tabs_srcvue_type_script_lang_js_ = (Tabs_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Tabs/src/index.vue
var src_render, src_staticRenderFns




/* normalize component */

var src_component = normalizeComponent(
  packages_Tabs_srcvue_type_script_lang_js_,
  src_render,
  src_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tabs_src = (src_component.exports);
// EXTERNAL MODULE: ./packages/Tabs/src/index.scss
var packages_Tabs_src = __webpack_require__(3);

// CONCATENATED MODULE: ./packages/Tabs/index.js

 // 为组件提供 install 安装方法，供按需引入

Tabs_src.install = function (Vue) {
  Vue.component(Tabs_src.name, Tabs_src);
}; // 导出组件


/* harmony default export */ var Tabs = (Tabs_src);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Tab/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Tab_srcvue_type_script_lang_js_ = ({
  name: 'SwTab',
  props: {
    title: String,
    name: String,
    myIndex: Number,
    disabled: Boolean
  },
  data: function data() {
    return {};
  },
  inject: ['parent'],
  computed: {
    show: function show() {
      return this.parent.curIndex;
    },
    index: function index() {
      return this.parent.children.indexOf(this);
    },
    isActive: function isActive() {
      return this.index === this.parent.curIndex;
    }
  },
  mounted: function mounted() {
    this.bindRelation();
  },
  methods: {
    bindRelation: function bindRelation() {
      this.parent.children.push(this);
    }
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "directives": [{
        name: "show",
        value: this.isActive
      }]
    }, [this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./packages/Tab/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Tab_srcvue_type_script_lang_js_ = (Tab_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Tab/src/index.vue
var Tab_src_render, Tab_src_staticRenderFns




/* normalize component */

var Tab_src_component = normalizeComponent(
  packages_Tab_srcvue_type_script_lang_js_,
  Tab_src_render,
  Tab_src_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tab_src = (Tab_src_component.exports);
// EXTERNAL MODULE: ./packages/Tab/src/index.scss
var packages_Tab_src = __webpack_require__(4);

// CONCATENATED MODULE: ./packages/Tab/index.js



Tab_src.install = function (Vue) {
  Vue.component(Tab_src.name, Tab_src);
}; // 导出组件


/* harmony default export */ var Tab = (Tab_src);
// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/utils/dom/event.js
function on(target, event, handler) {
  target.addEventListener(event, handler, false);
}
// CONCATENATED MODULE: ./packages/mixins/touch.js


var MIN_DISTANCE = 10;

function getDirection(x, y) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }

  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }

  return '';
}

var TouchMixin = {
  data: function data() {
    return {
      direction: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      offsetX: 0,
      offsetY: 0
    };
  },
  methods: {
    touchStart: function touchStart(event) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove: function touchMove(event) {
      var touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    },
    resetTouchStatus: function resetTouchStatus() {
      this.direction = '';
      this.deltaX = 0;
      this.deltaY = 0;
      this.offsetX = 0;
      this.offsetY = 0;
    },
    bindTouchEvent: function bindTouchEvent(el) {
      var onTouchStart = this.onTouchStart,
          onTouchMove = this.onTouchMove,
          onTouchEnd = this.onTouchEnd;
      on(el, 'touchstart', onTouchStart);
      on(el, 'touchmove', onTouchMove);

      if (onTouchEnd) {
        on(el, 'touchend', onTouchEnd);
        on(el, 'touchcancel', onTouchEnd);
      }
    }
  }
};
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Swiper/src/index.vue?vue&type=script&lang=js&


/* harmony default export */ var Swiper_srcvue_type_script_lang_js_ = ({
  name: 'SwSwiper',
  provide: function provide() {
    return {
      'parent': this
    };
  },
  mixins: [TouchMixin],
  props: {
    duration: {
      type: Number,
      default: 0.3
    },
    vertical: {
      type: Boolean,
      default: false
    },
    active: {
      type: [Number, String],
      default: 0
    },
    loop: {
      type: Boolean,
      default: false
    },
    indicator: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: [String, Number],
      default: 0
    }
  },
  model: {
    prop: 'active'
  },
  data: function data() {
    return {
      children: [],
      curIndex: 0,
      offset: 0,
      containerWidth: 0,
      animate: false,
      canMove: true,
      first: '',
      itemHeight: '',
      last: ''
    };
  },
  computed: {
    delta: function delta() {
      return this.vertical ? this.deltaY : this.deltaX;
    },
    autoDuration: function autoDuration() {
      if (typeof this.autoplay === 'string') {
        return parseInt(this.autoplay) * 1000;
      } else {
        return this.autoplay;
      }
    },
    containerStyle: function containerStyle() {
      return {
        height: this.itemHeight ? this.itemHeight + 'px' : 'auto'
      };
    },
    trackStyle: function trackStyle() {
      return {
        transform: this.getTransNumber(this.offset),
        transitionDuration: this.animate ? this.duration + 's' : '0s'
      };
    },
    touchable: function touchable() {
      return !this.animate;
    },
    curOffset: function curOffset() {
      return -this.curIndex * this.containerWidth;
    },
    notNext: function notNext() {
      return this.curIndex === this.children.length - 1 && this.delta < 0;
    },
    notPrev: function notPrev() {
      return this.curIndex === 0 && this.delta > 0;
    },
    isboundary: function isboundary() {
      return !this.notNext || !this.cnotPrev;
    },
    len: function len() {
      return this.children.length;
    },
    target: function target() {
      return this.len * this.containerWidth;
    }
  },
  mounted: function mounted() {
    this.bindTouchEvent(this.$refs.track);
    this.getSwipeLen();
    this.play();
  },
  activated: function activated() {},
  methods: {
    getSwipeLen: function getSwipeLen() {
      var offsetWidth = this.$refs.track.offsetWidth;
      this.containerWidth = this.vertical ? this.itemHeight : offsetWidth;
    },
    closeAutoTimer: function closeAutoTimer() {
      this.autoTimer && clearTimeout(this.autoTimer);
    },
    play: function play() {
      var _this = this;

      if (this.autoplay && this.len > 1) {
        this.closeAutoTimer();
        this.autoTimer = setTimeout(function () {
          _this.curIndex++;

          if (_this.curIndex === _this.len) {
            _this.children[0].$el.style.transform = _this.getTransNumber(_this.target);
            _this.isChange = true;
          }

          _this.goTo();
        }, this.autoDuration);
      }
    },
    clear: function clear() {
      clearTimeout(this.timer);
    },
    getTransNumber: function getTransNumber(num) {
      return "translate".concat(this.vertical ? 'Y' : 'X', "(").concat(num, "px)");
    },
    onTouchStart: function onTouchStart(event) {
      if (!this.touchable) return;
      this.touchStartTime = Date.now();
      this.closeAutoTimer();
      this.clear();
      this.touchStart(event);
    },
    onTouchMove: function onTouchMove(event) {
      this.touchMove(event);
      this.getMoveStatus();
      this.changePosition();
      this.goTo(false);
      event.preventDefault();
    },
    changePosition: function changePosition() {
      if (this.loop) {
        if (this.notPrev) {
          this.children[this.len - 1].$el.style.transform = this.getTransNumber(-this.target);
        }

        if (this.notNext) {
          this.children[0].$el.style.transform = this.getTransNumber(this.target);
        }
      }
    },
    getMoveStatus: function getMoveStatus() {
      if (!this.loop) {
        this.canMove = this.notNext || this.notPrev ? false : true;
      }
    },
    goTo: function goTo() {
      var _this2 = this;

      var staus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.canMove) return;

      if (!staus && typeof staus === "boolean") {
        this.offset = this.curOffset + this.delta;
        return;
      }

      this.beforeIndex = this.curIndex;
      var duration = Date.now() - this.touchStartTime;
      var speed = this.delta / duration;
      var shouldSwipe = Math.abs(speed) > 0.25 || Math.abs(this.delta) >= this.containerWidth / 2;

      if (shouldSwipe) {
        this.delta > 0 ? this.curIndex-- : this.curIndex++;
      }

      if (typeof staus === 'number') {
        this.curIndex = staus;
      }

      this.offset = this.curOffset;

      if (this.curIndex < 0 || this.curIndex >= this.children.length) {
        this.isChange = true;
        this.curIndex = this.curIndex < 0 ? this.children.length - 1 : 0;
      }

      this.animate = true;
      this.clear();
      this.timer = setTimeout(function () {
        _this2.animate = false;

        if (_this2.beforeIndex !== _this2.curIndex) {
          _this2.$emit('change', _this2.curIndex);
        }

        var len = _this2.children.length - 1;

        if (_this2.isChange || _this2.beforeIndex == _this2.curIndex) {
          _this2.children[len].$el.style.transform = '';
          _this2.children[0].$el.style.transform = '';
          _this2.offset = _this2.curOffset;
          _this2.isChange = false;
        }

        _this2.play();
      }, this.duration * 1000);
    },
    onTouchEnd: function onTouchEnd() {
      this.goTo();
      this.play();
    },
    getIndicator: function getIndicator() {
      var _this3 = this;

      var h = this.$createElement;
      return h("ul", {
        "class": "sw_indicator ".concat(this.vertical ? 'vertical' : '')
      }, [this.children.map(function (el, index) {
        return h("li", {
          "class": "sw_dot ".concat(_this3.curIndex === index ? 'active' : ''),
          "on": {
            "click": function click() {
              _this3.goTo(index);
            }
          }
        });
      })]);
    }
  },
  watch: {},
  render: function render() {
    var h = arguments[0];
    return h("div", [h("div", {
      "class": "sw_container",
      "style": this.containerStyle
    }, [h("div", {
      "class": "sw_swiper_area ".concat(this.touchable ? '' : 'disable', " ").concat(this.vertical ? 'vertical' : ''),
      "ref": "track",
      "style": this.trackStyle
    }, [this.$slots.default]), this.getIndicator()])]);
  }
});
// CONCATENATED MODULE: ./packages/Swiper/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Swiper_srcvue_type_script_lang_js_ = (Swiper_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Swiper/src/index.vue
var Swiper_src_render, Swiper_src_staticRenderFns




/* normalize component */

var Swiper_src_component = normalizeComponent(
  packages_Swiper_srcvue_type_script_lang_js_,
  Swiper_src_render,
  Swiper_src_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Swiper_src = (Swiper_src_component.exports);
// EXTERNAL MODULE: ./packages/Swiper/src/index.scss
var packages_Swiper_src = __webpack_require__(5);

// CONCATENATED MODULE: ./packages/Swiper/index.js

 // 为组件提供 install 安装方法，供按需引入

Swiper_src.install = function (Vue) {
  Vue.component(Swiper_src.name, Swiper_src);
}; // 导出组件


/* harmony default export */ var Swiper = (Swiper_src);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Swiper-item/src/index.vue?vue&type=script&lang=js&
/* harmony default export */ var Swiper_item_srcvue_type_script_lang_js_ = ({
  name: 'SwSwiperItem',
  props: {
    title: String,
    myIndex: Number,
    disabled: Boolean
  },
  data: function data() {
    return {};
  },
  inject: ['parent'],
  computed: {
    show: function show() {
      return this.parent.curIndex;
    },
    index: function index() {
      return this.parent.children.indexOf(this);
    },
    isActive: function isActive() {
      return this.index === this.parent.curIndex;
    }
  },
  mounted: function mounted() {
    this.bindRelation();
    this.bindHeight();
  },
  methods: {
    bindRelation: function bindRelation() {
      this.parent.children.push(this);
    },
    bindHeight: function bindHeight() {
      if (!this.parent.itemHeight) {
        this.parent.itemHeight = this.$el.offsetHeight;
      }
    },
    con: function con() {}
  },
  render: function render() {
    var h = arguments[0];
    return h("div", {
      "class": "sw-swipe-item",
      "on": {
        "click": this.con
      }
    }, [this.$slots.default]);
  }
});
// CONCATENATED MODULE: ./packages/Swiper-item/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Swiper_item_srcvue_type_script_lang_js_ = (Swiper_item_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Swiper-item/src/index.vue
var Swiper_item_src_render, Swiper_item_src_staticRenderFns




/* normalize component */

var Swiper_item_src_component = normalizeComponent(
  packages_Swiper_item_srcvue_type_script_lang_js_,
  Swiper_item_src_render,
  Swiper_item_src_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Swiper_item_src = (Swiper_item_src_component.exports);
// EXTERNAL MODULE: ./packages/Swiper-item/src/index.scss
var packages_Swiper_item_src = __webpack_require__(6);

// CONCATENATED MODULE: ./packages/Swiper-item/index.js



Swiper_item_src.install = function (Vue) {
  Vue.component(Swiper_item_src.name, Swiper_item_src);
}; // 导出组件


/* harmony default export */ var Swiper_item = (Swiper_item_src);
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
/* harmony default export */ var Loading_srcvue_type_script_lang_js_ = ({
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
 /* harmony default export */ var packages_Loading_srcvue_type_script_lang_js_ = (Loading_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Loading/src/index.vue





/* normalize component */

var Loading_src_component = normalizeComponent(
  packages_Loading_srcvue_type_script_lang_js_,
  srcvue_type_template_id_8320016e_render,
  srcvue_type_template_id_8320016e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Loading_src = (Loading_src_component.exports);
// EXTERNAL MODULE: ./packages/Loading/src/index.scss
var packages_Loading_src = __webpack_require__(7);

// CONCATENATED MODULE: ./packages/Loading/index.js

 // 为组件提供 install 安装方法，供按需引入

Loading_src.install = function (Vue) {
  Vue.component(Loading_src.name, Loading_src);
}; // 导出组件


/* harmony default export */ var Loading = (Loading_src);
// CONCATENATED MODULE: ./packages/Popup/src/overlayer.js
/* harmony default export */ var overlayer = ({
  name: 'OverLayer',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value'
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {},
  render: function render() {
    var h = arguments[0];
    return h("transition", {
      "attrs": {
        "name": "sw_overLayer"
      }
    }, [h("div", {
      "directives": [{
        name: "show",
        value: this.value
      }],
      "class": "sw_overLayer"
    })]);
  }
});
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Popup/src/index.vue?vue&type=script&lang=js&
//
//

/* harmony default export */ var Popup_srcvue_type_script_lang_js_ = ({
  name: 'SwPopup',
  props: {
    type: String,
    position: {
      type: String,
      default: 'bottom'
    },
    value: {
      type: Boolean,
      default: false
    },
    popupStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  model: {
    prop: 'value'
  },
  data: function data() {
    return {};
  },
  computed: {
    curPosition: function curPosition() {
      return "position_".concat(this.position);
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  watch: {},
  methods: {
    getDefault: function getDefault() {
      var h = this.$createElement;
      var hasSlot = this.$slots.default ? true : false;
      return h("div", {
        "directives": [{
          name: "show",
          value: this.value
        }],
        "class": "sw_popup ".concat(this.curPosition, " ").concat(hasSlot ? '' : 'default'),
        "style": this.popupStyle
      }, [this.$slots.default]);
    },
    close: function close() {
      this.$emit('input', false);
    }
  },
  render: function render() {
    var _this = this;

    var h = arguments[0];
    var con = this.getDefault();
    return h("div", [h(overlayer, {
      "model": {
        value: _this.value,
        callback: function callback($$v) {
          _this.value = $$v;
        }
      },
      "nativeOn": {
        "click": function click() {
          _this.close();
        }
      }
    }), h("transition", {
      "attrs": {
        "name": "".concat(this.curPosition)
      }
    }, [con])]);
  }
});
// CONCATENATED MODULE: ./packages/Popup/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Popup_srcvue_type_script_lang_js_ = (Popup_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Popup/src/index.vue
var Popup_src_render, Popup_src_staticRenderFns




/* normalize component */

var Popup_src_component = normalizeComponent(
  packages_Popup_srcvue_type_script_lang_js_,
  Popup_src_render,
  Popup_src_staticRenderFns,
  false,
  null,
  "58fbbbe0",
  null
  
)

/* harmony default export */ var Popup_src = (Popup_src_component.exports);
// EXTERNAL MODULE: ./packages/Popup/src/index.scss
var packages_Popup_src = __webpack_require__(8);

// CONCATENATED MODULE: ./packages/Popup/index.js

 // 为组件提供 install 安装方法，供按需引入

Popup_src.install = function (Vue) {
  Vue.component(Popup_src.name, Popup_src);
}; // 导出组件


/* harmony default export */ var Popup = (Popup_src);
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Toast/src/index.vue?vue&type=template&id=32c19294&
var srcvue_type_template_id_32c19294_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"sw_toast"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"sw_toast_wrapper",class:{'sw_icon':_vm.loading},style:(_vm.toastStyle)},[_c('sw-loading',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loading",attrs:{"size":"40","color":"#fff"}}),_vm._v(" "),_c('span',{domProps:{"textContent":_vm._s(_vm.text)}})],1)])}
var srcvue_type_template_id_32c19294_staticRenderFns = []


// CONCATENATED MODULE: ./packages/Toast/src/index.vue?vue&type=template&id=32c19294&

// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Toast/src/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Toast_srcvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./packages/Toast/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_Toast_srcvue_type_script_lang_js_ = (Toast_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/Toast/src/index.vue





/* normalize component */

var Toast_src_component = normalizeComponent(
  packages_Toast_srcvue_type_script_lang_js_,
  srcvue_type_template_id_32c19294_render,
  srcvue_type_template_id_32c19294_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Toast_src = (Toast_src_component.exports);
// EXTERNAL MODULE: ./packages/Toast/src/index.scss
var packages_Toast_src = __webpack_require__(9);

// CONCATENATED MODULE: ./packages/Toast/index.js


 // 为组件提供 install 安装方法，供按需引入

var instance = '';

Toast_src.install = function (Vue, options) {
  var _options$name = options.name,
      name = _options$name === void 0 ? "toast" : _options$name;
  Vue.prototype["$".concat(name)] = ToastConstuctor;

  function ToastConstuctor(props) {
    if (!instance) {
      var Instance = Vue.extend(Toast_src);
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


/* harmony default export */ var Toast = (Toast_src);
// CONCATENATED MODULE: ./packages/index.js
// 导入button组件


 // import './Tab/src/index.scss'

 // import './Swiper/src/index.scss'

 // import './Swiper-item/src/index.scss'

 // import './Loading/src/index.scss'


 // import './Popup/src/index.scss'
// 组件列表

var components = [Button, Tabs, Tab, Swiper, Swiper_item, Loading, Popup, Toast]; // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

var install = function install(Vue) {
  // 判断是否安装
  if (install.installed) return; // 遍历注册全局组件

  components.map(function (component) {
    return Vue.component(component.name, component);
  });
}; // 判断是否是直接引入文件


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}


/* harmony default export */ var packages_0 = __webpack_exports__["default"] = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install: install // 以下是具体的组件列表

});

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map