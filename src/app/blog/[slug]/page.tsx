import { getBlogPostBySlug } from "../../../../lib/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { notFound } from "next/navigation";
import { BLOCKS, type Document } from "@contentful/rich-text-types";

export default async function BlogPostPage(props: any) {
  const params = await props.params;
  console.log("Received slug:", params.slug);

  const blog = await getBlogPostBySlug(params.slug);
  console.log("Fetched blog post:", blog);

  if (!blog) return notFound();

  const fallbackDocument: Document = {
    nodeType: BLOCKS.DOCUMENT,
    data: {},
    content: [],
  };

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="font-serif text-3xl font-light tracking-wide mb-3">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(blog.content ?? fallbackDocument),
        }}
      />
    </article>
  );
}
