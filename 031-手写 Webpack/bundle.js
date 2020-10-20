(function (graph) {
  // require 函数的本质是执行一个模块的代码，然后将相应变量挂载到 exports 对象上
  function require(module) {
    // localRequire 的本质是拿到依赖包的 exports 变量
    function localRequire(relativePath) {
      console.log('123');
      return require(graph[module].dependencies[relativePath]);
    }
    var exports = {};
    (function (require, exports, code) {
      eval(code);
    })(localRequire, exports, graph[module].code);
    return exports; // 函数返回指向局部变量，形成闭包，exports 变量在函数执行后不会被摧毁
  }
  require("./index.js");
})({
  "./index.js": {
    dependencies: { "./message.js": "./message.js" },
    code:
      '"use strict";\n\nvar _message = _interopRequireDefault(require("./message.js"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\n\n// index.js\nconsole.log(_message["default"]);',
  },
  "./message.js": {
    dependencies: { "./word.js": "./word.js" },
    code:
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports["default"] = void 0;\n\nvar _word = require("./word.js");\n\n// message.js\nvar message = "say ".concat(_word.word);\nvar _default = message;\nexports["default"] = _default;',
  },
  "./word.js": {
    dependencies: {},
    code:
      '"use strict";\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.word = void 0;\n// word.js\nvar word = "hello";\nexports.word = word;',
  },
});
