"use client";

import Image from "next/image";
import Link from "next/link";

// *INFO: internal modules
import { Post } from "@/types";
import { upperFirstLetter } from "@/utils";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleBookmark } from "@/store/features/bookmarkSlice";
import { toggleLike } from "@/store/features/likeSlice";
import Like from "@/assets/svg/heart-outline.svg";
import Liked from "@/assets/svg/heart-fill.svg";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const dispatch = useAppDispatch();

  const bookmarked = useAppSelector((state) =>
    state.bookmark.items.includes(post.id),
  );

  const liked = useAppSelector((state) => state.like.items.includes(post.id));

  const Icon = liked ? Liked : Like;
  const color = liked ? "text-red-600" : "text-gray-500";

  return (
    <div className="border rounded-xl overflow-hidden hover:shadow pb-4">
      <Image
        src={post.image}
        alt={post.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <Link href={`/posts/${post.id}`} className="block">
          <h2 className="font-semibold mb-2 line-clamp-2">
            {upperFirstLetter(post.title)}
          </h2>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-3">
          {upperFirstLetter(post.content)}
        </p>
      </div>
      <div className="flex gap-4 px-4">
        <button
          className="flex items-center gap-1"
          onClick={() => dispatch(toggleLike(post.id))}
        >
          <Icon className={`w-5 h-5 ${color}`} />
          <span>{liked ? "Liked" : "Like"}</span>
        </button>

        <button onClick={() => dispatch(toggleBookmark(post.id))}>
          {bookmarked ? "🔖 Saved" : "📑 Bookmark"}
        </button>
      </div>
    </div>
  );
}
