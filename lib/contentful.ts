import { createClient, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: Document;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await client.getEntries({ content_type: "techBlogPost" });

  return entries.items
    .map((item: Entry<any>) => {
      const { title, slug, excerpt, date, tags, content } = item.fields;

      if (
        typeof title !== "string" ||
        typeof slug !== "string" ||
        typeof excerpt !== "string" ||
        typeof date !== "string" ||
        !content
      )
        return null;

      return {
        title,
        slug,
        excerpt,
        date,
        tags: Array.isArray(tags)
          ? tags.filter((t): t is string => typeof t === "string")
          : [],
        content: content as Document,
      } as BlogPost;
    })
    .filter(Boolean) as BlogPost[];
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const entries = await client.getEntries({
    content_type: "techBlogPost",
    "fields.slug": slug,
    limit: 1,
  });

  if (!entries.items.length) return null;

  const item = entries.items[0];
  const { title, slug: s, excerpt, date, tags, content } = item.fields;

  if (
    typeof title !== "string" ||
    typeof s !== "string" ||
    typeof excerpt !== "string" ||
    typeof date !== "string" ||
    !content
  )
    return null;

  return {
    title,
    slug: s,
    excerpt,
    date,
    tags: Array.isArray(tags)
      ? tags.filter((t): t is string => typeof t === "string")
      : [],
    content: content as Document,
  };
}

