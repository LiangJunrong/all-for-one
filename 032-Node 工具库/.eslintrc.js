module.exports = {
  // 解析器
  parser: "@typescript-eslint/parser", // 把 TS 转换成 ESTree 兼容格式的解析器，这样就可以在 eslint 中使用了
  
  // 拓展：用来继承已有的 ESLint 配置
  extends: ["plugin:@typescript-eslint/recommended"],

  // 插件
  plugins: ["@typescript-eslint"],

  // 环境：设置代码环境，eslint 能够自动识别对应环境所有的全局变量
  env: {
    node: true,
    commonjs: true,
    amd: true,
    es6: true,
  },

  /**
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    /* Possible Errors - 这些规则与 JavaScript 可能的错误或者逻辑错误有关 */
    "no-dupe-args":            2, // 禁止 function 定义中出现重名参数
    "no-dupe-keys":            2, // 禁止对象字面量中出现重复的 key
    "no-empty":                2, // 禁止出现空语句块
    "no-func-assign":          2, // 禁止对 function 声明重新赋值
    "no-irregular-whitespace": 2, // 禁止不规则的空白
    "no-unreachable":          2, // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码

    /* Best Practices - 这些规则是关于最佳实践的，帮助避免一些问题 */
    "eqeqeq":                  2, // 要求使用 === 和 !==
    "curly":                   2, // 强制所有控制语句使用一致的括号风格

    /* Variables - 这些规则与变量有关 */
    "no-delete-var":           2, // 禁止删除变量
    "no-unused-vars":          2, // 进制出现未使用过的变量

    /* Node.js and CommonJS - 关于 Node.js 相关的规则 */
    "global-require":          2, // 要求 require() 出现在顶层模块作用域中
    "handle-callback-err":     2, // 要求回调函数中有容错处理
  },
};
