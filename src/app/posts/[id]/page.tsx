import Image from "next/image";

// *INFO: internal modules
import { getPostById } from "@/features/posts/post.service";
import {
  PostMeta,
  PostTags,
  PostReactions,
  RelatedPosts,
} from "@/features/posts/components";

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(id);

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <Image
        src={`https://picsum.photos/seed/${post.id}/900/450`}
        alt={post.title}
        width={900}
        height={450}
        className="rounded-xl mb-8 w-full object-cover"
      />

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <PostMeta post={post} />

      <PostTags tags={post.tags} />

      <div className="prose max-w-none mt-6">
        <p>{post.body}</p>
      </div>

      <PostReactions reactions={post.reactions} />

      <RelatedPosts currentId={post.id} />
    </article>
  );
}
