"use strict";
const four = () => {
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
        <section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="padding: 0 10px; word-spacing: 0px; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: -10px; line-height: 1.6; letter-spacing: .034em; color: rgb(63, 63, 63); font-size: 16px; word-break: all;"><h2 data-tool="mdnice编辑器" style="padding: 0px; font-weight: bold; color: black; font-size: 22px; display: block; text-align: center; background-image: url(http://img.xiaogangzai.cn/title.png); background-position: center center; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; background-size: 50px; margin-top: 1em; margin-bottom: 10px;"><span class="prefix" style="display: none;"></span><span class="content" style="text-align: center; display: inline-block; height: 38px; line-height: 42px; color: #48b378; background-position: left center; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; background-size: 63px; margin-top: 38px; font-size: 18px; margin-bottom: 10px;">元字符</span><span class="suffix"></span></h2>
        <p data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em;">元字符：有特殊函数非字母字符</p>
        <ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
        <li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">字符相关：<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">\\w \\W \\d \\D \\s \\S .</code></section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">数量相关：<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">{} ? + *</code></section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">位置相关：<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">^ $ \\b \\B</code></section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;">括号相关：<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">() [] {}</code></section></li></ol>
        <blockquote data-tool="mdnice编辑器" style="font-size: 0.9em; overflow: auto; overflow-scrolling: touch; background: rgba(0, 0, 0, 0.05); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; padding: 15px 20px; line-height: 27px; background-color: #FBF9FD; border-left: 3px solid #35b378; display: block;">
        <p style="padding-bottom: 8px; padding-top: 1em; margin: 0px; line-height: 26px; padding: 0px; font-size: 15px; color: rgb(89,89,89);">index.js：字符相关</p>
        </blockquote>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> reg = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. \\w：数字、字母、下划线</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'~123abc'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\w+/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// ~*</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. \\W：非数字、非字母、非下划线</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'~123abc'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\W+/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// *123abc</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 3. \\s：匹配空格</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123  abc 321'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\s+/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 123*abc*321</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 4. \\S：匹配非空格</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123  abc 321'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\S+/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// *  * *</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 5. .：非 \\n \\r \\u2028 \\u2029</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'~123abc|||cba321~'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/abc.+cba/</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// ~123*321~</span>
        <span/></code></pre>
        <blockquote data-tool="mdnice编辑器" style="font-size: 0.9em; overflow: auto; overflow-scrolling: touch; background: rgba(0, 0, 0, 0.05); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; padding: 15px 20px; line-height: 27px; background-color: #FBF9FD; border-left: 3px solid #35b378; display: block;">
        <p style="padding-bottom: 8px; padding-top: 1em; margin: 0px; line-height: 26px; padding: 0px; font-size: 15px; color: rgb(89,89,89);">index.js：数量相关</p>
        </blockquote>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> reg = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. {}</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'abc11cba'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/c1{2}c/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'|'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// ab|ba</span>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/c1{1,4}c/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// ab*ba</span>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/c1{1,}c/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'/'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// ab/ba</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. ? 代表 [0, 1] 次</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'my name is lileilei'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/my\\s?name/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// * is lileilei</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 3. + 代表 [1, n] 次</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'my   name is lileilei'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/my\\s+name/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// * is lileilei</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 4. * 代表 [0, n] 次</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'myname is lileilei'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/my\\s*name/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// * is lileilei</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 5. 贪婪匹配：尽可能多地匹配字符串</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123456789'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d{2,4}/g</span>; <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 贪婪匹配</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.match(reg)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ '1234', '5678' ]</span>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d{2,4}?/g</span>; <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 惰性匹配</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.match(reg)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ '12', '34', '56', '78' ]</span>
        <span/></code></pre>
        <blockquote data-tool="mdnice编辑器" style="font-size: 0.9em; overflow: auto; overflow-scrolling: touch; background: rgba(0, 0, 0, 0.05); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; padding: 15px 20px; line-height: 27px; background-color: #FBF9FD; border-left: 3px solid #35b378; display: block;">
        <p style="padding-bottom: 8px; padding-top: 1em; margin: 0px; line-height: 26px; padding: 0px; font-size: 15px; color: rgb(89,89,89);">index.js：位置相关</p>
        </blockquote>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> reg = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. ^：代表字符串开始的位置</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'abcdefg'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/^\\w/</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// *bcdefg</span>
        <span/>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123abc'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/^/</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// *123abc</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. $：代表字符串结束的位置</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'abcdefg'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\w$/</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// abcdef*</span>
        <span/>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'123abc'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/$/</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 123abc</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 3. \\b：边界符。边界：非 \\w（字母、数字、下划线）的都是边界</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'this is a book'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\bis\\b/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// this * a book</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 4. \\B：非边界</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'this is a book'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\B\\w{2}\\b/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// th* is a bo*</span>
        <span/></code></pre>
        <blockquote data-tool="mdnice编辑器" style="font-size: 0.9em; overflow: auto; overflow-scrolling: touch; background: rgba(0, 0, 0, 0.05); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; padding: 15px 20px; line-height: 27px; background-color: #FBF9FD; border-left: 3px solid #35b378; display: block;">
        <p style="padding-bottom: 8px; padding-top: 1em; margin: 0px; line-height: 26px; padding: 0px; font-size: 15px; color: rgb(89,89,89);">index.js：括号相关</p>
        </blockquote>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> reg = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">''</span>;
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. ()：分组</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'ababbaba'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/(ab)/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'|'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// ||b|a</span>
        <span/>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'ababbaba'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/(ab){2}/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'|'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// |baba</span>
        <span/>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'2020-06-04 23:08:16'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/(\\d+)/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.match(reg)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ '2020', '06', '04', '23', '08', '16' ]</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 提取值</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'2020-06-04'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/(\\d{4})-(\\d{2})-(\\d{2})/</span>;
        <span/>str.match(reg);
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(<span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">RegExp</span>.$<span class="hljs-number" style="color: #1c00cf; line-height: 26px;">1</span>); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2020</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(<span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">RegExp</span>.$<span class="hljs-number" style="color: #1c00cf; line-height: 26px;">2</span>); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 06</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(<span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">RegExp</span>.$<span class="hljs-number" style="color: #1c00cf; line-height: 26px;">3</span>); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 04</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 替换</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'2020-06-04'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/(\\d{4})-(\\d{2})-(\\d{2})/</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'$2/$3/$1'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 06/04/2020</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> res = str.replace(reg, (item, year, month, date) =&gt; {
        <span/>  <span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">return</span> <span class="hljs-string" style="color: #c41a16; line-height: 26px;">\`<span class="hljs-subst" style="color: #000; line-height: 26px;">\${month}</span>/<span class="hljs-subst" style="color: #000; line-height: 26px;">\${date}</span>/<span class="hljs-subst" style="color: #000; line-height: 26px;">\${year}</span>\`</span>;
        <span/>});
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(res); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 06/04/2020</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 反向引用</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">let</span> className = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'main-container_box'</span>; <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 或者 main_container_box</span>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\w*(-|_)\\w*(-|_)\\w*/</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.test(className)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// true</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(className.match(reg)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ 'main-container_box', '-', '_', index: 0, input: 'main-container_box', groups: undefined ]</span>
        <span/>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\w*(-|_)\\w*(\\1)\\w*/</span>; <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 必须和第一个相等，这个 1 可以是前面的任意顺序（n）</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.test(className)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// false</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(className.match(reg)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// null</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. []：字符集合。按照字符串的 ASCII 中的一段查找匹配</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 可以 [a-z] [A-Z] [0-9]</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 可以 [a-zA-Z0-9]</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 但不能 [a-Z]</span>
        <span/>str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'My name is LiLei'</span>;
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/Li[Ll]ei/g</span>; <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 或者 /Li(L|l)ei/g</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.test(str)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// true</span>
        <span/>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/[a-b]/g</span>;
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// My n*me is LiLei</span>
        <span/>
        <span/>reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/[^a-b]/g</span>; <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 在中括号里面，^ 代表非</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(str.replace(reg, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// ****a***********</span>
        <span/></code></pre>
        <p id="nice-suffix-juejin-container" class="nice-suffix-juejin-container" data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em; margin-top: 20px !important;">本文使用 <a href="https://mdnice.com" style="word-wrap: break-word; font-weight: bold; color: #48b378; text-decoration: none; border-bottom: 1px solid #48b378;">mdnice</a> 排版</p></section>
      </body>
    </html>
  `;
};
module.exports = four;
//# sourceMappingURL=004-元字符.js.map