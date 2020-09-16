// run: vsce package
import * as vscode from "vscode";
var fs = require("fs");

export function getCommandFromFile(
  filename: string,
  encoding: string
): string | null {
  let text: string = fs.readFileSync(filename).toString(encoding);
  let string_to_match: string = "^(#|//|--) run: (.*)$";

  var command = null;

  text.split("\n").forEach((line: string) => {
    let matched_string: RegExpMatchArray | null = line.match(string_to_match);
    if (matched_string) {
      command = matched_string[2];
      return;
    }
  });

  return command;
}

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.runscript",
    () => {
      if (vscode.window.activeTextEditor) {
        console.debug(
          "Run script: " + vscode.window.activeTextEditor.document.fileName
        );

        // TODO Use comment symbol from syntax highlighter
        // TODO Use encoding of editor

        var run_command = getCommandFromFile(
          vscode.window.activeTextEditor.document.fileName,
          "utf-8"
        );

        if (!run_command) {
          let configuration = vscode.workspace.getConfiguration();
          if (
            configuration.get("runscript.startDebuggingWhenNoRunStatementFound")
          ) {
            vscode.commands.executeCommand("workbench.action.debug.start");
          }
          return;
        }

        var terminal;
        if (vscode.window.activeTerminal) {
          terminal = vscode.window.activeTerminal;
        } else {
          terminal = vscode.window.createTerminal();
        }
        terminal.sendText(run_command);
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
