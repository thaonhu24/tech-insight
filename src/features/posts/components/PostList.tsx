import { Post } from "../types";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function BlogList({ posts }: Props) {
  return (
    <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
