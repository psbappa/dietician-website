import { notFound } from "next/navigation";
import { blogPosts } from "../../../data/blog";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link href="/blog" className="text-blue-500 hover:underline">
        ← Back to Blog
      </Link>
      <article className="prose lg:prose-xl mt-6">
        <h1>{post.title}</h1>
        <p className="text-gray-500 text-sm">{new Date(post.date).toDateString()}</p>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}
