"use client";

import Image from "next/image";
import Link from "next/link";

// *INFO: internal modules
import { Post } from "@/types";
import { upperFirstLetter } from "@/utils";
import Like from "@/assets/svg/heart-outline.svg";
import Liked from "@/assets/svg/heart-fill.svg";
import BookmarkOutlineIcon from "@/assets/svg/bookmark.svg";
import BookmarkFilledIcon from "@/assets/svg/bookmark-fill.svg";
import { usePostActions } from "@/context/postAction/usePostActions";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const { toggleLike, likedPosts } = usePostActions();
  const { toggleBookmark, bookmarkedPosts } = usePostActions();

  const liked = likedPosts.includes(post.id);
  const bookmarked = bookmarkedPosts.includes(post.id);

  const Icon = liked ? Liked : Like;
  const color = liked ? "text-red-600" : "text-gray-500";

  return (
    <div className=" flex flex-col border rounded-xl overflow-hidden hover:shadow pb-4">
      <Image
        src={post.image}
        alt={post.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />

      <div className="p-4  flex-auto">
        <Link href={`/posts/${post.id}`} className="block hover:underline">
          <h2 className="font-semibold mb-2 line-clamp-2">
            {upperFirstLetter(post.title)}
          </h2>
        </Link>

        <p className="text-sm text-gray-600 line-clamp-3">
          {upperFirstLetter(post.content)}
        </p>
      </div>
      <div className="flex justify-between h-[24px] gap-4 px-4">
        <button
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => toggleLike(post.id)}
        >
          <Icon className={`w-5 h-5 ${color}`} />
          <span>{liked ? "Liked" : "Like"}</span>
        </button>

        <button
          className="cursor-pointer"
          onClick={() => toggleBookmark(post.id)}
        >
          {bookmarked ? (
            <BookmarkFilledIcon className="w-5 h-5 text-amber-300" />
          ) : (
            <BookmarkOutlineIcon className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
    </div>
  );
}
