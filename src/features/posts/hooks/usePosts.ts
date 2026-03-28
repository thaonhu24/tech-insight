"use client";

import { useQuery } from "react-query";
import { useSearchParams } from "next/navigation";

// *INFO: internal modules
import { getPosts } from "@/features/posts/post.service";
import { IPaginationParams, Post } from "@/types";

export function usePosts(initialData: Post[], param: IPaginationParams) {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || param.page;
  const query = searchParams.get("q") || "";

  const queryResult = useQuery({
    queryKey: ["posts", page, query],
    queryFn: async () => {
      const res = await getPosts({ page, query, limit: param.pageSize });
      return res;
    },
    initialData: {
      data: initialData,
      ...param,
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    data: queryResult.data,
    isFetching: queryResult.isFetching,
    isLoading: queryResult.isLoading,
    posts: queryResult.data?.data || [],
    page,
    query,
  };
}
