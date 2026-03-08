import { PostDetail } from "@/types";

type TProps = {
  post: PostDetail;
};

export default function PostMeta({ post }: TProps) {
  return (
    <div className="flex gap-6 text-sm text-gray-500 mb-4">
      <span>👤 User #{post.userId}</span>

      <span>👁 {post.views} views</span>

      <span className="text-green-600">👍 {post.reactions.likes}</span>

      <span className="text-red-500">👎 {post.reactions.dislikes}</span>
    </div>
  );
}
