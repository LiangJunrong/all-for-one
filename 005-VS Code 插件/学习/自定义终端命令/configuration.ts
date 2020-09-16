import * as vscode from "vscode";
import { TerminalCommand } from './command';

export function getCommands() {
    return sanitizeConfiguration(getConfiguration());
}

function getConfiguration() {
    return vscode.workspace
        .getConfiguration()
        .get('runTerminalCommand.commands');
}

function sanitizeConfiguration(configuration: any) {
    if (!Array.isArray(configuration)) {
        return [];
    }

    return configuration
        .filter(c => isNotEmptyString((c as TerminalCommand).command))
        .map<TerminalCommand>((c) => {
            const maybeCommand = c as TerminalCommand;
            return {
                command: maybeCommand.command,
                auto: !!maybeCommand.auto,
                preserve: !!maybeCommand.preserve,
                name: notEmptyStringOrUndefined(maybeCommand.name),
                group: notEmptyStringOrUndefined(maybeCommand.group)
            };
        });
}

function isNotEmptyString(value: any) {
    return typeof value === 'string' && value.trim().length > 0;
}

function notEmptyStringOrUndefined(value: any) {
    return isNotEmptyString(value) ? (value as string).trim() : undefined;
}