window.onload = () => {
  const scoring = document.querySelector('.scoring');
  const checkboxList = document.querySelectorAll('.rate');
  // 上一次打的分数
  let prevScore = 0;
  checkboxList.forEach((item) => {

    // 改变评分的时候，设置文本效果
    item.onchange = (e) => {
      const score = Number(e.target.value);
      switch (score) {
        case 1: scoring.innerText = '-_- 谢谢你这么不看好我 -_-'; break;
        case 2: scoring.innerText = '哇塞，我比更低更胜一筹！'; break;
        case 3: scoring.innerText = '中规中矩啦，麻麻嘚~'; break;
        case 4: scoring.innerText = '哇塞，我比更高差了一步！'; break;
        case 5: scoring.innerText = '^_^ 谢谢你这么看好我 ^_^'; break;
        default: scoring.innerText = '小伙伴，快评分呀~'; break;
      }
    };

    // 点击的时候，判断是选中还是反选
    item.onclick = (e) => {
      const score = Number(e.target.value);
      // 评分相同，则反选，且清空评分
      if (score === prevScore) {
        item.checked = false;
        prevScore = 0;
        scoring.innerText = '小伙伴，快评分呀~'
      } else {
        // 否则设置上一次评分
        prevScore = score;
      }
    };
  });
};
