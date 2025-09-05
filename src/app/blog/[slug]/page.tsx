import { getBlogPostBySlug } from "../../../../lib/contentful";
// import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
// import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = await getBlogPostBySlug(params.slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="font-serif text-3xl font-light mb-4">{blog.title}</h1>
      <p className="text-gray-500 mb-2">{blog.date}</p>
      <div>{blog.excerpt}</div>
      {/* Render blog.content with @contentful/rich-text-react-renderer */}
    </main>
  );
}