import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { getBlogPostBySlug } from "../../../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { notFound } from "next/navigation";
import { Document } from "@contentful/rich-text-types";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = await getBlogPostBySlug(params.slug);

  if (!blog) return notFound();

  return (
    <article className="max-w-3xl mx-auto py-12">
      <h1 className="font-serif text-3xl font-light tracking-wide mb-3">{blog.title as String}</h1>
      <p className="text-gray-500 mb-6">{blog.date as String}</p>
      <div>
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(blog.content as any) }} />
      </div>
    </article>
  );
}
