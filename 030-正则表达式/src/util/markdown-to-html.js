const fs = require("fs");
const marked = require("marked");

// 模板文件地址
fs.readFile("./source.html", "utf8", (err, template) => {
  if (err) {
    throw err;
  } else {
    // 源文件地址
    fs.readFile("./source.md", "utf8", (err, markContent) => {
      if (err) {
        throw err;
      } else {
        // 转化好的html字符串
        let htmlStr = marked(markContent.toString());
        // 将html模板文件中的 '@markdown' 替换为html字符串
        template = template.replace("@markdown", htmlStr);
        // 将新生成的字符串template重新写入到文件中==>模板文件地址
        fs.writeFile("./output.html", template, (err) => {
          if (err) {
            throw err;
          } else {
            console.log("success");
          }
        });
      }
    });
  }
});
