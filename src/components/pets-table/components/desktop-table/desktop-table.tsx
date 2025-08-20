import { Eye } from "lucide-react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

import { Cat, Cats } from "../../pets-table";

export function DesktopTable({ cats }: Cats) {
  return (
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
            <td className="px-6 py-2 text-sm font-medium text-gray-200 hover:border-gray-700">
              #{cat.id.toString().padStart(3, "0")}
            </td>
            <td className="px-6 py-2 text-sm text-gray-400">
              {cat.breeds[0]?.name}
            </td>
            <td className="flex items-center gap-2 px-6 py-2 text-sm text-gray-400">
              {cat.breeds[0]?.origin}{" "}
              <ReactCountryFlag
                countryCode={cat.breeds[0]?.country_code || ""}
                svg
                style={{ width: "16px", height: "16px" }}
                title={cat.breeds[0]?.origin}
              />
            </td>
            <td className="px-6 py-2 text-center">
              <button
                //   onClick={() => handleViewMore(cat.id)}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:from-blue-500 hover:to-purple-600 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                <Eye size={16} />
                Ver mais
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
