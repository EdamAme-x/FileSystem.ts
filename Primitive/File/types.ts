export type typeFile = {
    readonly type: "file",
    name: string,
    content: string,
    readonly created_at: number,
    updated_at: number  
}

export type typeFileClass = {
    getContext(): typeFile
    getRawContext(): typeFile
    getName(): string
    setName(name: string): void
    getContent(): string
    setContent(content: string): void
    getCreatedAt(): number
}