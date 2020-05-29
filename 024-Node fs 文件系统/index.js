/* -------------- 文件操作 --------------*/
const fileAction = require('./util/fileAction');

// 定义变量
const fileContent = `console.log('Hello everyone:');\nconsole.log('my name is jsliang.');`;
const prevFile = './fileDist/jsliang.js';
const nextFile = './fileDist/liangjunorng.js';

// 写入
fileAction.write(prevFile, fileContent);

// 读取
fileAction.read(prevFile);

// 修改
fileAction.rename(prevFile, nextFile);

// 删除
fileAction.unlink(nextFile);

// 复制
fileAction.copy(prevFile, nextFile);
/* -------------- 文件操作结束 --------------*/


/* -------------- 文件目录操作 --------------*/
const catalogAction = require('./util/catelogAction');

const mainName = './catalogDist';
const prevName = './catalogDist/11';
const nextName = './catalogDist/22';

// 创建目录
catalogAction.create(mainName);
catalogAction.create(prevName);

// 修改目录
catalogAction.rename(prevName, nextName);

// 读取目录
fileAction.write('./catalogDist/22/jsliang.js', 'hello js');
fileAction.write('./catalogDist/22/jsliang.html', 'hello html');
catalogAction.readdir(nextName); // [ 'jsliang.html', 'jsliang.js' ]

// 删除目录
catalogAction.rmdir(prevName);

// 判断文件或者目录是否存在
catalogAction.exists(nextName);

// 获取文件或者目录的详细信息
catalogAction.stat(nextName);
/**
  Stats {
    dev: 886875,
    mode: 16822,
    nlink: 1,
    uid: 0,
    gid: 0,
    rdev: 0,
    blksize: undefined,
    ino: 3377699721335068,
    size: 0,
    blocks: undefined,
    atimeMs: 1590626871309.315,
    mtimeMs: 1590626871309.315,
    ctimeMs: 1590626871309.315,
    birthtimeMs: 1590626735862.0815,
    atime: 2020-05-28T00:47:51.309Z,
    mtime: 2020-05-28T00:47:51.309Z,
    ctime: 2020-05-28T00:47:51.309Z,
    birthtime: 2020-05-28T00:45:35.862Z,
  }
*/

// 判断是文件还是目录
catalogAction.isFileOrCatalog(nextFile); // 判断：文件
catalogAction.isFileOrCatalog(nextName); // 判断：目录

// 删除非空文件夹
// 递归 -> 删除内部所有文件 -> 删除文件夹
catalogAction.deleteCatalog(nextName);
/* -------------- 文件目录操作结束 --------------*/