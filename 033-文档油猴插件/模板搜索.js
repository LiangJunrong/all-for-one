// ==UserScript==
// @name         金山文档油猴插件
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  支持金山文档各个组件新功能拓展
// @author       jsliang
// @match        https://www.kdocs.cn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @noframes
// ==/UserScript==

(function(){
  'use strict';

  // 样式
  document.head.insertAdjacentHTML("beforeend", `
<style>
  /* 公共样式 */
  .jsliang-button {
      padding: 4px;
      font-size: 14px !important;
      border-radius: 5px;
      border: 1px solid deepskyblue;
      background: deepskyblue;
      color: #fff;
      cursor: pointer;
  }
  .jsliang-input::-webkit-input-placeholder {
      color: #949aae;
      font-size: 14px;
  }
  .jsliang-input {
      outline-style: none;
      font-family: 'Microsoft soft';
      border: 1px solid deepskyblue;
      border-radius: 3px;
      font-size: 14px !important;
      width: 120px;
      padding: 5px !important;
  }

  /* 模板搜索 */
  .jsliang-template-search {
      outline-style: none;
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 5px 14px;
      width: 100%;
      font-size: 14px;
      font-weight: 700;
      font-family: 'Microsoft soft';
  }
</style>
  `);

  /* ------ 模块 1: 模板搜索功能 ------*/
  setTimeout(() => {
      const templates = document.querySelectorAll('.otl-template-container .template-card-item'); // 最后一个是 More 更多
      // 兼容下
      if (templates.length) {
          // 设置最后一个的点击
          templates[templates.length - 1].onclick = (e) => {
              // 定时 200ms 获取内部所有列表
              setTimeout(() => {
                  // 将未展开的先展开
                  document.querySelectorAll('.template-dropdown-container').forEach(item => {
                      const i = item.querySelector('.template-group-icon');
                      if (!i.classList.contains('selected')) {
                          i.click();
                      }
                  });

                  // 存储模板标题列表
                  const templateTitlelist = [];

                  // 再将标题放到 set 中存储
                  const containers = document.querySelectorAll('.template-item-container');
                  for (let i = 0; i < containers.length; i++) {
                      templateTitlelist.push(containers[i].getAttribute('title'));
                  }

                  // 添加搜索框
                  const input = document.createElement('input');
                  input.type = 'text';
                  input.className = 'jsliang-template-search';
                  input.placeholder = '搜索模板标题...';
                  input.oninput = (e) => {
                      const value = e.target.value;
                      // 查找过滤清单
                      for (let i = 0; i < templateTitlelist.length; i++) {
                          if (!templateTitlelist[i].includes(value)) {
                              containers[i].style.display = 'none';
                          } else {
                              containers[i].style.display = 'flex';
                          }
                      }
                  };
                  const insertedNode = document.querySelector('.template-sider').insertBefore(input, document.querySelector('.template-dropdown-container'));
                  setTimeout(() => {
                     insertedNode.focus(); // 自动聚焦
                  }, 1000);
              }, 300);
          };
      }
  }, 2000); // 定时 2s 获取所有模板卡片
  /* ------ 模块 1: 模板搜索功能 End ------*/
}());