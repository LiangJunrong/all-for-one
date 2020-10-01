"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
/*
存在于 vscode.window 中：

// 原：The currently opened terminals or an empty array.
// 译：当前打开的终端列表或者一个空数组
export const terminals: ReadonlyArray<Terminal>;

// 原：The currently active terminal or `undefined`. The active terminal is the one that
currently has focus or most recently had focus.
// 译：当前打开的终端或者 undefined，这个活跃的终端是最近聚焦的或者最近最常使用的
export const activeTerminal: Terminal | undefined;

// 原：An [event](#Event) which fires when the [active terminal](#window.activeTerminal)
// has changed. Note that the event also fires when the active terminal changes to undefined.
// 译：当当前终端存在变更时这个事件会被激活。注意这个事件也会在活跃的终端变成 undefined 时也会激活
export const onDidChangeActiveTerminal: Event<Terminal | undefined>;

// 原：An [event](#Event) which fires when a terminal has been created, either through the
// [createTerminal](#window.createTerminal) API or commands.
// 译：当一个终端被创建时，这条指令被触发，或者通过 [createTerminal](#window.createTerminal) API 和 commands 创建的
export const onDidOpenTerminal: Event<Terminal>;

// 原：An [event](#Event) which fires when a terminal is disposed.
// 译：当终端被处理（关闭）了，这个事件会被触发
export const onDidCloseTerminal: Event<Terminal>;

// 创建一个新的终端
export function createTerminal(name?: string, shellPath?: string, shellArgs?: string[] | string): Terminal;
export function createTerminal(options: TerminalOptions): Terminal;
export function createTerminal(options: ExtensionTerminalOptions): Terminal;

// 原：Register provider that enables the detection and handling of links within the terminal.
// @param provider The provider that provides the terminal links.
// @return Disposable that unregisters the provider.
// 译： 注册一个事件，允许监听终端内的链接
export function registerTerminalLinkProvider(provider: TerminalLinkProvider): Disposable;
*/
// 监听自定义命令
const terminalCommitSuccess = vscode.commands.registerCommand('jsliang.terminalCommitSuccess', () => {
    console.log('git - 完成');
});
module.exports = (context) => {
    context.subscriptions.push(terminalCommitSuccess);
};
//# sourceMappingURL=terminalCommitSuccess.js.map