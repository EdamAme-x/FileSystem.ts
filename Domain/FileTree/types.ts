import type { typeDir } from "../../Primitive/mod.ts";

export type typeFileTree = {
    size: {
        dir: number
        file: number
    },
    content: typeDir.typeDir
}