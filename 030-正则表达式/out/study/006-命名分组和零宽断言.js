"use strict";
const six = () => {
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
        <section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="padding: 0 10px; word-spacing: 0px; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: -10px; line-height: 1.6; letter-spacing: .034em; color: rgb(63, 63, 63); font-size: 16px; word-break: all;"><h1 data-tool="mdnice编辑器" style="padding: 0px; font-weight: bold; color: black; font-size: 24px; text-align: center; background-image: url(http://img.xiaogangzai.cn/title_h1.png); background-position: center top; background-repeat: no-repeat; background-size: 75px; line-height: 95px; margin-top: 38px; margin-bottom: 10px;"><span class="prefix" style="display: none;"></span><span class="content" style="font-size: 20px; color: #48b378; border-bottom: 2px solid #2e7950;">命名分组和零宽断言</span><span class="suffix"></span></h1>
        <ul data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: disc;">
        <li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">命名分组</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">零宽断言
        <ul style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: square;">
        <li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">正向肯定零宽断言</section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">负向零宽断言</section></li></ul>
        </section></li></ul>
        <blockquote data-tool="mdnice编辑器" style="font-size: 0.9em; overflow: auto; overflow-scrolling: touch; background: rgba(0, 0, 0, 0.05); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; padding: 15px 20px; line-height: 27px; background-color: #FBF9FD; border-left: 3px solid #35b378; display: block;">
        <p style="padding-bottom: 8px; padding-top: 1em; margin: 0px; line-height: 26px; padding: 0px; font-size: 15px; color: rgb(89,89,89);">index.js</p>
        </blockquote>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> reg = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. 命名分组</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'2020-06-04'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/(?&lt;year&gt;\\d*)-(?&lt;month&gt;\\d*)-(?&lt;date&gt;\\d*)/</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> matchResult = str.match(reg);
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(matchResult);
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">/*
        <span/>[
        <span/>  '2020-06-04',
        <span/>  '2020',
        <span/>  '06',
        <span/>  '04',
        <span/>  index: 0,
        <span/>  input: '2020-06-04',
        <span/>  groups: [Object: null prototype] { year: '2020', month: '06', date: '04' },
        <span/>]
        <span/>*/</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(matchResult.groups.year); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2020</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(matchResult.groups.month); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 06</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(matchResult.groups.date); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 04</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. 零宽断言：有需求如下</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'version1version2version3versionn'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/version\\d/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'版本'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 版本版本版本versionn</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2.1 正向肯定零宽断言</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 肯定</span>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/version(?=\\d)/g</span>; <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 类似浏览器 URL 的匹配</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'版本'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 版本1版本2版本3versionn</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 否定</span>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/version(?!\\d)/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'版本'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// version1version2version3版本</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2.2 负向零宽断言</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'10px20px30pxnpx'</span>;
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 肯定</span>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/(?&lt;=\\d+)px/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'像素'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 10像素20像素30像素npx</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 肯定</span>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/(?&lt;!\\d+)px/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'像素'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 10px20px30pxn像素</span>
        <span/></code></pre>
        <p id="nice-suffix-juejin-container" class="nice-suffix-juejin-container" data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em; margin-top: 20px !important;">本文使用 <a href="https://mdnice.com" style="word-wrap: break-word; font-weight: bold; color: #48b378; text-decoration: none; border-bottom: 1px solid #48b378;">mdnice</a> 排版</p></section>
      </body>
    </html>
  `;
};
module.exports = six;
//# sourceMappingURL=006-命名分组和零宽断言.js.map