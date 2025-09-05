import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getBlogPosts() {
  const entries = await client.getEntries({ content_type: "techBlogPost" });

  return entries.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    date: item.fields.date,
    tags: item.fields.tags || [],
    content: item.fields.content,
  }));
}

export async function getBlogPostBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: "techBlogPost",
    "fields.slug": slug,
    limit: 1,
  });

  if (!entries.items.length) return null;

  const item = entries.items[0];
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    date: item.fields.date,
    tags: item.fields.tags || [],
    content: item.fields.content,
  };
}
