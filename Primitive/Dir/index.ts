import type { typeDir, typeDirClass, typeDirContent } from "./types.ts";

const type = "dir"

export class Dir implements typeDirClass {
    private Context: typeDir = {
        type,
        name: "",
        content: [],
        created_at: Date.now(),
        updated_at: Date.now()
    }

    constructor(public name: string, public content: typeDirContent) {
        this.Context.name = name
        this.Context.content = content
    }

    getContext(): typeDir {
        return Object.create(this.Context);
    }

    getRawContext(): typeDir {
        return this.Context
    }

    getName(): string {
        return this.getContext().name
    }

    setName(name: string) {
        this.getRawContext().name = name
        this.update()
    }

    getContent(): typeDirContent {
        return this.getContext().content
    }

    setContent(content: typeDirContent) {
        this.getRawContext().content = content
        this.update()
    }

    getCreatedAt(): number {
        return this.getContext().created_at
    }

    private update() {
        this.getRawContext().updated_at = Date.now()
    }
}