import { typeFileTree, typeFileTreeClass } from "./types.ts";
import { defaultFileTree } from "./default.ts";
import FileTreeValidator from "../../Application/FileTreeValidator/index.ts";

export class FileTree implements typeFileTreeClass {
  private Context: typeFileTree = defaultFileTree;

  public callContext(): typeFileTree {
    return this.Context;
  }

  constructor(base: typeFileTree, strict: boolean = true) {
    if (FileTreeValidator.FileTreeValidator(base)) {
      if (strict) throw new Error("Invalid FileTree Schema");
    } else {
      this.Context = base;
    }
  }
}
