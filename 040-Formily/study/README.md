Formily
===

> Create by **jsliang** on **2023-02-09 22:54:29**  
> Recently revised in **2023-02-09 22:54:29**

【劝退指南】

当前 **jsliang** 对于 Formily 的学习路径是这样的：

* [Formily 主仓库](https://formilyjs.org/zh-CN)
* [Formily Core Library](https://core.formilyjs.org/zh-CN)
* [Formily React Library](https://react.formilyjs.org/zh-CN)
* [Formily Antd Library](https://antd.formilyjs.org/zh-CN)

**首先**，如果你和我一样，一开始就抱有某种目的，想实现自定义形式的组件之类的，那么建议你，一定要有耐心，细心地接受各种文档。

**然后**，上面 4 个仓库的学习方式，其实就是：

1. 先看「Formily 主仓库」，先了解一些概念
2. 然后逐个看 Core 和 React/Vue 能提供什么功能，它是怎样的一种形式来接入的
3. 如果想结合某套 UI 框架，做复杂设计，就要看看 Formily 对接 Antd 是怎么操作的

**最后**，祝你工作顺利，编码愉快。

## 创建项目

**因为**，使用 Create React APP，会比较慢，当前比较好的解决方式，是注册淘宝源，但是快不到哪里。

所以我选择使用 Vite。

这里附带上更改淘宝源和通过 Create React APP 创建的方法：

* 修改淘宝源：`npm config set registry https://registry.npm.taobao.org`
* 安装项目：`npm init react-app formily`
* 手动删除 `package-lock.json`
* PNPM 安装依赖包：`pnpm i`

## 安装 Formily

* 安装内核库：`pnpm i @formily/core -S`
* 安装 React 桥接库：`pnpm i @formily/react -S`
* 【可选】安装 UI 组件库：`pnpm i antd moment @formily/antd -S`

因为 Formily 需要 Less，所以还需要补充安装：

* 安装 Less：`pnpm i less`

## 初始化项目

将 `src` 目录下的内容清空，并修改 `src/index.js` 里面的内容如下；

> src/index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div className="App">
      123
    </div>
  );
}

// 最终渲染节点
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

React 构建的时候，会打包 `src/index.js` 的内容，最终挂载到 `index.html` 的 `#root` 节点上。

## 初次接入 Formily

我们稍微修改下 `src/index.js`，让它引入一个新组件 `Formily.js`

> src/index.js

```diff
const App = () => {
  return (
    <div className="App">
-      123
+      <Formily />
    </div>
  );
};
```

> src/Formily.js

```js
import React from 'react';
import { createForm } from '@formily/core';
import { FormProvider, createSchemaField } from '@formily/react';

// 自定义组件，渲染了一个普通的 Input
const Input = (props) => {
  const { onChange, placeholder, value = '' } = props;
  console.log('props:', props);
  return (
    <input onChange={onChange} placeholder={placeholder} value={value} />
  );
};

const form = createForm();

const SchemaField = createSchemaField({
  components: {
    Input,
  },
});

const schema = {
  type: 'object',
  properties: {
    input: {
      type: 'string',
      // 自定义组件
      'x-component': 'Input',
      // 自定义参数
      'x-component-props': {
        placeholder: '请输入',
        required: true,
      },
    },
  },
};

export default () => (
  <FormProvider form={form}>
    <SchemaField schema={schema} />
  </FormProvider>
)

```

这里解释下里面的关键词：

* `createForm`：用来创建表单核心领域模型，它是作为 MVVM 设计模式的标准 ViewModel
* `FormProvider（createSchemaField）`：组件是作为视图层桥接表单模型的入口，它只有一个参数，就是接收 `createForm` 创建出来的 Form 实例，并将 Form 实例以上下文形式传递到子组件中

此时界面渲染如下所示：

![图](./img/f-01.png)

## 实现自定义组件

实现业务自定义组件主要是使用` @formily/react` 中的 `Hooks API` 与 `observer API`。

接入现成组件库的话，我们主要使用 `connect/mapProps/mapReadPretty` API。

如果想要实现一些更复杂的自定义组件，我们强烈推荐直接看 `@formily/antd` 或 `@formily/next` 的源码。

## Vite - 一生之敌

前端，成也版本，败也版本。

不要老尝试着尝鲜，尤其是碰到不讲理的……

如果选择通过 Vite 创建 React 项目，并通过 `pnpm` 安装包：

* 创建项目：`pnpm create vite my-vue-app --template react`
* 安装包：`pnpm i`
* 开发环境：`pnpm run dev`

并且在项目中使用 Formily，当前生成 `package.json` 如下：

> package.json

```json
{
  "name": "my-formily",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@ant-design/icons": "^5.0.1",
    "@formily/antd": "^2.2.18",
    "@formily/core": "^2.2.18",
    "@formily/react": "^2.2.18",
    "antd": "^5.2.0",
    "less": "^4.1.3",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.1.1"
  }
}
```

然后，你就会因为 `[less] '~antd/es/style/themes/index.less' wasn't found.`，陷入无边恐惧中。

### 问题 1：`Internal server error: [less] '~antd/es/style/themes/index.less' wasn't found.`

修复方式：修改 `vite.config.js` 配置：

> vite.config.js

```js
import path from 'path';
import fs from 'fs';

// 盘外招：不知道 Vite 打包构建流程是怎么将 import 'xxx' 变为 import ''，那就干脆自己建立文件吧
// 问题参考：https://github.com/ant-design/pro-components/issues/4880
const dir = path.resolve(__dirname);
const themes = `${dir}/node_modules/antd/es/style/themes`;
if (!fs.existsSync(themes)) {
  fs.mkdirSync(themes);
}
const themesLess = `${dir}/node_modules/antd/es/style/themes/index.less`;
fs.writeFileSync(themesLess, '');

export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          '@ant-prefix': 'antd',
        }
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/, 
        replacement: '',
      },
      {
        find: '@', 
        replacement: path.resolve(__dirname, './src')
      }
    ],
  },
});
```

### 问题 2：`[vite] Internal server error: [less] ENOENT: no such file or directory, open '项目根路径\antd\lib\input\style\mixin.less'`

修复方式：新增文件

同问题 `Internal server error: [less] '~antd/es/style/themes/index.less' wasn't found.` 的修复方式，用一下盘外招。

修复不不动了，压根不是这么一回事……

### 问题 3：`[vite] Internal server error: [less] variable @ant-prefix is undefined`

修复方式：新增 `modifyVars` 改造变量

> vite.config.js

```js
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
        modifyVars: {
          '@ant-prefix': 'antd',
          '@form-item-margin-bottom': 'antd',
          '@border-color-split': 'antd',
          '@error-color': 'antd',
          '@primary-5': 'antd',
          '@text-color': 'antd',
        }
      },
    },
  },
});
```

## 报错及其修复

### Warning: A component is changing an uncontrolled input to be controlled.

报错内容：

```
Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
```

修复方式：

这是因为设置 `<input>` 的时候，如果你没有设置默认的 `value`。

那么第一次传递的参数，是 `<input value=undefined />`，此时 React 会认为是非受控组件，从而导致报错。

这种问题只需要初始化它的值即可。

> Input

```js
const Input = (props) => {
  const {
    disabled, onBlur, onChange, onFocus, placeholder,
    // 注意设置默认值
    value = '',
  } = props;
  console.log('props:', props);
  return (
    <input
      disabled={disabled}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      value={value}
    />
  );
};
```

## 参考文献

* [React + vite 引入 antd 并按需引入](https://blog.51cto.com/u_15709205/5447820)
* [[plugin:vite:css] '~antd/es/style/themes/index.less' wasn't found.🐛[BUG] #4880](https://github.com/ant-design/pro-components/issues/4880)
* [单测出现问题：Cannot find module 'antd/es/theme/style' from 'node_modules/@ant-design/pro-provider/es/index.js' ](https://github.com/ant-design/pro-components/issues/6104)
* [略微探究 React StrictMode 两次渲染的问题](https://juejin.cn/post/7009189602506309640)
* [前端 DSL 实践指南—— 内部 DSL](https://ost.51cto.com/posts/3409)
* [JSON Schema](https://json-schema.org/)
* [关于react组件报错“A component is changing an uncontrolled input of type text to be controlled”](https://www.jianshu.com/p/796a9d0da8e9)
* [Formily - React](https://react.formilyjs.org/zh-CN/guide/concept)
* [Formily 2.0 更新概要](https://github.com/alibaba/formily/discussions/1087)

---

**不折腾的前端，和咸鱼有什么区别！**

觉得文章不错的小伙伴欢迎点赞/点 Star。

如果小伙伴需要联系 **jsliang**：

* [Github](https://github.com/LiangJunrong/document-library)
* [掘金](https://juejin.im/user/3403743728515246)

个人联系方式存放在 Github 首页，欢迎一起折腾~

争取打造自己成为一个充满探索欲，喜欢折腾，乐于扩展自己知识面的终身学习斜杠程序员。

> jsliang 的文档库由 [梁峻荣](https://github.com/LiangJunrong) 采用 [知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议](http://creativecommons.org/licenses/by-nc-sa/4.0/) 进行许可。<br/>基于 [https://github.com/LiangJunrong/document-library](https://github.com/LiangJunrong/document-library) 上的作品创作。<br/>本许可协议授权之外的使用权限可以从 [https://creativecommons.org/licenses/by-nc-sa/2.5/cn/](https://creativecommons.org/licenses/by-nc-sa/2.5/cn/) 处获得。
