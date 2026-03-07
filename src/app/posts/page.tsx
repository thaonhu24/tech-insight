import { PostList } from "@/features/posts/components";
import { getPosts } from "@/features/posts/post.service";
import { IPaginationParams } from "@/types";

type Props = {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const { q, page: pageParam } = await searchParams;

  const page = Number(pageParam) || 1;
  const query = q || "";
  const response = await getPosts({ query, page, limit: 6 });
  const param: IPaginationParams = {
    totalCount: response?.totalCount ?? 0,
    page: response?.page ?? 1,
    pageSize: response?.pageSize ?? 6,
  };

  return <PostList posts={response?.data || []} param={param} />;
}
