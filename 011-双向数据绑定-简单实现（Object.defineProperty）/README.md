011 - 双向数据绑定 - 简单实现（Object.defineProperty）
===

> Create by **jsliang** on **2020-4-22 22:55:38**  
> Recently revised in **2020-04-23 16:09:25**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

根据 `Object.defineProperty()` 来实现简单的双向数据绑定。

### Object.defineProperty()

* 语法：`Object.defineProperty(obj, prop, { ...描述 })`
* 作用：该方法允许精确地添加或者修改对象的属性。
* `configurable`：允许对象的属性被删除。默认为 `false`。
* `enumerable`：允许通过 `for...in` 枚举对象。默认为 `false`。
* ……

### CustomEvent

* 作用：`CustomEvent` 事件是由程序创建的，可以有任意自定义功能的事件。

### EventTarget

* 作用：`EventTarget` 是一个可以接收事件的对象实现的接口，并且可以为它们创建侦听器。
* `EventTarget.dispatchEvent()`：将事件分派到此 `EventTarget`。

### 实现机制

首先，我们将数据的每一项添加到监听对象：

```js
// 绑定事件二次渲染视图
for (let i = 0; i < result.length; i++) {
  this.addEventListener(result[i], e => {
    if (result[i] === e.type) {
      textContent = textContent.replace(this._data[result[i]], e.detail);
    }
    node.textContent = textContent;
  });
}
```

然后，通过 `CustomEvent` 创建 `key` 自定义的事件，即：`detail`。并通过 `EventTarget.dispatchEvent()` 通知有事件改动：

```js
observer(data) {
  for (let key in data) {
    let value = data[key];
    const _this = this;
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {
        return value;
      },
      set(newValue) {
        // 触发事件
        const event = new CustomEvent(key, {
          detail: newValue,
        });
        _this.dispatchEvent(event);
        if (newValue !== value) {
          value = newValue;
        }
      }
    });
  }
};
```

最后，收到通知了，那么 `addEventListener` 那边就跑起来了。

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

* [【MDN】《Object.defineProperty()》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
* [【MDN】《CustomEvent》](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent)
* [【MDN】《EventTarget》](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)

---

**不折腾的前端，和咸鱼有什么区别！**

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。