export type PostApiResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type Post = {
  id: number;
  title: string;
  content: string;
  image: string;
};

export interface IPostsParams {
  query?: string;
  page?: number;
  limit?: number;
}

export interface IGetPostsResponse {
  data: Post[];
  totalCount: number;
  page: number;
  pageSize: number;
}

export interface IPaginationParams {
  totalCount: number;
  page: number;
  pageSize: number;
}
