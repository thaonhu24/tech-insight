type TProps = {
  reactions: {
    likes: number;
    dislikes: number;
  };
};

export default function PostReactions({ reactions }: TProps) {
  return (
    <div className="border-t mt-10 pt-6 flex gap-6">
      <button className="flex items-center gap-2 hover:text-green-600">
        👍 {reactions.likes}
      </button>

      <button className="flex items-center gap-2 hover:text-red-500">
        👎 {reactions.dislikes}
      </button>
    </div>
  );
}
