import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

import { Cat } from "@/components/pets-table/pets-table";

import { ImageWithFallback } from "../image-with-fallback/image-with-fallback";

interface PetCardProps {
  cat: Cat;
}

export function PetCard({ cat }: PetCardProps) {
  return (
    <Link
      href={`/pet/${cat.id}`}
      className="group relative overflow-hidden rounded-xl bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      {/* Imagem */}
      <div className="relative aspect-square overflow-hidden">
        <ImageWithFallback
          src={cat.url ?? ""}
          alt={cat.breeds?.[0]?.name || "Foto do gato"}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Informações */}
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-white">
          {cat.breeds?.[0]?.name || "Gato Adorável"}
        </h3>

        {cat.breeds?.[0]?.origin && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {cat.breeds[0].origin}
            </span>
            {cat.breeds[0]?.country_code && (
              <ReactCountryFlag
                countryCode={cat.breeds[0].country_code}
                svg
                style={{ width: "16px", height: "16px" }}
                title={cat.breeds[0].origin}
              />
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
