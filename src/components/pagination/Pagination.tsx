"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  currentPage: number;
  total: number;
  limit: number;
};

export default function Pagination({ currentPage, total, limit }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(total / limit);

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  }

  function getPageNumbers(): (number | "...")[] {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages: (number | "...")[] = [1];
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);

    return pages;
  }

  return (
    <div className="flex items-center gap-1">
      {getPageNumbers().map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="w-8 h-8 flex items-center justify-center text-sm text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            disabled={currentPage === page}
            onClick={() => goToPage(page as number)}
            className={`w-8 h-8 rounded text-sm font-medium transition-colors
              ${
                currentPage === page
                  ? "bg-gray-900 text-white cursor-default"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
          >
            {page}
          </button>
        ),
      )}
    </div>
  );
}
