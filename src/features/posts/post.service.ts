import { Post, PostApiResponse } from "./types";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6",
    {
      next: { revalidate: 60 },
    },
  );

  const data = await res.json();

  return data.slice(0, 10).map(mapToPost);
}

function mapToPost(post: PostApiResponse): Post {
  return {
    id: post.id,
    title: post.title,
    content: post.body,
  };
}
