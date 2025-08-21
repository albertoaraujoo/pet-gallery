"use client";

import { Eye } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

import { Spinner } from "@/components/ui/spinner";
import { useInfiniteCats } from "@/hooks/use-infinite-cats";

import { Cat, Cats } from "../../pets-table";

export function MobileCardsContainer({ cats: initialCats }: Cats) {
  const { cats, loading, hasMore, ref } = useInfiniteCats({
    initialCats: initialCats || [],
  });

  return (
    <div className="flex flex-col gap-4 md:hidden">
      {cats?.map((cat: Cat, index: number) => (
        <article
          className="flex flex-col rounded-md bg-gray-800 p-4"
          key={`${cat.id}-${index}`}
        >
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-400">ID:</span>
                <span className="text-sm font-semibold text-gray-200">
                  #{(index + 1).toString().padStart(3, "0")}
                </span>
              </div>

              {cat.breeds?.[0]?.country_code && (
                <ReactCountryFlag
                  countryCode={cat.breeds[0].country_code}
                  svg
                  style={{ width: "30px", height: "30px" }}
                  title={cat.breeds[0]?.origin}
                />
              )}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-gray-400">Raça:</span>
              <span className="text-sm text-gray-400">
                {cat.breeds?.[0]?.name || "Sem raça definida"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-gray-400">Origem:</span>
              <span className="text-sm text-gray-400">
                {cat.breeds?.[0]?.origin || "Desconhecido"}
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:from-blue-500 hover:to-purple-600 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
              <Eye size={14} />
              Ver mais
            </button>
          </div>
        </article>
      ))}

      {/* Loading Card */}
      {loading && (
        <div className="rounded-md border-b border-gray-800 bg-gray-800 p-4">
          <div className="flex justify-center">
            <Spinner />
          </div>
        </div>
      )}

      {/* Invisible trigger for load more */}
      {hasMore && !loading && <div ref={ref} className="h-1" />}
    </div>
  );
}
