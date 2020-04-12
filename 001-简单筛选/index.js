// 数据渲染 -> 数据驱动视图
const render = (data) => {
  document.querySelector('tbody').innerHTML = '';
  data.forEach(item => {
    const trElement = document.createElement('tr');
    trElement.innerHTML = `
      <tr>
        <th>${item.name}</th>
        <th>${item.age}</th>
        <th>${item.gender}</th>
      </tr>
    `;
    document.querySelector('tbody').appendChild(trElement);
  });
}

render(data);

// 年龄排序
const ageSort = [
  ageDefault = (data) => data,
  smallToBig = (data) => data.sort((a, b) => a.age - b.age),
  bigToSmall = (data) => data.sort((a, b) => b.age - a.age),
];

console.log('---年龄过滤---');
console.log('默认：', ageSort[0](JSON.parse(JSON.stringify(data))).map(item => item.age));
console.log('从小到大：', ageSort[1](JSON.parse(JSON.stringify(data))).map(item => item.age));
console.log('从大到小：', ageSort[2](JSON.parse(JSON.stringify(data))).map(item => item.age));

// 性别筛选
const genderSort = [
  genderDefault = (data) => data,
  man = (data) => data.filter(item => item.gender === '男'),
  woman = (data) => data.filter(item => item.gender === '女'),
];

console.log('---性别过滤--');
console.log('默认：', genderSort[0](JSON.parse(JSON.stringify(data))).map(item => item.id));
console.log('男性：', genderSort[1](JSON.parse(JSON.stringify(data))).map(item => item.id));
console.log('女性：', genderSort[2](JSON.parse(JSON.stringify(data))).map(item => item.id));

// 事件绑定
const ageElements = document.querySelectorAll('.age-sort button');
const genderElements = document.querySelectorAll('.gender-sort button');

let ageIndex = 0;
let genderIndex = 0;

const addEvent = (elements, type) => {
  Array.from(elements).forEach((item1, index1) => {
    item1.onclick = () => {
      // 改变样式
      elements.forEach((item2, index2) => {
        item2.classList.remove('active');
        if (index2 === index1) {
          item2.classList.add('active');
        }
      });
      let newData;
      if (type === 'age') {
        newData = ageSort[index1](JSON.parse(JSON.stringify(data)));
        newData = genderSort[genderIndex](newData);
        ageIndex = index1;
      } else if (type === 'gender') {
        newData = genderSort[index1](JSON.parse(JSON.stringify(data)));
        newData = ageSort[ageIndex](newData);
        genderIndex = index1;
      }
      render(newData);
    };
  });
};

addEvent(ageElements, 'age');
addEvent(genderElements, 'gender');