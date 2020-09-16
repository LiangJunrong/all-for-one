import * as vscode from 'vscode';
import { getCommands } from './configuration';
import { showCommandsPick } from './pick';
import { getEnvironment } from './env';
import { runCommand } from './terminal';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('extension.runTerminalCommand', runTerminalCommand));
}

export function deactivate() { }

async function runTerminalCommand(uri: vscode.Uri | undefined) {
	const commands = getCommands();

	const pickedCommand = await showCommandsPick(commands);
	if (!pickedCommand) {
		return;
	}

	const env = getEnvironment(uri || getOpenFileUri());

	runCommand(pickedCommand, env.cwd, env.resource);
}

function getOpenFileUri() {
	if (vscode.window.activeTextEditor) {
		return vscode.window.activeTextEditor.document.uri;
	}
}