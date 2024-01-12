import type { typeFileTree } from "./types.ts";
import { Dir } from "../mod.ts";

export const defaultFileTree: typeFileTree = {
  content: new Dir.Dir("root", []),
};
