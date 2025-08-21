import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

import { Cat } from "@/components/pets-table/pets-table";
import { translateText } from "@/utils/translate";

interface PetPageMobileContentProps {
  cat: Cat;
}

export async function PetPageMobileContent({ cat }: PetPageMobileContentProps) {
  const temperament =
    cat.breeds?.[0]?.temperament?.split(",")[0] ||
    "Um companheiro felino especial";
  const translatedTemperament = await translateText(temperament);

  return (
    <div className="flex flex-col items-center lg:hidden">
      <div className="rounded-lg bg-gray-900 shadow-2xl">
        {/* Imagem principal com overlay de favorito */}
        <div className="relative mb-6 flex flex-col items-center overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={cat.url ?? ""}
            alt={cat.breeds?.[0]?.name || "Foto do gato"}
            width={528}
            height={313}
            quality={100}
            className="h-auto w-full rounded-2xl object-cover transition-transform hover:scale-105"
            priority
          />
        </div>

        {/* Cabeçalho com ID e origem */}
        <div className="mb-6 text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-4">
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white">
              ID: {cat.id}
            </span>
            {cat.breeds?.[0]?.origin && (
              <div className="flex items-center gap-2 rounded-full bg-gray-800 px-4 py-2">
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
          <h1 className="text-4xl font-bold text-white">
            {cat.breeds?.[0]?.name || "Gato Adorável"}
          </h1>
          <p className="mt-2 text-xl text-gray-300">{translatedTemperament}</p>
        </div>

        {/* Características em grid */}
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {cat.breeds?.[0]?.life_span && (
            <div className="rounded-lg bg-gray-800 p-4 text-center">
              <h3 className="mb-2 font-semibold text-gray-200">
                Expectativa de Vida
              </h3>
              <p className="text-sm text-gray-400">
                {cat.breeds[0].life_span} anos
              </p>
            </div>
          )}
          {cat.breeds?.[0]?.weight?.metric && (
            <div className="rounded-lg bg-gray-800 p-4 text-center">
              <h3 className="mb-2 font-semibold text-gray-200">Peso</h3>
              <p className="text-sm text-gray-400">
                {cat.breeds[0].weight.metric} kg
              </p>
            </div>
          )}
          {cat.breeds?.[0]?.origin && (
            <div className="rounded-lg bg-gray-800 p-4 text-center">
              <h3 className="mb-2 font-semibold text-gray-200">Origem</h3>
              <p className="text-sm text-gray-400">{cat.breeds[0].origin}</p>
            </div>
          )}
          {cat.breeds?.[0]?.temperament && (
            <div className="rounded-lg bg-gray-800 p-4 text-center">
              <h3 className="mb-2 font-semibold text-gray-200">Temperamento</h3>
              <p className="text-sm text-gray-400">
                {cat.breeds[0].temperament.split(",").slice(0, 2).join(", ")}
              </p>
            </div>
          )}
        </div>

        {/* Botões de ação mobile */}
        <div className="space-y-4">
          <button className="w-full rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-semibold text-white transition-all hover:from-blue-600 hover:to-purple-700">
            Favoritar este gato
          </button>
        </div>
      </div>
    </div>
  );
}
