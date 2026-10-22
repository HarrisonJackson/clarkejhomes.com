import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// One markdown file per book in src/content/books/.
const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    // Higher numbers show first.
    order: z.number().default(0),
    status: z.string().optional(), // e.g. "Coming 2027", "Out now"
    cover: z.string().optional(), // path in /public, e.g. "/covers/my-book.jpg"
    buyUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { books };
