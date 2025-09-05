import { getBlogPostBySlug } from "../../../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { notFound } from "next/navigation";
import { BlogPost } from "../../../../lib/contentful";

interface Params {
  slug: string;
}

export default async function BlogPostPage({ params }: any) {
  const blog: BlogPost | null = await getBlogPostBySlug(params.slug);

  if (!blog) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="font-serif text-3xl font-light tracking-wide mb-3">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(blog.content) }} />
    </article>
  );
}
