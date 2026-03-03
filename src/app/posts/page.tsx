import { getPosts } from "@/features/posts/post.service";
import { BlogList } from "@/features/posts/components";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Tech Insights
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Thoughts, tutorials and ideas about modern web development.
          </p>
        </div>

        <BlogList posts={posts} />
      </div>
    </main>
  );
}
