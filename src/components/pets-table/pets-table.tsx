import { fetchCats } from "@/actions/fetch-cats";

import { DesktopTable } from "./components/desktop-table/desktop-table";
import { MobileCardsContainer } from "./components/mobile-cards-container/mobile-cards-container";

export interface Cat {
  id: number;
  url?: string;
  breeds: {
    name: string;
    origin: string;
    country_code: string;
    description?: string;
    temperament?: string;
    life_span?: string;
    weight?: {
      imperial?: string;
      metric?: string;
    };
  }[];
}

export interface Cats {
  cats: Cat[];
}

export async function PetsTable() {
  const cats = await fetchCats();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Galeria de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gatos
            </span>
          </h2>
          <p className="text-gray-400">
            Explore nossa coleção crescente de diferentes raças felinas
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full space-y-6 overflow-x-auto rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-lg">
          {/* Desktop Table */}
          <DesktopTable cats={cats} />

          {/* Mobile Cards */}
          <MobileCardsContainer cats={cats} />
        </div>
      </div>
    </section>
  );
}
