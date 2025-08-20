import { Eye } from "lucide-react";

export function MobileCardsContainer({ cats }: Cats) {
  return (
    <div className="block md:hidden">
      {cats.map((cat: Cat, index: number) => (
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
                <span className="text-xs font-medium text-gray-400">Raça:</span>
                <span className="text-sm text-gray-400">
                  {cat.breeds[0]?.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-400">
                  Origem:
                </span>
                <span className="text-sm text-gray-400">
                  {cat.breeds[0]?.origin}
                </span>
              </div>
            </div>
            <button
              // onClick={() => handleViewMore(cat.id)}
              className="ml-4 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 px-3 py-2 text-sm font-semibold text-gray-900 transition-colors hover:from-blue-500 hover:to-purple-600 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              <Eye size={14} />
              Ver mais
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
