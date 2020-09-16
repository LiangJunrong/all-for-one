import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function getEnvironment(uri: vscode.Uri | undefined) {
    let cwd, resource;

    if (uri && uri.scheme === 'file') {
        const status = fs.lstatSync(uri.fsPath);

        if (status.isDirectory()) {
            cwd = uri.fsPath;
            resource = '.';
        } else if (status.isFile()) {
            cwd = path.dirname(uri.fsPath);
            resource = path.basename(uri.fsPath);
        }
    }

    return {
        cwd,
        resource
    };
}