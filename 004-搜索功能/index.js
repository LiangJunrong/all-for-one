console.log('初始化数据：', data);

const render = (data) => {
  const ul = document.querySelector('.search-content');
  const liList = data.map(item => {
    return `
      <li><a href="https://www.baidu.com/s?ie=UTF-8&wd=${item.content}" target="_blank" data-key="${item.content}">${item.content}</a></li>
    `;
  }).join('');
  ul.innerHTML = liList;
};
render(data);

// 光标索引
let index = -1;

const searchEvent = () => {
  // 找到输入框
  const search = document.querySelector('.search');
  // 找到搜索内容区
  const ul = document.querySelector('.search-content');
  // 找到具体内容
  const liList =  document.querySelectorAll('.search-content li');

  // 失焦
  search.addEventListener('blur', () => {
    setTimeout(() => {
      ul.style.visibility = 'hidden';
    }, 100);
  });

  // 失焦
  search.addEventListener('focus', () => {
    ul.style.visibility = 'visible';
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
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      // 判断上下
      if (e.key === 'ArrowDown') {
        index++;
      } else if (e.key === 'ArrowUp') {
        index--;
      }
      // 判断索引
      if (index < -1) {
        index = liList.length - 1;
      } else if (index >= liList.length) {
        index = -1;
        search.value = '';
      } else if (index === -1) {
        index = -1;
        search.value = '';
      }
      // 渲染列表
      liList.forEach((item, i) => {
        const a = item.querySelector('a');
        if (index === i) {
          a.style.color = 'deepskyblue';
          search.value = a.innerHTML;
        } else {
          a.style.color = 'black';
        }
      });
    }
    if (e.key === 'Enter') {
      // 排除 -1 的情况
      if (liList[index]) {
        window.open(liList[index].querySelector('a').href);
      }
    }
  });
};
searchEvent();