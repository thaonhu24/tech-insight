import Image from "next/image";
import Link from "next/link";

// *INFO: internal modules
import { Post } from "@/types";
import { upperFirstLetter } from "@/utils";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.id}`} className="block">
      <div className="border rounded-xl overflow-hidden hover:shadow">
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          <h2 className="font-semibold mb-2 line-clamp-2">
            {upperFirstLetter(post.title)}
          </h2>

          <p className="text-sm text-gray-600 line-clamp-3">
            {upperFirstLetter(post.content)}
          </p>
        </div>
      </div>
    </Link>
  );
}
