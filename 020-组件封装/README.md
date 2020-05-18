020 - 组件封装
===

> Create by **jsliang** on **2020-05-18 07:43:23**  
> Recently revised in **2020-5-18 09:10:29**  

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

开发步骤：

### 步骤一：创建初始化 HTML、CSS

> index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>文本</title>
    <link rel="stylesheet" href="./index.css">
  </head>

  <body>
    <div class="modal-wrapper"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span class="modal-title">提示</span>
        <span class="modal-close">X</span>
      </div>
      <div class="modal-body">
        <span>这是一段文本</span>
        <input class="input-inner" type="text" />
      </div>
      <div class="modal-footer">
        <span class="modal-default">取消</span>
        <span class="modal-primary">确定</span>
      </div>
    </div>
    <button class="open-dialog">打开弹窗</button>

    <script type="module">

    </script>
  </body>
</html>
```

> index.css

```css
.modal-dialog {
  width: 30%;
  z-index: 999;
  display: block;
  position: absolute;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  margin: 0 auto;
  top: 15vh;
  left: 30%;
}

.modal-wrapper {
  position: fixed;
  left: 0px;
  top: 0px;
  bottom: 0px;
  right: 0px;
  background: black;
  opacity: 0.4;
  z-index: 998;
}

.modal-header {
  padding: 20px 20px 10px;
  height: 30px;
  background: deepskyblue;
  color: #fff;
}

.modal-header .modal-title {
  line-height: 24px;
  font-size: 18px;
  float: left;
}

.modal-body {
  padding: 30px 20px;
  color: #606266;
  font-size: 14px;
}

.modal-footer {
  padding: 10px 20px 30px;
  text-align: right;
}

.modal-close {
  color: #909399;
  font-weight: 400;
  float: right;
  cursor: pointer;
}

.modal-default {
  color: #606266;
  border: 1px solid #dcdfe6;
  text-align: center;
  cursor: pointer;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 500;
  margin-right: 10px;
}

.modal-default:hover {
  color: #409eff;
  background: #ecf5ff;
  border-color: #c6e2ff;
}

.modal-primary {
  border: 1px solid #dcdfe6;
  text-align: center;
  cursor: pointer;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  font-weight: 500;
  background: #409eff;
  color: #fff;
  margin-left: 10px;
}

.modal-primary:hover {
  background: #66b1ff;
}
.modal-input {
  width: 100%;
  margin-left: 20px;
  margin-bottom: 20px;
}
.input-inner {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
  margin-top: 20px;
}
```

### 步骤二：初始化 JS

> index.html

```html
<script type="module">
  import Dialog from './index.js';
  const dialog = new Dialog({
    width: '30%',
    height: '250px',
    title: 'jsliang 的弹窗',
    content: 'jsliang 的弹窗内容',
    dragable: false, // 是否可拖拽
    maskable: false, // 是否有遮罩
    isCancel: false, // 是否有取消
    success: () => {
      console.log('成功了打算做。。。');
    },
    cancel: () => {
      console.log('取消了打算做。。。');
    },
    close: () => {
      console.log('关闭了打算做。。。');
    }
  });
</script>
```

> index.js

```js
class Dialog extends EventTarget {
  constructor(obj) {
    super();
    // 默认配置
    const defaultOptions = {
      width: '40%',
      height: '300px',
      title: '弹窗标题',
      content: '弹窗内容',
      dragable: true, // 是否可拖拽
      maskable: true, // 是否有遮罩
      isCancel: true, // 是否有取消
      success: () => {
        console.log('点击成功');
      },
      cancel: () => {
        console.log('点击取消');
      },
      close: () => {
        console.log('点击关闭');
      }
    }
    // 合并配置，并将其挂载到 this 上
    this.options = Object.assign(defaultOptions, obj);

    // 执行命令
    this.createDOM();

    // 查看 this 内容
    console.log(this);
  }

  // 生成 DOM 结构
  createDOM() {
    const divElement = document.createElement('div');
    divElement.classList.add('container');
    divElement.style.display = 'none';
    divElement.innerHTML = `
      <div class="modal-wrapper"></div>
      <div
        class="modal-dialog"
        style="width: ${this.options.width}; height: ${this.options.height}"
      >
        <div class="modal-header">
          <span class="modal-title">${this.options.title}</span>
          <span class="modal-close">X</span>
        </div>
        <div class="modal-body">
          <span>${this.options.content}</span>
          <input class="input-inner" type="text" />
        </div>
        <div class="modal-footer">
          ${this.options.isCancel ? '<span class="modal-default">取消</span>' : ''}
          <span class="modal-primary">确定</span>
        </div>
      </div>
    `;
    // 挂载到 this 上
    this.divElement = divElement;
    // 渲染到 body
    document.querySelector('body').appendChild(divElement);
  }
}

export default Dialog;
```

### 步骤三：逐步完善功能

做完上面后，逐步完善功能：

1. `openDialog()`：打开对话框
2. `init()`：初始化弹窗（里面布置允许拖拽以及弹窗点击等）
3. `modalDialog.addEventListener('click', (e) => {}`：弹窗内容点击触发对应的关闭或者确定事件
4. `this.addEventListener('success', this.options.success)`：通过内置的 `EventTarget` 触发 `success` 事件监听
5. `dragable()`：允许拖拽

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

`EventTarget()` 构造方法将会创建一个新的 `EventTarget` 对象实例。

* [【MDN】《EventTarget()》](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/EventTarget)

---

**不折腾的前端，和咸鱼有什么区别！**

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。