// 分析对象：英雄 技能 玩家
// 英雄抽离分析：每个玩家都可能有同一个英雄，所以可以将英雄抽离成类；当然也可以直接将整个英雄抽成一个类，形成英雄池
// 游戏管理类：将英雄和技能进行统一协调

/**
 * 代码分块：
 * init：初始化游戏
 * player：玩家
 * heros：英雄
*/

import Game from './game/init/init.js';

const game = new Game();

const elements = {
  login: {
    user: document.querySelector('.user'),
  },
  game: {
    choose: document.querySelector('.choose'),
    chooseItem: document.querySelectorAll('.choose-item'),
    description: document.querySelector('.description'),
    hero: document.querySelector('.hero'),
    skill: document.querySelector('.skill'),
  },
}

window.onload = () => {

  // 更新用户名
  const user = 'jsliang';
  elements.login.user.innerHTML = user;
  game.login(user);
  // 默认英雄
  game.defaultHero = '冷无双';
  const defaultHero = game.player.heros.find(item => item.name === '冷无双');
  // 初始化画布
  const initDraw = (defaultHero) => {
    // 1. 更新英雄描述以及英雄名
    elements.game.description.innerHTML = `
      <div class="description-item">
        <p class="hero-name">${defaultHero.name}</p>
        <span class="description-content">
          ${defaultHero.description}
        </span>
      </div>
    `;

    // 2. 更新英雄展示
    elements.game.hero.innerHTML = `
      <div class="hero-item">
        <img src="${defaultHero.heroImage}" alt="${defaultHero.name}">
      </div>
    `;

    // 3. 更新英雄技能
    elements.game.skill.innerHTML = defaultHero.skills.map((item2) => {
      return `
        <div class="skill-item">
          <img src="${item2.ico}" alt="技能">
          <span>${item2.name}</span>
        </div>
      `;
    });
  };
  initDraw(defaultHero);

  // 更新选择栏
  elements.game.choose.innerHTML = '';
  game.player.heros.forEach((item) => {
    // 更新选择栏
    const chooseItem = document.createElement('div');
    chooseItem.classList.add('choose-item');
    if (item.name === '冷无双') {
      chooseItem.classList.add('choose-item-active');
    }
    chooseItem.innerHTML = `
      <img src="${item.heroHeadSculpture}" alt="${item.name}">
      <span>${item.name}</span>
    `;
    elements.game.choose.appendChild(chooseItem);
    // 点击切换技能介绍、英雄展示、英雄选择、技能
    chooseItem.onclick = () => {
      elements.game.choose.childNodes.forEach((item2) => {
        item2.classList.remove('choose-item-active');
      })
      chooseItem.classList.add('choose-item-active');
      
      elements.game.description.innerHTML= `
        <div class="description-item">
          <p class="hero-name">${item.name}</p>
          <span class="description-content">
            ${item.description}
          </span>
        </div>
      `;
      elements.game.hero.innerHTML = `
        <div class="hero-item">
          <img src="${item.heroImage}" alt="${item.name}">
        </div>
      `;
      elements.game.skill.innerHTML = item.skills.map((item2) => {
        return `
          <div class="skill-item">
            <img src="${item2.ico}" alt="技能">
            <span>${item2.name}</span>
          </div>
        `;
      });
    }
  })

  console.log(game);
}