const fs = require("fs");
const cheerio = require("cheerio");
const newsData = require("./data.json");

module.exports = (id = 1) => {
  // 获取当前页数据
  const currentData = getCurrentDataById(id);
  // fs 读出模板
  const templateHTMl = fs.readFileSync("./views/detail.html");
  // 拼接html 内容
  const content = getHtmlContent(currentData);
  // 处理数据
  const $ = cheerio.load(templateHTMl);
  $(".text").html(content);
  // 数据给到模板
  return $.html()
};

function getHtmlContent(data) {
  return `
        <h1 class="title">${data.title}</h1>
        <div class="article-info"> ${data.from} 时间：${data.newTime}</div>
        <p class="content">
        ${data.title}
        </p>
  `;
}
function getCurrentDataById(id) {
  const data = newsData.find((data) => {
    return data.id == id;
  });

  return data;
}
