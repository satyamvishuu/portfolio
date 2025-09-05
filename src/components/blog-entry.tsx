import Link from "next/link";

interface BlogEntryProps {
  blog: {
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    tags: string[];
  };
}

export function BlogEntry({ blog }: BlogEntryProps) {
  return (
    <div className="space-y-2">
      <Link
        href={`/blog/${blog.slug}`}
        className="text-base mb-1 font-serif hover:underline"
      >
        {blog.title}
      </Link>
      <p className="text-sm text-gray-500">{blog.date}</p>
      <p className="text-sm text-zinc-500 mt-2 italic">{blog.excerpt}</p>
      <div className="flex gap-2 text-xs text-gray-500">
        {blog.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 bg-gray-100 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
