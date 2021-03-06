"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode_1 = require("vscode");
const Item_1 = require("../Item");
const config_1 = require("../lib/config");
const BaseFileController_1 = require("./BaseFileController");
const TypeAheadController_1 = require("./TypeAheadController");
class NewFileController extends BaseFileController_1.BaseFileController {
    showDialog(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { prompt, relativeToRoot = false } = options;
            const sourcePath = yield this.findSourcePath(relativeToRoot);
            if (!sourcePath) {
                throw new Error();
            }
            const value = path.join(sourcePath, path.sep);
            const valueSelection = [value.length, value.length];
            const targetPath = yield vscode_1.window.showInputBox({ prompt, value, valueSelection });
            if (targetPath) {
                const isDir = targetPath.endsWith(path.sep);
                const realPath = path.resolve(sourcePath, targetPath);
                return new Item_1.FileItem(sourcePath, realPath, isDir);
            }
        });
    }
    execute(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fileItem, isDir = false } = options;
            yield this.ensureWritableFile(fileItem);
            try {
                return fileItem.create(isDir);
            }
            catch (e) {
                throw new Error(`Error creating file '${fileItem.path}'.`);
            }
        });
    }
    findSourcePath(relativeToRoot) {
        return __awaiter(this, void 0, void 0, function* () {
            if (relativeToRoot) {
                return this.getWorkspaceSourcePath();
            }
            return this.getFileSourcePath();
        });
    }
    getFileSourcePath() {
        return __awaiter(this, void 0, void 0, function* () {
            let sourcePath = yield this.getSourcePath();
            sourcePath = path.dirname(sourcePath);
            if (config_1.getConfiguration('typeahead.enabled') === true) {
                const typeAheadController = new TypeAheadController_1.TypeAheadController();
                sourcePath = yield typeAheadController.showDialog(sourcePath);
            }
            return sourcePath;
        });
    }
    getWorkspaceSourcePath() {
        return __awaiter(this, void 0, void 0, function* () {
            const workspaceFolder = yield this.selectWorkspaceFolder();
            return workspaceFolder && workspaceFolder.uri.fsPath;
        });
    }
    selectWorkspaceFolder() {
        return __awaiter(this, void 0, void 0, function* () {
            if (vscode_1.workspace.workspaceFolders.length === 1) {
                return vscode_1.workspace.workspaceFolders[0];
            }
            const sourcePath = yield this.getSourcePath();
            const uri = vscode_1.Uri.file(sourcePath);
            return vscode_1.workspace.getWorkspaceFolder(uri) || vscode_1.window.showWorkspaceFolderPick();
        });
    }
}
exports.NewFileController = NewFileController;
//# sourceMappingURL=NewFileController.js.map