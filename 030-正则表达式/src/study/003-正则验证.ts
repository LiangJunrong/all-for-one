const three = () => {
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
        <section id="nice" data-tool="mdnice编辑器" data-website="https://www.mdnice.com" style="padding: 0 10px; word-spacing: 0px; word-wrap: break-word; text-align: left; font-family: Optima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; margin-top: -10px; line-height: 1.6; letter-spacing: .034em; color: rgb(63, 63, 63); font-size: 16px; word-break: all;"><h2 data-tool="mdnice编辑器" style="padding: 0px; font-weight: bold; color: black; font-size: 22px; display: block; text-align: center; background-image: url(http://img.xiaogangzai.cn/title.png); background-position: center center; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; background-size: 50px; margin-top: 1em; margin-bottom: 10px;"><span class="prefix" style="display: none;"></span><span class="content" style="text-align: center; display: inline-block; height: 38px; line-height: 42px; color: #48b378; background-position: left center; background-repeat: no-repeat; background-attachment: initial; background-origin: initial; background-clip: initial; background-size: 63px; margin-top: 38px; font-size: 18px; margin-bottom: 10px;">正则验证</span><span class="suffix"></span></h2>
        <p data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em;">正则验证是否匹配：</p>
        <ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
        <li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">test</code></section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">exec</code></section></li></ol>
        <blockquote data-tool="mdnice编辑器" style="font-size: 0.9em; overflow: auto; overflow-scrolling: touch; background: rgba(0, 0, 0, 0.05); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; padding: 15px 20px; line-height: 27px; background-color: #FBF9FD; border-left: 3px solid #35b378; display: block;">
        <p style="padding-bottom: 8px; padding-top: 1em; margin: 0px; line-height: 26px; padding: 0px; font-size: 15px; color: rgb(89,89,89);">index.js</p>
        </blockquote>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'abc123def456abc123'</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d+/g</span>;
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. test</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.test(str)); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// true</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.lastIndex); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 6</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. exec</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.exec(str));
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.lastIndex); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 12</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">/**
        <span/>  [
        <span/>    '456',
        <span/>    index: 9,
        <span/>    input: 'abc123def456abc123',
        <span/>    groups: undefined,
        <span/>  ]
        <span/> */</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.exec(str));
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(reg.lastIndex); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 18</span>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">/**
        <span/>  [
        <span/>    '123',
        <span/>    index: 15,
        <span/>    input: 'abc123def456abc123',
        <span/>    groups: undefined,
        <span/>  ]
        <span/> */</span>
        <span/></code></pre>
        <p data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em;">注 1：<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">exec</code> 会基于上一次的匹配进行下一次匹配。<code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">reg.lastIndex</code></p>
        <p data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em;">字符串方法：</p>
        <ol data-tool="mdnice编辑器" style="margin-top: 8px; margin-bottom: 8px; padding-left: 25px; color: black; list-style-type: decimal;">
        <li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">split()</code></section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">search()</code></section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">match()</code></section></li><li><section style="margin-top: 5px; margin-bottom: 5px; line-height: 26px; text-align: left; color: rgb(1,1,1); font-weight: 500;"><code style="font-size: 14px; word-wrap: break-word; padding: 2px 4px; border-radius: 4px; margin: 0 2px; background-color: rgba(27,31,35,.05); font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; word-break: break-all; color: #28ca71;">repalce()</code></section></li></ol>
        <blockquote data-tool="mdnice编辑器" style="font-size: 0.9em; overflow: auto; overflow-scrolling: touch; background: rgba(0, 0, 0, 0.05); color: #6a737d; padding-top: 10px; padding-bottom: 10px; padding-left: 20px; padding-right: 10px; margin-bottom: 20px; margin-top: 20px; padding: 15px 20px; line-height: 27px; background-color: #FBF9FD; border-left: 3px solid #35b378; display: block;">
        <p style="padding-bottom: 8px; padding-top: 1em; margin: 0px; line-height: 26px; padding: 0px; font-size: 15px; color: rgb(89,89,89);">index.js</p>
        </blockquote>
        <pre class="custom" data-tool="mdnice编辑器" style="margin-top: 10px; margin-bottom: 10px; border-radius: 5px; box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 10px;"><span style="display: block; background: url(https://imgkr.cn-bj.ufileos.com/97e4eed2-a992-4976-acf0-ccb6fb34d308.png); height: 30px; width: 100%; background-size: 40px; background-repeat: no-repeat; background-color: #fff; margin-bottom: -7px; border-radius: 5px; background-position: 10px 10px;"></span><code class="hljs" style="overflow-x: auto; padding: 16px; color: black; display: block; font-family: Operator Mono, Consolas, Monaco, Menlo, monospace; font-size: 12px; -webkit-overflow-scrolling: touch; padding-top: 15px; background: #fff; border-radius: 5px;"><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> str = <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'abc123def456abc123'</span>;
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> reg = <span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d+/g</span>;
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 1. split</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> splitResult1 = str.split(<span class="hljs-string" style="color: #c41a16; line-height: 26px;">'1'</span>); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ 'abc', '23def456abc', '23' ]</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(splitResult1);
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> splitResult2 = str.split(<span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/1/</span>); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ 'abc', '23def456abc', '23' ]</span>
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(splitResult2);
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 2. search</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> searchResult1 = str.search(<span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/1/</span>);
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(searchResult1); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// 3</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 3. match</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> matchResult1 = str.match(<span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d+/</span>);
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(matchResult1); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ '123', index: 3, input: 'abc123def456abc123', groups: undefined ]</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> matchResult2 = str.match(<span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d+/g</span>);
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(matchResult2); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// [ '123', '456', '123' ]</span>
        <span/>
        <span/><span class="hljs-comment" style="color: #007400; line-height: 26px;">// 4. replace</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> replaceResult1 = str.replace(<span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d/g</span>, <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>);
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(replaceResult1); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// abc***def***abc***</span>
        <span/><span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">const</span> replaceResult2 = str.replace(<span class="hljs-regexp" style="color: #0E0EFF; line-height: 26px;">/\\d+/g</span>, (item, index) =&gt; {
        <span/>  <span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(<span class="hljs-string" style="color: #c41a16; line-height: 26px;">'item：'</span>, item); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// item： 123 | 456 | 123</span>
        <span/>  <span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(<span class="hljs-string" style="color: #c41a16; line-height: 26px;">'index：'</span>, index); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// index： 3 | 9 | 15</span>
        <span/>  <span class="hljs-keyword" style="color: #aa0d91; line-height: 26px;">return</span> <span class="hljs-string" style="color: #c41a16; line-height: 26px;">'*'</span>;
        <span/>});
        <span/><span class="hljs-built_in" style="color: #5c2699; line-height: 26px;">console</span>.log(replaceResult2); <span class="hljs-comment" style="color: #007400; line-height: 26px;">// abc*def*abc*</span>
        <span/></code></pre>
        <p id="nice-suffix-juejin-container" class="nice-suffix-juejin-container" data-tool="mdnice编辑器" style="font-size: 16px; padding-bottom: 8px; margin: 0; padding-top: 1em; color: rgb(74,74,74); line-height: 1.75em; margin-top: 20px !important;">本文使用 <a href="https://mdnice.com" style="word-wrap: break-word; font-weight: bold; color: #48b378; text-decoration: none; border-bottom: 1px solid #48b378;">mdnice</a> 排版</p></section>
      </body>
    </html>
  `;
};
module.exports = three;