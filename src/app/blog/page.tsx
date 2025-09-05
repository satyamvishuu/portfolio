import { getBlogPosts } from "../../../lib/contentful";
import { BlogEntry } from "@/components/blog-entry";

export default async function BlogPage() {
  const blogs = await getBlogPosts();
  console.log('Blogs to render:', blogs.length);

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className="font-serif text-3xl font-light tracking-wide mb-8">
        WELCOME TO MY BLOGS
      </h1>
      <div className="space-y-12">
        {blogs.map((blog, i) => (
          <BlogEntry key={i} blog={blog} />
        ))}
      </div>
    </main>
  );
}
