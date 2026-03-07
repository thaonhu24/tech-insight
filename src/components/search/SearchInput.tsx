"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  paramName?: string;
  placeholder?: string;
};

export default function SearchInput({
  paramName = "q",
  placeholder = "Search...",
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);

    params.set(paramName, e.target.value);
    params.set("page", "1");

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-2 pr-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
        onChange={handleChange}
      />

      <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
    </div>
  );
}
