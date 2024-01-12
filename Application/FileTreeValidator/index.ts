import type { typeFileTree } from "../../Model/mod.ts";
import { z } from "https://deno.land/x/zod@v3.21.4/mod.ts";

const FileSchema = z.object({
  type: z.literal("file"),
  name: z.string(),
  content: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
});

const DirSchema = z.object({
  type: z.literal("dir"),
  name: z.string(),
  content: z.any(),
  created_at: z.number(),
  updated_at: z.number(),
});

export default {
  FileTreeValidator: (fileTree: typeFileTree.typeFileTree): boolean => {
    if (!fileTree) return false;

    if (!FileSchema.safeParse(fileTree.content).success) return false;
    if (!DirSchema.safeParse(fileTree.content).success) return false;

    return true;
  },
};
