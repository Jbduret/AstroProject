import { defineCollection, z } from 'astro:content';
import { file, glob } from "astro/loaders";

const project = defineCollection({
    loader: file('src/data/projects.json'),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string(),
        slug: z.string(),
        liveSiteURL: z.string(),
        githubURL: z.string()
    })
});

export const collections = { project };