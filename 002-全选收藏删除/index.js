console.log('---数据初始化---');
console.log(data);

// 喜欢和不喜欢以及删除
const rowEvent = (data) => {
  const liItems = document.querySelectorAll('.list li');
  liItems.forEach((item, index) => {
    const checkboxItem = item.querySelector('input');
    checkboxItem && (checkboxItem.onclick = () => {
      console.log('选择：', checkboxItem);
      data[index].checked = !data[index].checked;
      render(data);
    });
    const likeItem = item.querySelector('.like');
    likeItem && (likeItem.onclick = () => {
      console.log('点赞：', likeItem);
      data[index].liked = false;
      render(data);
    });
    const disLikeItem = item.querySelector('.dislike');
    disLikeItem && (disLikeItem.onclick = () => {
      console.log('取消点赞：：', disLikeItem);
      data[index].liked = true;
      render(data);
    });
    const deleteItem = item.querySelector('.delete');
    deleteItem && (deleteItem.onclick = () => {
      console.log('删除项目：', deleteItem);
      data.splice(index, 1);
      render(data);
    });
  });
};

// 全选/全不选
const allCheckEvent = (data) => {
  const allSelectCheckbox = document.querySelector('.delete input');
  allSelectCheckbox && (allSelectCheckbox.onclick = () => {
    if (data.filter(item => item.checked).length !== data.length) {
      data.forEach(item => item.checked = true);
    } else {
      data.forEach(item => item.checked = false);
    }
    render(data);
  });
};

// 删除
const deleteEvent = (data) => {
  const deleteItem = document.querySelector('.delete a');
  deleteItem && (deleteItem.onclick = () => {
    data = data.filter(item => !item.checked);
    render(data);
  });
};

// 添加
const addEvent = (data) => {
  const addText = document.querySelector('.add input');
  const addItem = document.querySelector('.add a');
  addItem && (addItem.onclick = () => {
    data.push({
      name: addText.value,
      singer: '未名',
      checked: false,
      liked: false,
    });
    render(data);
  });
  addText && (addText.onkeypress = (event) => {
    if (event.code === 'Enter') {
      data.push({
        name: addText.value,
        singer: '未名',
        checked: false,
        liked: false,
      });
      addText.value = '';
      render(data);
    }
  })
};

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
          ? '<a href="javascript: void(0)" class="like">【♥】</a>'
          : '<a href="javascript: void(0)" class="dislike">【♡】</a>'
        }
        <a href="javascript: void(0)" class="delete">删除</a>
      </li>
    `;
  });
  ulItem.innerHTML = liItems;
  rowEvent(data);
  allCheckEvent(data);
  deleteEvent(data);
  addEvent(data);

  const allSelectCheckbox = document.querySelector('.delete input');
  if (data.filter(item => !item.checked).length) {
    allSelectCheckbox.checked = false;
  } else {
    allSelectCheckbox.checked = true;
  }
}

// 渲染视图
render(data);