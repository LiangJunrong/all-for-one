const fs = require('fs');
const data = require('./data.json');
const cheerio = require('cheerio');
const PAGE_SIZE = 5;

module.exports = (p = 1) => {
  const currentPage = p;
  const currData = getPageData(data, currentPage);

  const template = fs.readFileSync('./news/views/index.html');
  const $ = cheerio.load(template);

  const newsList = createUlTagDom(currData);
  $('.news-list').html(newsList);

  const pagination = createPagination(data);
  $('.pagination').html(pagination);

  return $.html();
};

// 生成分页
const createPagination = (data) => {
  let result = `<a href="javascript:;" class="prev">⌜</a>`;
  for (let i = 0; i < getPageCount(data); i++) {
    result += `<a href="/?p=${i + 1}">${i + 1}</a>`;
  }
  result += `<a href="javascript:;" class="next">⌝</a>`;
  return result;
};

const getPageCount = (data) => {
  return Math.ceil(data.length / PAGE_SIZE);
}

// 自动生成数据
const getPageData = (data, currentPage) => {
  /**
   * 分页规则：
   * page: 1
   * pageSize: 5
   * data: [(page - 1) * pageSize, (page - 1) * pageSize + pageSize]
   */
  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  return data.slice(start, end);
};

// 创建 ul 标签
const createUlTagDom = (data) => {
  let result = '';
  data.forEach((item) => {
    result += createLiTagDom(item);
  })
  return result;
};

// 创建 li 标签
const createLiTagDom = (data) => {
  return `
    <li class="news">
      <a href="javascript:;">
        <img src="${data.imgUrl}" alt="" />
      </a>
      <div>
        <h3>
          <a href="javascript:;">${data.title}</a>
        </h3>
        <div class="info">
          <span class="tips"><span>${data.from}</span></span>
          <span class="time">| &emsp;${data.newTime}</span>
        </div>
      </div>
    </li>
  `;
};