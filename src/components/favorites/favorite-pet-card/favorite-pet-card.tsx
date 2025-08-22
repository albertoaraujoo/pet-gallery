"use client";

import { Cat } from "@/components/pets-table/pets-table";
import { PetCard } from "@/components/shared/pet-card/pet-card";

interface FavoritePetCardProps {
  cat: Cat;
  onRemove: (petId: string) => void;
}

export function FavoritePetCard({ cat, onRemove }: FavoritePetCardProps) {
  return (
    <div className="group relative">
      <PetCard cat={cat} />

      {/* Botão remover dos favoritos */}
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove(cat.id.toString());
        }}
        className="absolute top-3 right-3 rounded-full bg-red-600 p-2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-red-700"
        title="Remover dos favoritos"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
