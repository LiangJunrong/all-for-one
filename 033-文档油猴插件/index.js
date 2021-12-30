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

    /* 底部 Bar 条 */
    @keyframes jsliang-bottom-bar-animated {
        0% {
            box-shadow: 0 0 0 0 #fca30066;
        }
        100% {
             box-shadow: 0 0 0 20px #f6bc8a00;
        }
    }
    .jsliang-bottom-bar {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        animation: jsliang-bottom-bar-animated 1.5s infinite;
        font-family: Arial;
        font-size: 18px;
        line-height: 30px;
        border: 2px solid deepskyblue;
        border-radius: 10px;
        padding: 15px;
        z-index: 999;

        position: fixed;
        top: 130px;
        left: 14%;
    }
    @media screen and (min-width: 1080px) and (max-width: 1400px) {
      .jsliang-bottom-bar {
        left: 8%;
      }
    }
    @media screen and (min-width: 920px) and (max-width: 1079px) {
      .jsliang-bottom-bar {
        left: 1%;
      }
    }

    /* 自定义 emoji */
    .jsliang-emoji {
        display: flex;
        z-index: 99;
    }
    .jsliang-emoji-container {
        position: relative;
    }
    .jsliang-emoji span {
        cursor: pointer;
    }
    .jsliang-emoji-panel {
        position: absolute;
        top: -16px;
        left: 122px;
        box-shadow: 0 2px 12px 0 rgb(56 56 56 / 20%);
        border-radius: 2px;
        background-color: #fff;
        width: 280px;
        height: 250px;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 5px 4px 5px 10px;
        display: none;
        z-index: 999;
    }
    .jsliang-emoji-add-panel {
        display: none;
    }
    .jsliang-emoji-search {
        width: 120px;
    }
    .jsliang-emoji-new-name {
        width: 100px;
    }
    .jsliang-emoji-new-emoji {
        margin-left: 5px !important;
        width: 60px;
    }
    .jsliang-emoji-new-emoji-add {
        margin-left: 5px !important;
    }
    .jsliang-emoji-new-emoji-close {
        margin-left: 5px !important;
    }
    .jsliang-emoji-add-customize {
        display: flex;
        align-items: flex-start;
    }
    .jsliang-emoji-add {
        border: 1px solid;
        width: 20px;
        height: 20px;
        color: #ccc;
        transition: color .25s;
        position: relative;
        cursor: pointer;
        margin-right: 3px;
        margin-top: 5px;
    }
    .jsliang-emoji-add::before {
        content: '';
        position: absolute;
        left: 12%;
        top: 46%;
        width: 15px;
        border-top: 4px solid;
    }
    .jsliang-emoji-add::after {
        content: '';
        position: absolute;
        left: 44%;
        top: 16%;
        height: 15px;
        border-left: 4px solid;
    }
    .jsliang-emoji-panel p {
        color: #949aae;
        line-height: 20px;
        font-size: 14px;
        margin-top: 6px;
        margin-bottom: 6px;
    }
    .jsliang-emoji-text-popup { animation: textPopup 1s both; -ms-transform: translateY(-20px); color: #01cf97; user-select: none; white-space: nowrap; position: absolute; z-index: 999; }@keyframes textPopup {0%, 100% { opacity: 0; } 5% { opacity: 1; } 100% { transform: translateY(-50px); }}
    .jsliang-emoji-panel-selected {
        display: inline-block;
    }

    /* 字数统计 */
    .jsliang-word-number {
        display: flex;
        z-index: 99;
        align-items: center;
    }
    .jsliang-word-number span {
        margin-right: 10px;
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


    /* ------ 模块 2: 底部 Bar 条 ------*/
    setTimeout(() => {
        // 步骤一：生成底部 bar 条
        const bottomBar = document.createElement('div');
        bottomBar.className = 'jsliang-bottom-bar';
        bottomBar.innerHTML = `
            <div class="jsliang-emoji">
                <div class="jsliang-emoji-container">
                    <div class="jsliang-emoji-panel">
                        <div>
                            <input type="text" class="jsliang-input jsliang-emoji-search" placeholder="搜索 emoji...">
                        </div>
                        <p>自定义系列</p>
                        <div class="jsliang-emoji-add-panel">
                            <input type="text" class="jsliang-input jsliang-emoji-new-name" placeholder="emoji 名称">
                            <input type="text" class="jsliang-input jsliang-emoji-new-emoji" placeholder="emoji">
                            <button class="jsliang-button jsliang-emoji-new-emoji-add">添加</button>
                            <button class="jsliang-button jsliang-emoji-new-emoji-close">关闭</button>
                        </div>
                        <div class="jsliang-emoji-add-customize">
                            <div class="jsliang-emoji-add"></div>
                            <div class="jsliang-emoji-customize"><span data-emoji-name="心中箭了" title="心中箭了">💘</span><span data-emoji-name="大笑" title="大笑">😄</span></div>
                        </div>
                        <p>笑脸系列</p>
                        <div>
                            <span data-emoji-name="哈哈" title="哈哈">😃</span><span data-emoji-name="大笑" title="大笑">😄</span><span data-emoji-name="嘻嘻" title="嘻嘻">😁</span><span data-emoji-name="斜眼笑" title="斜眼笑">😆</span><span data-emoji-name="苦笑" title="苦笑">😅</span>
                            <span data-emoji-name="笑得满地打滚" title="笑得满地打滚">🤣</span><span data-emoji-name="呵呵" title="呵呵">🙂</span><span data-emoji-name="眨眼" title="眨眼">😉</span><span data-emoji-name="羞涩得笑" title="羞涩得笑">😊</span><span data-emoji-name="微笑天使" title="微笑天使">😇</span>
                        </div>
                        <p>心跳系列</p>
                        <div>
                            <span data-emoji-name="心中箭了" title="心中箭了">💘</span><span data-emoji-name="闪亮的心" title="闪亮的心">💖</span><span data-emoji-name="搏动的心" title="搏动的心">💗</span><span data-emoji-name="心碎" title="碎">💔</span><span data-emoji-name="两颗心" title="两颗心">💕</span>
                            <span data-emoji-name="橙心" title="橙心">🧡</span><span data-emoji-name="绿心" title="绿心">💚</span><span data-emoji-name="黄心" title="黄心">💛</span><span data-emoji-name="蓝心" title="蓝心">💙</span><span data-emoji-name="紫心" title="紫心">💜</span>
                        </div>
                    </div>
                    <span>emoji：<span class="jsliang-emoji-panel-selected">😎</span></span>
                </div>
            </div>
            <div class="jsliang-word-number">
                字数：<span>0</span>
            </div>
       `;
        const editor = document.querySelector('.editor');
        if (editor) {
            editor.appendChild(bottomBar);
        }

        // 步骤二：初始化 emoji
        const initJsliangEmoji = localStorage.getItem('jsliang-emoji');
        if (!initJsliangEmoji) {
            localStorage.setItem('jsliang-emoji', JSON.stringify([]));
        }
        // 初始化刷新 emoji 面板
        const refreshEmojiPanel = () => {
            const customizeEmojiList = JSON.parse(localStorage.getItem('jsliang-emoji'));
            const initCustomizeEmoji = document.querySelector('.jsliang-emoji-customize');
            let newCustomizeEmoji = '';
            for (let i = 0; i < customizeEmojiList.length; i++) {
                newCustomizeEmoji += `<span data-emoji-name="${customizeEmojiList[i].name}" title="${customizeEmojiList[i].name}">${customizeEmojiList[i].value}</span>`;
            }
            initCustomizeEmoji.innerHTML = newCustomizeEmoji;
            const newCustomizeEmojiList = document.querySelectorAll('.jsliang-emoji-customize span');
            for (let i = 0; i < newCustomizeEmojiList.length; i++) {
                newCustomizeEmojiList[i].onclick = (e) => copyEmoji(e);
            }
        };
        refreshEmojiPanel();
        // 复制 emoji
        const copyEmoji = (e) => {
            document.querySelector('.jsliang-emoji-panel-selected').innerText = e.target.innerText;
            // 复制成功提示
            const eleTips = document.createElement('span');
            eleTips.className = 'jsliang-emoji-text-popup';
            eleTips.innerHTML = '复制成功';
            document.body.appendChild(eleTips);
            // 事件
            eleTips.addEventListener('animationend', function() {
                eleTips.parentNode.removeChild(eleTips);
            });
            eleTips.style.left = (e.pageX - eleTips.clientWidth / 2) + 'px';
            eleTips.style.top = (e.pageY - eleTips.clientHeight) + 'px';

            // 复制内容
            navigator.clipboard.writeText(document.querySelector('.jsliang-emoji-panel-selected').innerText);
        };

        // 步骤三：emoji 点击的复制效果
        const emojiList = document.querySelectorAll('.jsliang-emoji-panel span');
        for (let i = 0; i < emojiList.length; i++) {
            emojiList[i].onclick = (e) => copyEmoji(e);
        }

        // 步骤四：emoji 搜索功能
        const searchEmojiBtn = document.querySelector('.jsliang-emoji-search');
        searchEmojiBtn.oninput = (e) => {
            const emojiList = document.querySelectorAll('.jsliang-emoji-panel span');
            const value = e.target.value;
            for (let i = 0; i < emojiList.length; i++) {
                const emojiName = emojiList[i].dataset.emojiName;
                if (!emojiName.includes(value)) {
                    emojiList[i].style.display = 'none';
                } else {
                    emojiList[i].style.display = 'inline-block';
                }
            }
        };

        // 步骤五：emoji 添加面板的切换
        const toggleEmojiBtn = document.querySelector('.jsliang-emoji-add');
        toggleEmojiBtn.onclick = () => {
            const emojiAddPanel = document.querySelector('.jsliang-emoji-add-panel');
            const visible = emojiAddPanel.style.display;
            if (!visible || visible === 'none') {
                emojiAddPanel.style.display = 'flex';
            } else {
                emojiAddPanel.style.display = 'none';
            }
        };

        // 步骤六：添加 emoji
        const addEmojiBtn = document.querySelector('.jsliang-emoji-new-emoji-add');
        addEmojiBtn.onclick = () => {
            const emojiName = document.querySelector('.jsliang-emoji-new-name').value;
            const emoji = document.querySelector('.jsliang-emoji-new-emoji').value;
            let oldEmojiStorage;
            if (localStorage.getItem('jsliang-emoji')) {
                oldEmojiStorage = JSON.parse(localStorage.getItem('jsliang-emoji'));
            }
            oldEmojiStorage.unshift({ name: emojiName, value: emoji })
            localStorage.setItem('jsliang-emoji', JSON.stringify(oldEmojiStorage));
            document.querySelector('.jsliang-emoji-add-panel').style.display = 'none';
            refreshEmojiPanel();
        }

        // 步骤七：关闭 emoji 添加面板
        const closeEmojiBtn = document.querySelector('.jsliang-emoji-new-emoji-close');
        closeEmojiBtn.onclick = () => {
            document.querySelector('.jsliang-emoji-add-panel').style.display = 'none';;
        }

        // 步骤八：emoji 面板打开和关闭
        const selectedEmojiBtn = document.querySelector('.jsliang-emoji-panel-selected');
        selectedEmojiBtn.onmouseover = () => {
            const emojiPanel = document.querySelector('.jsliang-emoji-panel');
            document.querySelector('.jsliang-emoji-panel').style.display = 'inline-block';
        };
        selectedEmojiBtn.onmouseout = () => {
            const emojiPanel = document.querySelector('.jsliang-emoji-panel');
            closeTimer = setTimeout(() => {
                document.querySelector('.jsliang-emoji-panel').style.display = 'none';
            }, 500);
        };

        // 步骤九：移出关闭面板
        let closeTimer;
        const emojiPanel = document.querySelector('.jsliang-emoji-panel');
        emojiPanel.onmouseover = () => {
            document.querySelector('.jsliang-emoji-panel').style.display = 'inline-block';
            clearTimeout(closeTimer);
        };
        emojiPanel.onmouseout = () => {
            closeTimer = setTimeout(() => {
                document.querySelector('.jsliang-emoji-panel').style.display = 'none';
            }, 500);
        };

        // 步骤十：统计字数
        const refreshWordNumber = () => {
            let wordNumber = 0;
            const allText = document.querySelectorAll('.logic_block .block_tile p');
            for (let i = 0; i < allText.length; i++) {
                wordNumber += allText[i].innerText.trim().length;
            }
            const allSpan = document.querySelector('.jsliang-word-number span');
            allSpan.innerHTML = wordNumber;
        };
        setInterval(() => {
            refreshWordNumber();
        }, 10 * 1000);
        refreshWordNumber();
    }, 2000);
    /* ------ 模块 2: 底部 Bar 条 ------*/
}());