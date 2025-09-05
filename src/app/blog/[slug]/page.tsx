import { getBlogPostBySlug } from "../../../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";
import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  date: string;
  content: Document;
}

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const rawBlog = await getBlogPostBySlug(params.slug);

  // Narrow the type safely
  if (
    !rawBlog ||
    typeof rawBlog.title !== "string" ||
    typeof rawBlog.date !== "string" ||
    !rawBlog.content
  ) {
    return notFound();
  }

  // Now we can safely cast
  const blog: BlogPost = {
    title: rawBlog.title,
    date: rawBlog.date,
    content: rawBlog.content as Document,
  };

  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="font-serif text-3xl font-light tracking-wide mb-3">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>
      <div
        dangerouslySetInnerHTML={{ __html: documentToHtmlString(blog.content) }}
      />
    </article>
  );
}
