"use client";

import { Cat, Eye } from "lucide-react";

interface Cat {
  id: number;
  breed: string;
  origin: string;
}

const catData: Cat[] = [
  { id: 1, breed: "Siamês", origin: "Tailândia" },
  { id: 2, breed: "Persa", origin: "Irã" },
  { id: 3, breed: "Maine Coon", origin: "Estados Unidos" },
  { id: 4, breed: "British Shorthair", origin: "Reino Unido" },
  { id: 5, breed: "Ragdoll", origin: "Estados Unidos" },
  { id: 6, breed: "Bengala", origin: "Estados Unidos" },
  { id: 7, breed: "Sphynx", origin: "Canadá" },
  { id: 8, breed: "Scottish Fold", origin: "Escócia" },
  { id: 9, breed: "Russian Blue", origin: "Rússia" },
  { id: 10, breed: "Abissínio", origin: "Etiópia" },
  { id: 11, breed: "Munchkin", origin: "Estados Unidos" },
  { id: 12, breed: "Birmanês", origin: "Mianmar" },
];

export function PetsTable() {
  const handleViewMore = (catId: number) => {
    console.log(`Ver mais detalhes do gato ID: ${catId}`);
    // Aqui você pode implementar a lógica para mostrar mais detalhes
  };

  return (
    <div className="w-full space-y-6 overflow-x-auto rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm">
      {/* Desktop Table */}

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <h2 className="gradient-text text-3xl font-semibold">Cats</h2>
          <Cat size={30} />
        </div>

        <p className="text-sm text-gray-100">
          Explore nossa coleção de gatos de várias raças e origens.
        </p>
      </div>

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
          {catData.map((cat, index) => (
            <tr
              key={cat.id}
              className={`transition-colors ${
                index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
              }`}
            >
              <td className="px-6 py-2 text-sm font-medium text-gray-200 hover:border-gray-700">
                #{cat.id.toString().padStart(3, "0")}
              </td>
              <td className="px-6 py-2 text-sm text-gray-400">{cat.breed}</td>
              <td className="px-6 py-2 text-sm text-gray-400">{cat.origin}</td>
              <td className="px-6 py-2 text-center">
                <button
                  onClick={() => handleViewMore(cat.id)}
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

      {/* Mobile Cards */}
      <div className="block md:hidden">
        {catData.map((cat, index) => (
          <div
            key={cat.id}
            className={`border-b border-gray-800 p-4 ${
              index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-400">ID:</span>
                  <span className="text-sm font-semibold text-gray-200">
                    #{cat.id.toString().padStart(3, "0")}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-400">
                    Raça:
                  </span>
                  <span className="text-sm text-gray-400">{cat.breed}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-400">
                    Origem:
                  </span>
                  <span className="text-sm text-gray-400">{cat.origin}</span>
                </div>
              </div>
              <button
                onClick={() => handleViewMore(cat.id)}
                className="ml-4 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:from-blue-500 hover:to-purple-600 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                <Eye size={14} />
                Ver mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
