## ES6高阶二

##课堂主题

- 1.利用defineProperty实现数据劫持;
- 2.利用ES6中proxy实现数据劫持
- 3.mvvm框架中编译数据到视图
- 4.实现数据驱动视图更新；
- 5.发布订阅模式；
- 6.AMD模块化require.js介绍；

##知识点

- defineProperty；
- Proxy代理
- 数据劫持
- es6模块化、exports 和 import
- AMD /CMD模块化；



### defineProperty

```js
Object.defineProperty(obj,'name',{
        get(){
            return value;
        },
        set(newValue){
            console.log("set...");
            value = newValue;
        }
    })
```



### proxy

- 定义  ：对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。

- 基本使用

  ```js
  let obj = new Proxy({
                      name: "张三",
                      age: 20
                },{
                      get(target, name) {
                          return target[name];
                      },
                      set(target,name,value){
                          target[name] = value;
                      }
                 })
  ```

- 相关配置参数

  ```
  has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
  defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
  ```



##  通过数据劫持实现表达式

- 通过defineProperty劫持数据:observer

  

##发布订阅监听数据的更新

- 通过自定义事件触发更新
- 通过发布订阅模式触发更新

## 实现v-model

- 输入框赋值
- 监听输入事件

###AMD require.js



- require.js使用

  - 引入require.js

    ```js
    https://cdn.bootcss.com/require.js/2.3.6/require.js
    ```

  - 1.加载模块

    ```js
    require(["a"]);
    ```

  - 2.定义模块

    - 无依赖定义

    ```js
    define({
        method1:function(){
            console.log("a method...");
        },
        method2:function(){
            console.log("b method...");
        }
    });
    ```

    - 模块有依赖

      ```js
      define(["c"],{
          method1:function(){
              console.log("a method...");
          },
          method2:function(){
              console.log("b method...");
          }
      });
      ```

    - 函数式写法

      ```js
      define(["c"],function(c){
           console.log(c);
          obj = {
              name:"张安",
              age:20
          }
          return obj;
      });
      ```



### 模块化优点

- 防止作用域污染 
- 提高代码的复用性
- 维护成本降低



## 总结

- defineProperty
- Proxy
- 数据劫持
- 自定义事件
- AMD/CMD模块化

## 下期预告

- Nodejs01