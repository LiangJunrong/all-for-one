"use strict";
const one = () => {
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
    <body class="markdown-body" style="background: #fff !important">
      <h2 id="前言">前言</h2>
  <p>正则表达式内容</p>
  <ol>
  <li>查找</li>
  <li>替换</li>
  <li>验证</li>
  <li>分割</li>
  </ol>
  <p>假设我们有一个查找数字的代码：</p>
  <blockquote>
  <p>index.js</p>
  </blockquote>
  <pre><code class="language-js">const getNumber = (str) =&gt; {
    const result = [];
    let temp = &#39;&#39;;
    for (let i = 0; i &lt; str.length; i++) {
      if (!isNaN(str[i])) {
        temp += str[i];
      } else if (isNaN(str[i]) &amp;&amp; temp) {
        result.push(temp);
        temp = &#39;&#39;;
      }
    }
    if (temp) {
      result.push(temp);
    }
    return result;
  }
  
  const str = &#39;fajioeruqeriuq213jflajdfi7t8jfakljfka321&#39;;
  console.time(&#39;查看普通查找时间&#39;);
  console.log(getNumber(str)); // [ &#39;213&#39;, &#39;7&#39;, &#39;8&#39;, &#39;321&#39; ]
  console.timeEnd(&#39;查看普通查找时间&#39;); // 查看普通查找时间: 5.616ms</code></pre>
  <p>那如果我们使用正则去匹配，会是怎样的呢？</p>
  <blockquote>
  <p>index.js</p>
  </blockquote>
  <pre><code class="language-js">const regGetNumber = (str) =&gt; {
    return str.match(/\d+/g);
  }
  
  const str = &#39;fajioeruqeriuq213jflajdfi7t8jfakljfka321&#39;;
  console.time(&#39;查看正则匹配时间&#39;);
  console.log(regGetNumber(str)); // [ &#39;213&#39;, &#39;7&#39;, &#39;8&#39;, &#39;321&#39; ]
  console.timeEnd(&#39;查看正则匹配时间&#39;); // 查看正则匹配时间: 0.741ms</code></pre>
  
    </body>
    <script></script>
  </html>
  `;
};
module.exports = one;
//# sourceMappingURL=001-前言.js.map