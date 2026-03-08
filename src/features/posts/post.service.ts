import { API_BASE_URL, API_IMAGE_URL, POST_LIMIT } from "@/lib/api";
import {
  IPostsParams,
  Post,
  IGetPostsResponse,
  PostApiResponse,
} from "@/types";

function mapToPost(
  post: PostApiResponse,
  photos: { download_url: string }[],
): Post {
  return {
    id: post.id,
    title: post.title,
    content: post.body,
    image: photos[Math.floor(Math.random() * photos.length)]?.download_url,
  };
}

export async function getPosts(
  params: IPostsParams,
): Promise<IGetPostsResponse | undefined> {
  try {
    const { query = "", page = 1, limit = POST_LIMIT } = params;

    const skip = (page - 1) * limit;

    const [postRes, photoRes] = await Promise.all([
      fetch(
        `${API_BASE_URL}/posts/search?q=${query}&limit=${limit}&skip=${skip}`,
        {
          cache: "no-store",
        },
      ),
      fetch(`${API_IMAGE_URL}/?_limit=${POST_LIMIT}`, {
        next: { revalidate: 60 },
      }),
    ]);

    if (!postRes.ok) {
      throw new Error(`Post API failed: ${postRes.status}`);
    }

    if (!photoRes.ok) {
      throw new Error(`Photo API failed: ${photoRes.status}`);
    }

    const postJson = await postRes.json();
    const photos = await photoRes.json();

    const posts: Post[] = postJson.posts
      .slice(0, POST_LIMIT)
      .map((post: PostApiResponse) => mapToPost(post, photos));

    return {
      data: posts,
      totalCount: postJson.total,
      page,
      pageSize: limit,
    };
  } catch (error) {
    console.log("Error fetching posts:", error);
    return undefined;
  }
}

export async function getPostById(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts/${id}`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch post");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching post by ID:", error);
    throw error;
  }
}
