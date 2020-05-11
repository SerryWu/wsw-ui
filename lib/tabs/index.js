(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("tabs", [], factory);
	else if(typeof exports === 'object')
		exports["tabs"] = factory();
	else
		root["tabs"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./packages/tabs/src/Title.js
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
// CONCATENATED MODULE: ./packages/tabs/src/Line.js
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
// CONCATENATED MODULE: ./packages/tabs/src/util.js
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
// CONCATENATED MODULE: ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.2@vue-loader/lib??vue-loader-options!./packages/tabs/src/index.vue?vue&type=script&lang=js&



/* harmony default export */ var srcvue_type_script_lang_js_ = ({
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
// CONCATENATED MODULE: ./packages/tabs/src/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_srcvue_type_script_lang_js_ = (srcvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/_vue-loader@15.9.2@vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(0);

// CONCATENATED MODULE: ./packages/tabs/src/index.vue
var src_render, staticRenderFns




/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  tabs_srcvue_type_script_lang_js_,
  src_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src = (component.exports);
// EXTERNAL MODULE: ./packages/tabs/src/index.scss
var tabs_src = __webpack_require__(10);

// CONCATENATED MODULE: ./packages/tabs/index.js

 // 为组件提供 install 安装方法，供按需引入

src.install = function (Vue) {
  Vue.component(src.name, src);
}; // 导出组件


/* harmony default export */ var tabs = __webpack_exports__["default"] = (src);

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map