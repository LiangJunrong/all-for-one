const fs = require("fs");
const newsData = require("./data.json");
const cheerio = require("cheerio");
const PER_SIZE = 5;
let currentPage = 1;

module.exports = (p = 1) => {
  currentPage = p;
  const currentPageNewsData = getCurrentPageNewsData();
  const template = fs.readFileSync("./views/index.html");
  const $ = cheerio.load(template);
  const newsList = createNewsList(currentPageNewsData);
  const pagination = createPagination();
  $(".news-list").html(newsList);
  $(".pagination").html(pagination);
  return $.html();
};

function createPagination() {
  const prePageIndex = Math.max(1,currentPage - 1) 
  let result = createATag(prePageIndex, "prev", "⌜");
  for (let i = 1; i <= getPageCount(); i++) {
    result += createATag(i, "", i);
  }
  const nextPageIndex = Math.min(getPageCount(),currentPage + 1)
  result += createATag(nextPageIndex, "next", "⌝");
  return result;
}

function createATag(p, className, value) {
  const classNameStr = className ? `class="${className}"` : "";
  return `<a href="?p=${p}" ${classNameStr}>${value}</a>`;
}

function getPageCount() {
  return Math.ceil(newsData.length / PER_SIZE);
}

function getCurrentPageNewsData() {
  // 分页
  // p = 1
  // preSize = 5
  // (p - 1) * preSize , (p - 1) * preSize + preSize
  const start = (currentPage - 1) * PER_SIZE;
  const end = start + PER_SIZE;
  return newsData.slice(start, end);
}

function createNewsList(newsData) {
  let result = "";
  // slice
  newsData.forEach((data) => {
    result += createLiTagDom(data);
  });
  return result;
}

// 创建 li 标签 dom
function createLiTagDom(data) {
  return `
            <li class="news">
                <a href="javascript:;">
                    <img src="${data.imgUrl}" alt="">
                </a>
                <div>
                    <h3>
                        <a href="/detail?id=${data.id}">${data.title}</a>
                    </h3>
                    <div class="info">
                        <span class="tips"><span>${data.country}</span></span>
                        <!-- <span class="line"></span> -->
                        <span class="time">| &nbsp;&nbsp;${data.addTime}</span>
                    </div>
                </div>
            </li>
    `;
}
