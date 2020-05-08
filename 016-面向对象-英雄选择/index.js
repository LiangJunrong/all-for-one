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
    description: document.querySelector('.description'),
    hero: document.querySelector('.hero'),
  },
}

window.onload = () => {

  // 更新用户名
  const user = 'jsliang';
  elements.login.user.innerHTML = user;
  game.login(user);

  // 更新选择栏
  elements.game.choose.innerHTML = '';
  game.player.heros.forEach((item) => {
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
  })

  // 更新英雄描述以及英雄名
  elements.game.description.innerHTML = '';
  game.player.heros.forEach((item) => {
    const descriptionItem = document.createElement('div');
    descriptionItem.classList.add('description-item');
    if (item.name !== '冷无双') {
      descriptionItem.classList.add('display-none');
    }
    descriptionItem.innerHTML = `
      <p class="hero-name">${item.name}</p>
      <span class="description-content">
        ${item.description}
      </span>
    `;
    elements.game.description.appendChild(descriptionItem);
  })

  // 更新英雄展示
  elements.game.hero.innerHTML = '';
  game.player.heros.forEach((item) => {
    const herosItem = document.createElement('div');
    herosItem.classList.add('hero-item');
    if (item.name !== '冷无双') {
      herosItem.classList.add('display-none');
    }
    herosItem.innerHTML = `
      <img src="${item.heroImage}" alt="${item.hero}">
    `;
    elements.game.hero.appendChild(herosItem);
  });

  console.log(game);
}