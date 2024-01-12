import type { typeFile, typeFileClass } from "./types.ts";

const type = "file";

export class File implements typeFileClass {
  private Context: typeFile = {
    type,
    name: "",
    content: "",
    created_at: Date.now(),
    updated_at: Date.now(),
  };

  constructor(public name: string, public content: string) {
    this.Context.name = name;
    this.Context.content = content;
  }

  getContext(): typeFile {
    return Object.create(this.Context);
  }

  getRawContext(): typeFile {
    return this.Context;
  }

  getName(): string {
    return this.getContext().name;
  }

  setName(name: string) {
    this.getRawContext().name = name;
    this.update();
  }

  getContent(): string {
    return this.getContext().content;
  }

  setContent(content: string) {
    this.getRawContext().content = content;
    this.update();
  }

  getCreatedAt(): number {
    return this.getContext().created_at;
  }

  private update() {
    this.getRawContext().updated_at = Date.now();
  }
}
