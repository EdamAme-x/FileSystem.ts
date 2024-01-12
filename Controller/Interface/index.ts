import { defaultFileTree } from "../../Model/FileTree/default.ts";
import { typeFileTree } from "../../Model/mod.ts";

export class FileSystem {
  public initlized = false;
  private Context: typeFileTree.typeFileTree = defaultFileTree;
  private defaultContext: typeFileTree.typeFileTree = defaultFileTree;
  private rollbackContext: typeFileTree.typeFileTree[] = [defaultFileTree];

  constructor(FileTree: typeFileTree.typeFileTreeClass) {
    if (!FileTree) throw new Error("FileTree is empty");

    this.Context = FileTree.callContext();
    this.defaultContext = Object.create(this.Context);

    this.initlized = true;
  }

  public getFileTree(): typeFileTree.typeFileTree {
    this.isInitlized()
    return Object.create(this.Context);
  }

  public setFileTree(FileTree: typeFileTree.typeFileTreeClass) {
    this.isInitlized()
    this.Context = FileTree.callContext();
  }

  private updateFileTree(FileTree: typeFileTree.typeFileTree) {
    this.isInitlized()
    if (!FileTree) throw new Error("FileTree is empty");

    if (this.rollbackContext.length > 5) {
        this.rollbackContext.pop();
    }

    this.rollbackContext.push(Object.create(this.Context));
  }

  public rollback() {
    this.isInitlized()
    if (!this.rollbackContext.length || this.rollbackContext.length < 1) throw new Error("No rollback");

    this.rollbackContext.pop();
    this.Context = Object.create(this.rollbackContext[this.rollbackContext.length - 1]);
  }

  public canRollback() {
    this.isInitlized()
    return this.rollbackContext.length > 0
  }

  public reset() {
    this.isInitlized()
    this.initlized = false;
    this.Context = Object.create(this.defaultContext);
    this.initlized = true;
  }

  private isInitlized(): void {
      if (!this.initlized) throw new Error("FileTree is not initlized");
  }
}
