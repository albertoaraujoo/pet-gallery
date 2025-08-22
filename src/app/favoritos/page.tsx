import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { getFavorites } from "@/actions/favorites";
import { FavoritesGrid } from "@/components/favorites/favorites-grid";
import { Cat } from "@/components/pets-table/pets-table";

async function getFavoritedCats(): Promise<Cat[]> {
  const favoriteIds = await getFavorites();

  if (favoriteIds.length === 0) {
    return [];
  }

  try {
    // Buscar dados dos gatos favoritos
    const promises = favoriteIds.map(async (id) => {
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/${id}`,
        {
          headers: {
            "x-api-key": process.env.CAT_API_KEY || "",
          },
          next: {
            revalidate: 3600,
          },
        }
      );

      if (response.ok) {
        return response.json();
      }
      return null;
    });

    const results = await Promise.all(promises);
    return results.filter(Boolean);
  } catch (error) {
    console.error("Erro ao buscar gatos favoritos:", error);
    return [];
  }
}

export default async function FavoritesPage() {
  const favoritedCats = await getFavoritedCats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background pattern */}

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={20} />
            <span>Voltar à galeria</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-6xl px-6 py-12">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white">
            Meus{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Favoritos
            </span>
          </h1>
          <p className="text-gray-400">
            {favoritedCats.length > 0
              ? `${favoritedCats.length} ${favoritedCats.length === 1 ? "gato favorito" : "gatos favoritos"}`
              : "Seus gatos favoritos aparecerão aqui"}
          </p>
        </div>

        {/* Favorites Grid */}
        <FavoritesGrid initialFavorites={favoritedCats} />
      </main>
    </div>
  );
}
