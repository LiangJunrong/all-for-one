"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const path = require('path');
const vscode = require('vscode');
const util = {
    /**
     * @name 获取当前所在工程根目录
     * @description
     * 有 3 种使用方法：
     *  getProjectPath(uri) uri 表示工程内某个文件的路径
     *  getProjectPath(document) document 表示当前被打开的文件 document 对象
     *  getProjectPath() 会自动从 activeTextEditor 拿 document 对象，如果没有拿到则报错
     * @param {*} document
     */
    getProjectPath(document) {
        if (!document) {
            document = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.document : null;
        }
        if (!document) {
            this.showError('当前激活的编辑器不是文件或者没有文件被打开！');
            return '';
        }
        const currentFile = (document.uri ? document.uri : document).fsPath;
        let projectPath = null;
        let workspaceFolders = vscode.workspace.workspaceFolders.map((item) => item.uri.path);
        // 由于存在 Multi-root 工作区，暂时没有特别好的判断方法，先这样粗暴判断
        // 如果发现只有一个根文件夹，读取其子文件夹作为 workspaceFolders
        if (workspaceFolders.length === 1 && workspaceFolders[0] === vscode.workspace.rootPath) {
            const rootPath = workspaceFolders[0];
            var files = fs.readdirSync(rootPath);
            workspaceFolders = files.filter((name) => !/^\./g.test(name)).map((name) => path.resolve(rootPath, name));
        }
        workspaceFolders.forEach((folder) => {
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
    /**
     * @name 弹出错误信息
     * @param info 需要展示的错误信息
     */
    showError: function (info) {
        vscode.window.showErrorMessage(info);
    },
};
exports.default = util;
//# sourceMappingURL=util.js.map