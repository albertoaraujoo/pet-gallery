"use client";

import ReactCountryFlag from "react-country-flag";

import { Spinner } from "@/components/ui/spinner";
import { useInfiniteCats } from "@/hooks/use-infinite-cats";

import { Cat, Cats } from "../../pets-table";
import { SeeMoreButton } from "../see-more-button/see-more-button";

export function DesktopTable({ cats: initialCats }: Cats) {
  const { cats, loading, hasMore, ref } = useInfiniteCats({
    initialCats: initialCats || [],
  });

  return (
    <>
      <table className="hidden w-full table-auto md:table">
        <thead className="border-b border-gray-800">
          <tr className="bg-gray-900">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">
              ID
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">
              Raça
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200">
              Origem
            </th>
            <th className="px-6 py-4 text-center text-sm font-semibold text-gray-200">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {cats?.map((cat: Cat, index: number) => (
            <tr
              key={cat.id}
              className={`transition-colors ${
                index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
              }`}
            >
              <td className="px-6 py-2 text-sm font-medium text-gray-200">
                #{(index + 1).toString().padStart(3, "0")}
              </td>
              <td className="px-6 py-2 text-sm text-gray-400">
                {cat.breeds?.[0]?.name || "Sem raça definida"}
              </td>
              <td className="flex min-h-[53px] items-center gap-2 px-6 py-2 text-sm text-gray-400">
                {cat.breeds?.[0]?.origin || "Desconhecido"}{" "}
                {cat.breeds?.[0]?.country_code && (
                  <ReactCountryFlag
                    countryCode={cat.breeds[0].country_code}
                    svg
                    style={{ width: "16px", height: "16px" }}
                    title={cat.breeds[0]?.origin}
                  />
                )}
              </td>
              <td className="px-6 py-2 text-center">
                <SeeMoreButton cat={cat} />
              </td>
            </tr>
          ))}
          {/* Loading row */}
          {loading && (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center">
                <Spinner />
              </td>
            </tr>
          )}
          {/* Invisible row to trigger load more */}
          {hasMore && !loading && (
            <tr ref={ref}>
              <td colSpan={4} className="h-1"></td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
