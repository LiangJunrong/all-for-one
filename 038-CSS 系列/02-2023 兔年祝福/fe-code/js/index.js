window.onload = async () => {
  /* Start --- 不可定制 --- Start */
  // 信封
  const letterImage = document.querySelector('.letter-image');
  // 信 - 内容主题
  const letterContent = document.querySelector('.letter-content');
  // 信 - 关闭按钮
  const letterCloseButton = document.querySelector('.letter-content-button');
  letterImage.onclick = () => {
    letterContent.style.cssText = `
opacity: 1;
width: calc(100vw);
max-width: 600px;
height: auto;
min-height: 300px;
max-height: calc(100vh);
z-index: 99;
transition-property: opacity, z-index;
transition-duration: 1s;
`;
  };
  letterCloseButton.onclick = () => {
    letterContent.style.cssText = `
opacity: 0;
z-index: 0;
`;
  };
  /* End --- 不可定制 --- End */

  /* Start --- 可定制 --- Start */
  // 获取节点
  const tipsInfo = document.querySelector('.tips-info');
  const letterContentTitle = document.querySelector('.letter-content-title');
  const letterContentMain = document.querySelector('.letter-content-main');
  const letterContentButton = document.querySelector('.letter-content-button');

  // 获取 URL 参数
  let query;
  const getQuery = (info) => {
    if (query) {
      return query.get(info);
    }
    query = new URLSearchParams(window.location.search);
    return query.get(info);
  };

  const data = await fetch('./data.json');
  const userinfo = await data.json();
  console.log('data: ', userinfo);

  const username = getQuery('username') || 'jsliang';

  for (let i = 0; i < userinfo.length; i++) {
    const item = userinfo[i];
    if (item.username === username) {
      tipsInfo.innerText = item.tipsInfo;
      letterContentTitle.innerText = item.letterContentTitle;
      letterContentMain.innerText = item.letterContentMain;
      letterContentButton.innerText = item.letterContentButton;
      break;
    }
  }
  /* End --- 可定制 --- End */
};