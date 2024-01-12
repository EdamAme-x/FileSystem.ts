import type { typeFile } from "../File%20copy/types.ts";

export type typeDirContent = (typeFile | typeDir)[]

export type typeDir = {
    readonly type: "dir",
    name: string,
    content: typeDirContent,
    readonly created_at: number,
    updated_at: number  
}

export type typeDirClass = {
    getContext(): typeDir
    getRawContext(): typeDir
    getName(): string
    setName(name: string): void
    getContent(): typeDirContent
    setContent(content: typeDirContent): void
    getCreatedAt(): number
}