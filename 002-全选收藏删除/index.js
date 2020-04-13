console.log('---数据初始化---');
console.log(data);

const render = (data) => {
  const ulItem = document.querySelector('.list');
  ulItem.innerHTML = '';
  let liItems = '';
  data.forEach(item => {
    liItems += `
      <li>
        <input type="checkbox" ${item.checked ? 'checked' : ''} />
        <span class="works">${item.name} - ${item.singer}</span>
        ${
          item.liked
          ? '<a href="javascript:;" class="like">【♡】</a>'
          : '<a href="javascript:;" class="dislike">【♥】</a>'
        }
        <a href="javascript:;">删除</a>
      </li>
    `;
  });
  ulItem.innerHTML = liItems;
}

// 渲染视图
render(data);

// 喜欢和不喜欢
const likedEvent = (data) => {
  const liItems = document.querySelectorAll('.list li');
  console.log(liItems);
  liItems.forEach((item, index) => {
    const likeItem = item.querySelector('.like');
    console.log(likeItem.onclick);
    likeItem && (likeItem.onclick = () => {
      console.log('喜欢', data[index]);
      data[index].liked = true;
      render(data);
    })
  });
  console.log('data', data);
  render(data);
};

likedEvent(data);
