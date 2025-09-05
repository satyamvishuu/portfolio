import Link from "next/link";
import { BlogPostPreview } from "../../lib/contentful";

interface BlogEntryProps {
  blog: BlogPostPreview;
}

export function BlogEntry({ blog }: BlogEntryProps) {
  return (
    <article className="border-b border-gray-200 pb-6">
      <h2 className="text-2xl font-semibold">
        <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
      </h2>
      <p className="text-sm text-gray-500">{blog.date}</p>
      <p className="mt-2 text-gray-700">{blog.excerpt}</p>
      {blog.tags.length > 0 && (
        <div className="mt-2 space-x-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
