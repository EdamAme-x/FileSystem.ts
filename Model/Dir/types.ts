import type { typeFile } from "../mod.ts";

export type typeDirContent = (typeFile.typeFileClass | typeDirClass)[];

export type typeDir = {
  readonly type: "dir";
  name: string;
  content: typeDirContent;
  readonly created_at: number;
  updated_at: number;
};

export type typeDirClass = {
  getContext(): typeDir;
  getRawContext(): typeDir;
  getName(): string;
  setName(name: string): void;
  getContent(): typeDirContent;
  setContent(content: typeDirContent): void;
  getCreatedAt(): number;
};
