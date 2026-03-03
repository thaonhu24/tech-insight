import Link from "next/link";
import { Post } from "../types";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <li className="group h-full">
      <Link
        href={`/posts/${post.id}`}
        className="flex h-full flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
      >
        <div>
          <h3 className="text-xl font-semibold text-gray-900 transition group-hover:text-blue-600 line-clamp-2">
            {post.title}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
            {post.content}
          </p>
        </div>

        <div className="mt-auto pt-6 text-sm font-medium text-blue-600 flex items-center">
          Read article
          <span className="ml-2 transition group-hover:translate-x-1">→</span>
        </div>
      </Link>
    </li>
  );
}
