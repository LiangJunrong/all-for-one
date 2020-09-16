import * as vscode from 'vscode';
import { TerminalCommand } from './command';

export interface CommandQuickPickItem extends vscode.QuickPickItem {
    type: 'group' | 'command';
    command?: TerminalCommand;
    group?: string;
}

export async function showCommandsPick(commands: TerminalCommand[]) {
    const grouplessCommands = getGroupless(commands);
    const groups = getGroups(commands);

    const pickItems = getPickItems(grouplessCommands, groups);
    if (pickItems.length === 0) {
        return;
    }

    let picked = await vscode.window.showQuickPick(pickItems, { matchOnDescription: true });
    if (!picked) {
        return;
    }

    if (picked.type === 'group' && picked.group) {
        picked = await vscode.window.showQuickPick(
            getPickItems(getFromGroup(commands, picked.group)),
            { matchOnDescription: true });
    }

    if (!picked || picked.type !== 'command' || !picked.command) {
        return;
    }

    return picked.command;
}

function getGroupless(commands: TerminalCommand[]) {
    return commands.filter(c => !c.group);
}

function getGroups(commands: TerminalCommand[]) {
    return distinct(commands
        .filter(c => !!c.group)
        .map(c => c.group as string));
}

function getFromGroup(commands: TerminalCommand[], group: string) {
    return commands.filter(c => c.group === group);
}

function distinct<T>(values: T[]) {
    return [...new Set(values)];
}

function getPickItems(commands: TerminalCommand[], groups: string[] = []) {
    return [
        ...commands.map<CommandQuickPickItem>(c => {
            return {
                type: 'command',
                command: c,
                label: c.name || removeVariables(c.command).trim(),
                description: 'Command' + (c.name ? ` (${removeVariables(c.command).trim()})` : '')
            };
        }),
        ...groups.map<CommandQuickPickItem>(g => {
            return {
                type: 'group',
                group: g,
                label: g,
                description: 'Group'
            };
        })
    ];
}

function removeVariables(command: string) {
    return command.replace(/{\w+}/g, '');
}