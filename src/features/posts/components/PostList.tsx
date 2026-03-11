"use client";

import { IPaginationParams, Post } from "@/types";
import PostCard from "./PostCard";
import { Pagination, SearchInput } from "@/components";
import { PostActionProvider } from "@/context/postAction/PostActionContext";

interface Props {
  posts: Post[];
  param: IPaginationParams;
}

export default function PostList({ posts, param }: Props) {
  const { totalCount, page, pageSize } = param;
  return (
    <div>
      <div className="flex justify-end mb-6">
        <SearchInput paramName="search" placeholder="Search product..." />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <PostActionProvider>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostActionProvider>
      </div>

      <div className="flex gap-2 justify-center mt-8">
        <Pagination currentPage={page} total={totalCount} limit={pageSize} />
      </div>
    </div>
  );
}
