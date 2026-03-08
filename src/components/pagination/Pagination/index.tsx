"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getPageNumbers } from "./method";

type Props = {
  currentPage: number;
  total: number;
  limit: number;
};

export default function Pagination({ currentPage, total, limit }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(total / limit);

  const pageNumbers = getPageNumbers({ currentPage, totalPages });

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`);
  }

  return (
    <div className="flex items-center gap-1">
      {pageNumbers.map((page, i) =>
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
