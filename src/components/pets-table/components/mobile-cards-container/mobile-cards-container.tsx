"use client";

import ReactCountryFlag from "react-country-flag";

import { Spinner } from "@/components/ui/spinner";
import { useInfiniteCats } from "@/hooks/use-infinite-cats";

import { Cat, Cats } from "../../pets-table";
import { SeeMoreButton } from "../see-more-button/see-more-button";

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

          <div className="mt-4 flex">
            <SeeMoreButton cat={cat} />
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
