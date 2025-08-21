import { Cat } from "@/components/pets-table/pets-table";
import { translateText } from "@/utils/translate";

interface CatDescriptionProps {
  cat: Cat;
}

export async function CatDescription({ cat }: CatDescriptionProps) {
  const translatedDescription = cat.breeds?.[0]?.description
    ? await translateText(cat.breeds[0].description)
    : null;
  return (
    <div className="mt-12">
      {/* Descrição */}
      {translatedDescription && (
        <div className="mb-8 rounded-lg bg-gray-900/80 p-6 backdrop-blur-sm">
          <h2 className="mb-4 text-center text-2xl font-bold text-white">
            Sobre a raça
          </h2>
          <p className="text-center leading-relaxed text-gray-300">
            {translatedDescription}
          </p>
        </div>
      )}
    </div>
  );
}
