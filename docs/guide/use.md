# 快速上手

### 引入 Mvue

你可以引入整个 Mvue，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。

#### 完整引入

在 main.js 中写入以下内容:

```javascript
import Vue from 'vue';
import MvueUI from 'mvue-ui';
import 'mvue-ui/lib/theme/index.css';
import App from './App.vue';

Vue.use(MvueUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

#### 按需引入

借助 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-import：

```bash
npm install babel-plugin-import --save-dev
```

然后， 在 babel.config.js 中配置

```javascript
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'mvue-ui',
        customStyleName: (name) => {
          return `mvue-ui/lib/theme/${name}.css`
        },
        customName: (name) => {
          return `mvue-ui/lib/${name}.common.js`
        }
      }
    ]
  ]
}
```

#### 接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { Button, Select } from 'mvue-ui';
import App from './App.vue';

Vue.use(Button)
Vue.use(Select)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

