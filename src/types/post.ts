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

export type TReaction = {
  likes: number;
  dislikes: number;
};

export type PostDetail = {
  id: string;
  title: string;
  body: string;
  tags: string[];
  reactions: TReaction;
  views: number;
  userId: number;
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
