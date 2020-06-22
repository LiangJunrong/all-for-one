const two = () => {
  return `
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <title>文档</title>
      </head>
      <body style="background: #fff !important">
        <section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="padding: 0 10px; word-spacing: 0px; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: -10px; line-height: 1.6; letter-spacing: .034em; color: rgb(63, 63, 63); font-size: 16px; word-break: all;"><h2 data-tool="mdnice编辑器" style="padding: 0px; font-weight: bold; color: black; font-size: 22px; display: block; text-align: center; background-image: url(http://img.xiaogangzai.cn/title.png); background-position: center center; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; background-size: 50px; margin-top: 1em; margin-bottom: 10px;"><span class="prefix" style="display: none;"></span><span class="content" style="text-align: center; display: inline-block; height: 38px; line-height: 42px; color: #48b378; background-position: left center; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; background-size: 63px; margin-top: 38px; font-size: 18px; margin-bottom: 10px;">正则创建方式</span><span class="suffix"></span></h2>
        <ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
        <li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">模糊匹配：<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">'123abc'.match(/\\d+/g)</code></section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">精确匹配：<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">'123abc'.match(/abc/g)</code></section></li></ol>
        <p data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em;">创建正则的方式：</p>
        <ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
        <li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">字面量创建</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">构造函数创建</section></li></ol>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. 字面量创建</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> str1 = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123abc'</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> result1 = str1.match(<span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d+/g</span>);
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(result1); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ '123' ]</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. 构造函数创建</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> str2 = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'456def'</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> result2 = str2.match(<span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">new</span> <span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">RegExp</span>(<span class="hljs-string" style="color: #c41a16; line-height: 26px;">'\\d+'</span>, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'g'</span>));
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(result2); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ '456' ]</span>
        <span/></code></pre>
        <p id="nice-suffix-juejin-container" class="nice-suffix-juejin-container" data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em; margin-top: 20px !important;">本文使用 <a href="https://mdnice.com" style="word-wrap: break-word; font-weight: bold; color: #48b378; text-decoration: none; border-bottom: 1px solid #48b378;">mdnice</a> 排版</p></section>
      </body>
    </html>
  `;
};
module.exports = two;