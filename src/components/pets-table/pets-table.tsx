import { fetchCats } from "@/actions/fetch-cats";

import { DesktopTable } from "./components/desktop-table/desktop-table";
import { MobileCardsContainer } from "./components/mobile-cards-container/mobile-cards-container";

export interface Cat {
  id: number;
  breed: string;
  origin: string;
}

export interface Cats {
  cats: Cat[];
}

export async function PetsTable() {
  const cats = await fetchCats();
  console.log(cats);

  return (
    <div className="w-full space-y-6 overflow-x-auto rounded-lg border border-gray-800 bg-gray-900 p-6 shadow-sm">
      {/* Desktop Table */}

      <DesktopTable cats={cats} />

      {/* Mobile Cards */}
      <MobileCardsContainer cats={cats} />
    </div>
  );
}
