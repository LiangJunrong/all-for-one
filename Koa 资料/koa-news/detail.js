const newsData = require("./data/data.json");

module.exports = (id = 1) => {
  // 获取当前页数据
  const currentData = getCurrentDataById(id);
  console.log(currentData)
  return {
    data: currentData,
  };
};

function getCurrentDataById(id) {
  const data = newsData.find((data) => {
    return data.id == id;
  });

  return data;
}
