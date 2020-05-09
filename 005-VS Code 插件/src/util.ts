const fs = require('fs');
const path = require('path');
const vscode = require('vscode');

const util = {

  /* ———————————————————————————————— 项目类 ———————————————————————————————— */
  /**
   * @name 获取当前所在工程根目录
   * @description
   * 有 3 种使用方法：
   *  getProjectPath(uri) uri 表示工程内某个文件的路径 
   *  getProjectPath(document) document 表示当前被打开的文件 document 对象
   *  getProjectPath() 会自动从 activeTextEditor 拿 document 对象，如果没有拿到则报错
   * @param {*} document 
   */
  getProjectPath(document: any) {
    if (!document) {
      document = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.document : null;
    }
    if (!document) {
      this.showError('当前激活的编辑器不是文件或者没有文件被打开！');
      return '';
    }
    const currentFile = (document.uri ? document.uri : document).fsPath;
    let projectPath = null;

    let workspaceFolders = vscode.workspace.workspaceFolders.map((item: { uri: { path: any; }; }) => item.uri.path);
    // 由于存在 Multi-root 工作区，暂时没有特别好的判断方法，先这样粗暴判断
    // 如果发现只有一个根文件夹，读取其子文件夹作为 workspaceFolders
    if (workspaceFolders.length === 1 && workspaceFolders[0] === vscode.workspace.rootPath) {
      const rootPath = workspaceFolders[0];
      var files = fs.readdirSync(rootPath);
      workspaceFolders = files.filter((name: string) => !/^\./g.test(name)).map((name: any) => path.resolve(rootPath, name));
    }
    workspaceFolders.forEach((folder: any) => {
      if (currentFile.indexOf(folder) === 0) {
        projectPath = folder;
      }
    });
    if (!projectPath) {
      this.showError('获取工程根路径异常！');
      return '';
    }
    return projectPath;
  },


  /* ———————————————————————————————— 警示类 ———————————————————————————————— */
  /**
   * @name 弹出错误信息
   * @param info 需要展示的错误信息
   */
  showError(info: any) {
    vscode.window.showErrorMessage(info);
  },

  /* ———————————————————————————————— 转换类 ———————————————————————————————— */
  // 判断类型
  isCamel(text: string) { return text[0] === text[0].toLowerCase() && text !== text.toLowerCase(); },
  isPascal(text: string) { return text[0] === text[0].toUpperCase() && !text.includes('_'); },
  isPhp(text: string) { return text[0] === text[0].toLowerCase() && text.includes('_'); },
  isConstant(text: string) { return text[0] === text[0].toUpperCase() && text.includes('_'); },
  isKebab(text: string) { return text.includes('-'); },
  /**
   * @name getStyle
   * @description 获取文本类型
   * @param text 
   */
  getStyle(text: any) {
    if (this.isCamel(text)) {
      return 'camel';
    } else if (this.isPascal(text)) {
      return 'pascal';
    } else if (this.isPhp(text)) {
      return 'php';
    } else if (this.isConstant(text)) {
      return 'constant';
    } else if (this.isKebab(text)) {
      return 'kebab';
    } else {
      return 'unknow';
    }
  },
  /**
   * 返回字符串打散后的小写字符数组
   * @param {string} text 
   * @return {Array}
   */
  getTextArray(text: any) {
    switch (this.getStyle(text)) {
      case 'camel':
        return text.replace(/([A-Z])/g, '_$1').toLowerCase().split('_');
      case 'pascal':
        return text.replace(/([A-Z])/g, '_$1').toLowerCase().split('_').slice(1);
      case 'php':
        return text.split('_');
      case 'constant':
        return text.split('_').map((item: string) => item.toLowerCase());
      case 'kebab':
        return text.split('-');
      default:
        return [text];
    }
  },
  /**
   * @name toCamelCase
   * @description 转为驼峰式命名 textStyle
   * @param {string} text 
   */
  toCamelCase(text: string) {
    if(this.isCamel(text)) {
      return text;
    } else {
      return this.getTextArray(text).map((item: string, i: number) => {
        if (i > 0){
          item = item[0].toUpperCase() + item.substr(1);
          return item;
        } else {
          return item;
        }
      }).join('');
    }
  },
  /**
   * @name toPascal
   * @description 转为帕斯卡命名 TextStyle
   * @param {string} text 
   */
  toPascal(text: string) {
    if(this.isPascal(text)) {
      return text;
    } else {
      return this.getTextArray(text).map((item: string) => {
        item = item[0].toUpperCase() + item.substr(1);
        return item;
      }).join('');
    }
  },
  /**
   * @name toConstant
   * @description 转为常量式命名 TEXT_STYLE
   * @param {string} text 
   */
  toConstant(text: string) {
    if(this.isConstant(text)) {
      return text;
    } else {
      return this.getTextArray(text).join('_').toUpperCase();
    }
  },
  /**
   * @name toKebab
   * @description 转为中横线命名 text-style
   * @param {string} text 
   */
  toKebab(text: string) {
    if(this.isKebab(text)){
      return text;
    } else {
      return this.getTextArray(text).join('-');
    }
  },
  /**
   * @name toPhp
   * @description 转为 php 风格命名 text_style
   * @param {string} text 
   */
  toPhp(text: string) {
    if(this.isPhp(text)) {
      return text;
    } else {
      return this.getTextArray(text).join('_');
    }
  },
};


export default util;