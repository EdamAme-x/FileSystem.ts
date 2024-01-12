import type { typeDir } from "../mod.ts";

export type typeFileTree = {
  content: typeDir.typeDirClass;
};

export type typeFileTreeClass = {
  callContext(): typeFileTree;
};
