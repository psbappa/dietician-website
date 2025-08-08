import Link from "next/link";
import { blogPosts } from "../../data/blog";

export default function BlogListPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Blog</h1>
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <div key={post.slug} className="border-b pb-4">
            <h2 className="text-2xl font-semibold">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-500 text-sm">
              {new Date(post.date).toDateString()}
            </p>
            <p className="mt-2">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm text-blue-500 hover:underline mt-2 inline-block"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
