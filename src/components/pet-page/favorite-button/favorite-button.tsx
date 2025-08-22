"use client";

import { Heart } from "lucide-react";
import { useState, useTransition } from "react";

import { toggleFavorite } from "@/actions/favorites";

interface FavoriteButtonProps {
  petId: string;
  initialIsFavorite?: boolean;
}

export function FavoriteButton({
  petId,
  initialIsFavorite = false,
}: FavoriteButtonProps) {
  const [isFav, setIsFav] = useState(initialIsFavorite);
  const [isPending, startTransition] = useTransition();

  const handleToggleFavorite = () => {
    startTransition(async () => {
      const result = await toggleFavorite(petId);

      if (result.success) {
        setIsFav((prev) => !prev);
      }
    });
  };

  return (
    <button
      onClick={handleToggleFavorite}
      disabled={isPending}
      className={`w-full rounded-lg px-6 py-3 font-semibold transition-all ${
        isFav
          ? "bg-green-600 text-white hover:bg-green-700"
          : "bg-blue-600 text-white hover:bg-blue-700"
      } ${isPending ? "cursor-not-allowed opacity-70" : ""} `}
    >
      <div className="flex items-center justify-center gap-2">
        <Heart className={`h-4 w-4 ${isFav ? "fill-current" : ""}`} />
        {isPending
          ? "Carregando..."
          : isFav
            ? "Favoritado!"
            : "Favoritar este gato"}
      </div>
    </button>
  );
}
