import { defineCollection } from 'astro:content'
import { ArticleSchema, AuthorSchema, TagSchema } from 'package-name/schema';

export const collections = {
    blog: defineCollection({
        type: 'content',
        schema: ArticleSchema,
    }),


    author: defineCollection({
        type: 'content',
        schema: AuthorSchema,
    }),

    tag: defineCollection({
        type: 'content',
        schema: TagSchema,
    }),
}
