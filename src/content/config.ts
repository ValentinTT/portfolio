import { defineCollection } from "astro:content";
import { z } from "zod";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      socialImage: z.string().optional(),
      coverImage: z.string().optional(),
      coverGradient: z.string(),
      lang: z.enum(["en"]).default("en"),
    }),
  }),
};
