终端
===

> Create by **jsliang** on **2020-10-01 19:11:44**  
> Recently revised in **2020-10-01 19:11:44**

<!-- 目录开始 -->
## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- |
| [一 目录](#chapter-one) |
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |
| <a name="catalog-chapter-three" id="catalog-chapter-three"></a>[三 vscode.window](#chapter-three) |
| &emsp;[3.1 三 终端列表](#chapter-three-one) |
| &emsp;[3.2 四 当前打开的终端](#chapter-three-two) |
| &emsp;[3.3 五 当前活跃的终端改变了](#chapter-three-three) |
| &emsp;[3.4 六 有终端被打开](#chapter-three-four) |
| &emsp;[3.5 七 有终端被关闭](#chapter-three-five) |
| &emsp;[3.6 八 创建新终端](#chapter-three-six) |
<!-- 目录结束 -->

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

关于 VS Code 插件中终端的相关内容。

## <a name="chapter-three" id="chapter-three"></a>三 vscode.window

> [返回目录](#chapter-one)

存在于 `vscode.window` 中时，产生下面命令。

使用方式：`vscode.window.xxx`。

### <a name="chapter-three-one" id="chapter-three-one"></a>3.1 三 终端列表

> [返回目录](#chapter-one)

* 原：The currently opened terminals or an empty array.
* 译：当前打开的终端列表或者一个空数组
* 用：`export const terminals: ReadonlyArray<Terminal>;`

### <a name="chapter-three-two" id="chapter-three-two"></a>3.2 四 当前打开的终端

> [返回目录](#chapter-one)

* 原：The currently active terminal or `undefined`. The active terminal is the one that currently has focus or most recently had focus.
* 译：当前打开的终端或者 undefined，这个活跃的终端是最近聚焦的或者最近最常使用的
* 用：`export const activeTerminal: Terminal | undefined;`

### <a name="chapter-three-three" id="chapter-three-three"></a>3.3 五 当前活跃的终端改变了

> [返回目录](#chapter-one)

* 原：An [event](#Event) which fires when the [active terminal](#window.activeTerminal) has changed. Note that the event also fires when the active terminal changes to undefined.
* 译：当当前终端存在变更时这个事件会被激活。注意这个事件也会在活跃的终端变成 undefined 时也会激活
* 用：`export const onDidChangeActiveTerminal: Event<Terminal | undefined>;`

### <a name="chapter-three-four" id="chapter-three-four"></a>3.4 六 有终端被打开

> [返回目录](#chapter-one)

* 原：An [event](#Event) which fires when a terminal has been created, either through the [createTerminal](#window.createTerminal) API or commands.
* 译：当一个终端被创建时，这条指令被触发，或者通过 [createTerminal](#window.createTerminal) API 和 commands 创建的
* 用：`export const onDidOpenTerminal: Event<Terminal>;`

### <a name="chapter-three-five" id="chapter-three-five"></a>3.5 七 有终端被关闭

> [返回目录](#chapter-one)

* 原：An [event](#Event) which fires when a terminal is disposed.
* 译：当终端被处理（关闭）了，这个事件会被触发
* 用：`export const onDidCloseTerminal: Event<Terminal>;`

### <a name="chapter-three-six" id="chapter-three-six"></a>3.6 八 创建新终端

> [返回目录](#chapter-one)

* `export function createTerminal(name?: string, shellPath?: string, shellArgs?: string[] | string): Terminal;`
* `export function createTerminal(options: TerminalOptions): Terminal;`
* `export function createTerminal(options: ExtensionTerminalOptions): Terminal;`

## Terminal

```js
export interface Terminal {
  // 终端名称
  readonly name: string;

  // 终端的进程 id
  readonly processId: Thenable<number | undefined>;

  /**
   * The object used to initialize the terminal, this is useful for example to detecting the
   * shell type of when the terminal was not launched by this extension or for detecting what
   * folder the shell was launched in.
   */
  readonly creationOptions: Readonly<TerminalOptions | ExtensionTerminalOptions>;

  /**
   * The exit status of the terminal, this will be undefined while the terminal is active.
   *
   * **Example:** Show a notification with the exit code when the terminal exits with a
   * non-zero exit code.
   * ```typescript
   * window.onDidCloseTerminal(t => {
   *   if (t.exitStatus && t.exitStatus.code) {
   *       vscode.window.showInformationMessage(`Exit code: ${t.exitStatus.code}`);
   *   }
   * });
   * ```
   */
  readonly exitStatus: TerminalExitStatus | undefined;

  /**
   * Send text to the terminal. The text is written to the stdin of the underlying pty process
   * (shell) of the terminal.
   *
   * @param text The text to send.
   * @param addNewLine Whether to add a new line to the text being sent, this is normally
   * required to run a command in the terminal. The character(s) added are \n or \r\n
   * depending on the platform. This defaults to `true`.
   */
  sendText(text: string, addNewLine?: boolean): void;

  /**
   * Show the terminal panel and reveal this terminal in the UI.
   *
   * @param preserveFocus When `true` the terminal will not take focus.
   */
  show(preserveFocus?: boolean): void;

  /**
   * Hide the terminal panel if this terminal is currently showing.
   */
  hide(): void;

  /**
   * Dispose and free associated resources.
   */
  dispose(): void;
}
```