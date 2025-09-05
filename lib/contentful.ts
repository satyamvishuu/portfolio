import { createClient, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

// Initialize Contentful client using environment variables
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Full BlogPost type (used in [slug] page)
export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  content: Document | null;
}

// Lighter type for blog list
export interface BlogPostPreview {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
}

// Fetch all blog posts with relaxed validation—no null filtering
export async function getBlogPosts(): Promise<BlogPostPreview[]> {
  const entries = await client.getEntries({ content_type: "techBlogPost" });
  console.log('Contentful entries found:', entries.items.length);

  return entries.items.map((item: Entry<any>): BlogPostPreview => {
    const { title, slug, excerpt, date, tags } = item.fields;

    // Provide default fallback values for missing or invalid fields
    return {
      title: typeof title === "string" ? title : "Untitled",
      slug: typeof slug === "string" ? slug : "no-slug",
      excerpt: typeof excerpt === "string" ? excerpt : "",
      date: typeof date === "string" ? date : "",
      tags: Array.isArray(tags)
        ? tags.filter((t): t is string => typeof t === "string")
        : [],
    };
  });
}

function isDocument(value: any): value is Document {
  return value && typeof value === "object" && Array.isArray(value.content);
}

// Fetch a single blog post by slug, returning null if critical info missing
export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
  const entries = await client.getEntries({
    content_type: "techBlogPost",
    "fields.slug": slug,
    limit: 1,
  });

  const item = entries.items[0];
  const { title, slug: s, excerpt, date, tags, content } = item?.fields || {};

  return {
    title: typeof title === "string" ? title : "Untitled",
    slug: typeof s === "string" ? s : "no-slug",
    excerpt: typeof excerpt === "string" ? excerpt : "",
    date: typeof date === "string" ? date : "",
    tags: Array.isArray(tags)
      ? tags.filter((t): t is string => typeof t === "string")
      : [],
    content: isDocument(content) ? content : null, // null only if content isn't a Document
  };
}