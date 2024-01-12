import { defaultFileTree } from "../../Model/FileTree/default.ts";
import { typeFileTree } from "../../Model/mod.ts";

export class FileSystem {
  public initlized = false;
  private Context: typeFileTree.typeFileTree = defaultFileTree;

  constructor(FileTree: typeFileTree.typeFileTreeClass) {
    if (!FileTree) throw new Error("FileTree is empty");

    this.Context = FileTree.callContext();

    this.initlized = true;
  }

  public getFileTree(): typeFileTree.typeFileTree {
    if (!this.initlized) throw new Error("FileTree is not initlized");
    return Object.create(this.Context);
  }
}
