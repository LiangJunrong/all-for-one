"use strict";
const two = () => {
    return `
  <!DOCTYPE html>
  <html lang="zh-CN">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta name="author" content="Yaofeng">
      <title>文档</title>
      <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/github-markdown-css/4.0.0/github-markdown.css">
      <style>
        body {
          background: #fff !important,
        }
      </style>
    </head>
    <body class="markdown-body">
      <h2 id="正则创建方式">正则创建方式</h2>
  <ol>
  <li>模糊匹配：<code>&#39;123abc&#39;.match(/\d+/g)</code></li>
  <li>精确匹配：<code>&#39;123abc&#39;.match(/abc/g)</code></li>
  </ol>
  <p>创建正则的方式：</p>
  <ol>
  <li>字面量创建</li>
  <li>构造函数创建</li>
  </ol>
  <p>\`\`\`js
  // 1. 字面量创建
  const str1 = &#39;123abc&#39;;
  const result1 = str1.match(/\d+/g);
  console.log(result1); // [ &#39;123&#39; ]</p>
  <p>// 2. 构造函数创建
  const str2 = &#39;456def&#39;;
  const result2 = str2.match(new RegExp(&#39;\d+&#39;, &#39;g&#39;));
  console.log(result2); // [ &#39;456&#39; ]</p>
  
    </body>
    <script></script>
  </html>
  `;
};
module.exports = two;
//# sourceMappingURL=002-正则创建方式.js.map