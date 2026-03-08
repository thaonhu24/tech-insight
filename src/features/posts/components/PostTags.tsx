type TProps = {
  tags: string[];
};

export default function PostTags({ tags }: TProps) {
  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {tags.map((tag) => (
        <span
          key={tag}
          className="bg-gray-100 hover:bg-gray-200 transition px-3 py-1 text-xs rounded-full"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}
