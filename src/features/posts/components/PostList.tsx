"use client";

import PostCard from "./PostCard";
import { Pagination, SearchInput } from "@/components";
import { PostActionProvider } from "@/context/postAction/PostActionContext";
import { usePosts } from "../hooks/usePosts";
import { Post } from "@/types";

type TProps = {
  initialData: Post[];
  param: {
    totalCount: number;
    page: number;
    pageSize: number;
  };
};

export default function PostList({ initialData, param }: TProps) {
  const { posts, isLoading, isFetching, data } = usePosts(initialData, param);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <SearchInput paramName="q" placeholder="Search product..." />
      </div>

      <PostActionProvider>
        <div className="grid gap-4 md:grid-cols-3">
          {isLoading
            ? Array.from({ length: param.pageSize }).map((_, i) => (
                <div
                  key={i}
                  className="h-40 bg-gray-200 animate-pulse rounded"
                />
              ))
            : posts.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </PostActionProvider>

      {isFetching && !isLoading && (
        <div className="text-center mt-2 text-sm text-gray-500">Loading...</div>
      )}

      <div className="flex gap-2 justify-center mt-8">
        <Pagination
          currentPage={data?.page}
          total={data?.totalCount}
          limit={data?.pageSize}
        />
      </div>
    </div>
  );
}
