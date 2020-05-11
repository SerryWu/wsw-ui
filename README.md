# 快速开始

```javascript
npm i wsw-ui
```

```javascript
import Vue from 'vue'
import wswui from 'wsw-ui'

Vue.use(wswui)
```

支持按需加载需要[babel-plugin-component](https://github.com/ElementUI/babel-plugin-component)，在.babelrc配置

```javascript
import {
  Tabs,
  Tab
} from 'wsw-ui'

Vue.component(Tabs.name, Tabs)
Vue.component(Tab.name, Tab)
```

```javascript
module.exports = {
  "plugins": [
    ["component", { libraryName: "wsw-ui"}] 
  ]
}

```

demo[预览地址](https://serrywu.github.io/wsw-ui/doc/index.html)

二维码预览

![](https://serrywu.github.io/wsw-ui/demo二维码.png)
