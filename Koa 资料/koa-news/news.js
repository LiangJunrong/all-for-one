const newsData = require("./data/data.json");
const PER_SIZE = 5;
let currentPage = 1;

module.exports = (p = 1) => {
  currentPage = p;
  const currentPageNewsData = getCurrentPageNewsData();
  return {
    newsData: currentPageNewsData,
    pageCount: getPageCount(),
    p: currentPage,
  };
};

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


