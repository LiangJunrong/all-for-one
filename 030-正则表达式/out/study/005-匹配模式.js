"use strict";
const five = () => {
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
        <section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="padding: 0 10px; word-spacing: 0px; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: -10px; line-height: 1.6; letter-spacing: .034em; color: rgb(63, 63, 63); font-size: 16px; word-break: all;"><h2 data-tool="mdnice编辑器" style="padding: 0px; font-weight: bold; color: black; font-size: 22px; display: block; text-align: center; background-image: url(http://img.xiaogangzai.cn/title.png); background-position: center center; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; background-size: 50px; margin-top: 1em; margin-bottom: 10px;"><span class="prefix" style="display: none;"></span><span class="content" style="text-align: center; display: inline-block; height: 38px; line-height: 42px; color: #48b378; background-position: left center; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; background-size: 63px; margin-top: 38px; font-size: 18px; margin-bottom: 10px;">匹配模式</span><span class="suffix"></span></h2>
        <p data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em;">正则的匹配模式：</p>
        <ul data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: disc;">
        <li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">g</code>：全局匹配多次</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">i</code>：忽略大小写</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">m</code>：多行模式</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">s</code>：让 '.' 匹配到 \\n 换行</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">u</code>：匹配 Unicode 编码</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">y</code>：粘性模式</section></li></ul>
        <blockquote data-tool="mdnice编辑器" style="font-size: 0.9em; overflow: auto; overflow-scrolling: touch; background: rgba(0, 0, 0, 0.05); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; padding: 15px 20px; line-height: 27px; background-color: #FBF9FD; border-left: 3px solid #35b378; display: block;">
        <p style="padding-bottom: 8px; padding-top: 1em; margin: 0px; line-height: 26px; padding: 0px; font-size: 15px; color: rgb(89,89,89);">index.js</p>
        </blockquote>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> reg = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. g：全局匹配</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123abc321'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d+/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// *abc*</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. i：忽略大小写</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123abcABC321'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/abc/ig</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 123**321</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 3. m：多行模式</span>
        <span/>str =<span class="hljs-string" style="color: #c41a16; line-height: 26px;">\`123
        <span/>abc
        <span/>321\`</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/^\\w/mg</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>));
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// *23</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// *bc</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// *21</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 4. s：让 '.' 匹配到 \\n 换行</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">\`123
        <span/>abc
        <span/>321\`</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d+./</span>sg;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>));
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// *abc</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// *</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 5. u：匹配 Unicode 编码</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'a123a'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\u{61}/gu</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// *123*</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 6. y：粘性模式</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123abc321'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d/gy</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.match(reg)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ '1', '2', '3' ]</span>
        <span/></code></pre>
        <p id="nice-suffix-juejin-container" class="nice-suffix-juejin-container" data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em; margin-top: 20px !important;">本文使用 <a href="https://mdnice.com" style="word-wrap: break-word; font-weight: bold; color: #48b378; text-decoration: none; border-bottom: 1px solid #48b378;">mdnice</a> 排版</p></section>
      </body>
    </html>
  `;
};
module.exports = five;
//# sourceMappingURL=005-匹配模式.js.map