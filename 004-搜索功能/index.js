console.log('初始化数据：', data);

const render = (data) => {
  const ul = document.querySelector('.search-content');
  const liList = data.map(item => {
    return `
      <li><a href="javascript: void(0)">${item.content}</a></li>
    `;
  }).join('');
  ul.innerHTML = liList;
};
render(data);

const searchEvent = () => {
  // 找到输入框
  const search = document.querySelector('.search');
  // 找到搜索内容区
  const ul = document.querySelector('.search-content');

  // 失焦
  search.addEventListener('blur', () => {
    ul.style.visibility = 'hidden';
  });

  // 输入内容
  search.addEventListener('input', (e) => {
    const content = document.querySelector('.search').value;
    if (content) {
      ul.style.visibility = 'visible';
    }
    const newData = data.filter(item => item.content.includes(content));
    render(newData);
  });

  search.addEventListener('keydown', (e) => {
    console.log(e);
  });
};
searchEvent();