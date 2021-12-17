window.onload = () => {
  // 步骤 1：获取元素
  const numberStart = document.querySelector('.numberStart'),
    numberEnd = document.querySelector('.numberEnd'),
    start = document.querySelector('.start');
    // lotteryResult = document.querySelector('#lotteryResult');
    lockNumber = document.querySelector('.lockNumber');
    unlockNumber = document.querySelector('.unlockNumber');
    list = document.querySelector('.list');
    resultList = new Set();

  let locked = false;
  numberStart.value = localStorage.getItem('numberStart') || '';
  numberEnd.value = localStorage.getItem('numberEnd') || '';

  // 步骤 2：锁抽奖数字范围
  lockNumber.onclick = () => {
    locked = true;
    const startValue = numberStart.value;
    const endValue = numberEnd.value;
    if (Number(startValue) > Number(endValue)) {
      alert('开始范围请小于结束范围！');
      return;
    }
    localStorage.setItem('numberStart', startValue);
    localStorage.setItem('numberEnd', endValue);
    numberStart.disabled = true;
    numberEnd.disabled = true;
  };
  unlockNumber.onclick = () => {
    locked = false;
    localStorage.setItem('numberStart', '');
    localStorage.setItem('numberEnd', '');
    numberStart.disabled = false;
    numberEnd.disabled = false;
  };

  // 步骤 3：开始抽奖

  // 获取范围 start-end 的数字（包含 start 和 end）
  const getRandom = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start;
  };

  // 滚动效果（支持小数）
  const play = (result) => {     
    // 返回 100 个随机的 0-9 的数字（包含 0-9）
    const return100 = () => {
      let h = '<span class="lotteryResultNumber">';
      for (let i = 0; i < 100; i++) {
        h += `<i>${getRandom(0, 9)}</i>`;
      }
      h += '</span>';
      return h;
    }
    
    // 制造滚动字幕
    let scrollHTML = '';
    const arrResult = String(result).split(''); // 强转 result 避免数字无法切割
    for (let i = 0; i < arrResult.length; i++){
      if (arrResult[i] === '.') { // 支持小数点
        scrollHTML += '.';
        continue;
      }
      scrollHTML += `<div class="lotteryResultItem" data-id="${i}">${return100()}</div>`;
    }
    document.querySelector('.lotteryResult').innerHTML = scrollHTML;

    // 添加结果并制造滚动效果
    const lotteryResultItems = document.querySelectorAll('.lotteryResultItem');
    const spanHeight = lotteryResultItems[0].querySelector('span').offsetHeight;
    for (let i = 0; i < lotteryResultItems.length; i++){
      const newi = document.createElement('i');
      newi.innerHTML = arrResult[lotteryResultItems[i].getAttribute('data-id')];
      const nowSpan = lotteryResultItems[i].querySelector('span');
      nowSpan.appendChild(newi);
      nowSpan.style.webkitTransition = `all ${0.9 + i * 0.1}s ease-in 0.1s`;
      nowSpan.style.webkitTransform = `translate3d(0, -${spanHeight}px, 0)`;
    }
  }

  // 存储抽奖结果
  const save = (result) => {
    const newLi = document.createElement('li');
    newLi.innerHTML = `<li><span class="badge">${resultList.size}</span><span class="text">${result}</span></li>`;
    setTimeout(() => {
      list.appendChild(newLi);
      const allLi = list.querySelectorAll('li');
      allLi[allLi.length - 1].scrollIntoViewIfNeeded();
    }, 2000);
  };

  // 点击开始
  start.onclick = () => {
    if (!locked) {
      alert('请先锁定再抽奖，避免号码出错！');
      return;
    }
    if (resultList.size === (Number(numberEnd.value - Number(numberStart.value) + 1))) {
      alert('已抽取范围内所有号码，请重置页面！');
      return;
    }
    let result = getRandom(Number(numberStart.value), Number(numberEnd.value));
    // 去重，抽到不重复的为止
    while (resultList.has(result)) {
      result = getRandom(Number(numberStart.value), Number(numberEnd.value));
    }
    resultList.add(result);
    play(result); // run 起来
    save(result); // save 起来
  };
};