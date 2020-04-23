013 - 双向数据绑定 - 改造升级（Proxy）
===

> Create by **jsliang** on **2020-4-22 22:57:19**  
> Recently revised in **2020-04-23 16:31:36**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 参考文献](#chapter-three) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

* `Proxy`
* 语法：`const p = new Proxy(target, handler)`
* 参数：
  * `target`：要使用 `Proxy` 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
  * `handler`：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 `p` 的行为。

在原本使用 `Object.defineProperty()` 的时候：

```js
observer(data) {
  const dep = new Dep();
  for (let key in data) {
    let value = data[key];
    Object.defineProperty(data, key, {
      configurable: true,
      enumerable: true,
      get() {
        if (Dep.target) {
          dep.addSub(Dep.target);
        }
        return value;
      },
      set(newValue) {
        dep.notify(newValue, key);
        if (newValue !== value) {
          value = newValue;
        }
      }
    });
  }
};
```

升级为 `Proxy` 之后：

```js
observer(data) {
  const dep = new Dep();
  this._data = new Proxy(data, {
    get(target, key) {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return target[key];
    },
    set(target, key, newValue) {
      dep.notify(newValue, key);
      target[key] = newValue;
      return true;
    }
  })
};
```

## <a name="chapter-three" id="chapter-three"></a>三 参考文献

> [返回目录](#chapter-one)

* [【MDN】《Proxy》](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
* [【掘金】寻找海蓝96《面试官: 实现双向绑定Proxy比defineproperty优劣如何?》](https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf)

---

**不折腾的前端，和咸鱼有什么区别！**

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。