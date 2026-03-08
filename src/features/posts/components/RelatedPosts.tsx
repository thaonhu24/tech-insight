import { Post } from "@/types";
import Link from "next/link";
import { getPosts } from "../post.service";

type TProps = {
  currentId: string;
};

export default async function RelatedPosts({ currentId }: TProps) {
  const response = await getPosts({
    limit: 3,
  });
  const posts = response?.data || [];

  return (
    <div className="mt-14">
      <h3 className="text-xl font-semibold mb-4">Related posts</h3>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post: Post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="border rounded-lg p-3 hover:shadow"
          >
            <h4 className="font-medium line-clamp-2">{post.title}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
