"use client";

import { useState, useTransition } from "react";

import { toggleFavorite } from "@/actions/favorites";
import { Cat } from "@/components/pets-table/pets-table";

import { FavoritePetCard } from "./favorite-pet-card/favorite-pet-card";

interface FavoritesGridProps {
  initialFavorites: Cat[];
}

export function FavoritesGrid({ initialFavorites }: FavoritesGridProps) {
  const [favorites, setFavorites] = useState<Cat[]>(initialFavorites);
  const [isPending, startTransition] = useTransition();

  const handleRemoveFavorite = (petId: string) => {
    startTransition(async () => {
      const result = await toggleFavorite(petId);

      if (result.success) {
        // Remove o pet da lista local
        setFavorites((prev) =>
          prev.filter((cat) => cat.id.toString() !== petId)
        );
      }
    });
  };

  if (favorites.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
        <div className="mb-4 text-6xl">🐱</div>
        <h2 className="mb-2 text-2xl font-bold text-white">
          Nenhum pet favoritado ainda
        </h2>
        <p className="text-gray-400">
          Explore nossa galeria e favorite seus gatos preferidos!
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${isPending ? "opacity-70" : ""}`}
    >
      {favorites.map((cat) => (
        <FavoritePetCard
          key={cat.id}
          cat={cat}
          onRemove={handleRemoveFavorite}
        />
      ))}
    </div>
  );
}
