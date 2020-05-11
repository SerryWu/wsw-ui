(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define("swiper", ["vue"], factory);
	else if(typeof exports === 'object')
		exports["swiper"] = factory(require("vue"));
	else
		root["swiper"] = factory(root["Vue"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_9_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_5_3_css_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_node_modules_sass_loader_8_0_2_sass_loader_dist_cjs_js_node_modules_vue_loader_15_9_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"Vue","commonjs":"vue","commonjs2":"vue","amd":"vue"}
var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(3);

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
// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/Button/src/index.vue?vue&type=template&id=066643fa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sw_button"},[_vm._t("default")],2)}
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
var srcvue_type_style_index_0_lang_css_ = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/Button/src/index.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Button_srcvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src = (component.exports);
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/swiper/src/index.vue?vue&type=script&lang=js&


/* harmony default export */ var swiper_srcvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./packages/swiper/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_swiper_srcvue_type_script_lang_js_ = (swiper_srcvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/swiper/src/index.vue
var src_render, src_staticRenderFns




/* normalize component */

var src_component = Object(componentNormalizer["a" /* default */])(
  packages_swiper_srcvue_type_script_lang_js_,
  src_render,
  src_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var swiper_src = (src_component.exports);
// EXTERNAL MODULE: ./packages/swiper/src/index.scss
var packages_swiper_src = __webpack_require__(8);

// CONCATENATED MODULE: ./packages/swiper/index.js

 // 为组件提供 install 安装方法，供按需引入

swiper_src.install = function (Vue) {
  Vue.component(swiper_src.name, swiper_src);
}; // 导出组件


/* harmony default export */ var swiper = __webpack_exports__["default"] = (swiper_src);

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map