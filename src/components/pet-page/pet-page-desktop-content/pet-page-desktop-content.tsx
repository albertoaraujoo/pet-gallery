import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import { Cat } from "@/components/pets-table/pets-table";
import { translateText } from "@/utils/translate";

interface PetPageDesktopContentProps {
  cat: Cat;
}

export async function PetPageDesktopContent({
  cat,
}: PetPageDesktopContentProps) {
  const temperament =
    cat.breeds?.[0]?.temperament?.split(",")[0] ||
    "Um companheiro felino especial";
  const translatedTemperament = await translateText(temperament);

  return (
    <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
      {/* Coluna da imagem */}
      <div className="flex justify-center">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={cat.url ?? ""}
            alt={cat.breeds?.[0]?.name || "Foto do gato"}
            width={528}
            height={313}
            quality={100}
            className="h-auto max-h-[313px] w-full min-w-[528px] rounded-2xl object-cover transition-transform hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* Coluna das informações - altura fixa igual à imagem */}
      <div className="flex h-[313px] flex-col justify-between rounded-lg bg-gray-900/80 p-6 backdrop-blur-sm">
        {/* Cabeçalho */}
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
              ID: {cat.id}
            </span>
            {cat.breeds?.[0]?.origin && (
              <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1">
                <span className="text-sm text-gray-300">
                  {cat.breeds[0].origin}
                </span>
                {cat.breeds[0]?.country_code && (
                  <ReactCountryFlag
                    countryCode={cat.breeds[0].country_code}
                    svg
                    style={{ width: "16px", height: "16px" }}
                    title={cat.breeds[0]?.origin}
                  />
                )}
              </div>
            )}
          </div>
          <h1 className="text-3xl font-bold text-white">
            {cat.breeds?.[0]?.name || "Gato Adorável"}
          </h1>
          <p className="mt-2 text-gray-300">{translatedTemperament}</p>
        </div>

        {/* Características principais em grid compacto */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-3">
            {cat.breeds?.[0]?.life_span && (
              <div className="rounded-lg bg-gray-800 p-3 text-center">
                <h3 className="mb-1 text-sm font-semibold text-gray-200">
                  Vida
                </h3>
                <p className="text-xs text-gray-400">
                  {cat.breeds[0].life_span} anos
                </p>
              </div>
            )}
            {cat.breeds?.[0]?.weight?.metric && (
              <div className="rounded-lg bg-gray-800 p-3 text-center">
                <h3 className="mb-1 text-sm font-semibold text-gray-200">
                  Peso
                </h3>
                <p className="text-xs text-gray-400">
                  {cat.breeds[0].weight.metric} kg
                </p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-600 hover:to-purple-700">
              Favoritar este gato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
