import { Cat } from "@/components/pets-table/pets-table";

/**
 * Filtra gatos únicos baseado no ID e nome da raça
 * @param catsArr - Array de gatos para filtrar
 * @returns Array de gatos únicos
 */
export function filterUniqueCats(catsArr: Cat[]): Cat[] {
  const seen = new Set<string>();

  return catsArr.filter((cat) => {
    const breedName = cat.breeds?.[0]?.name || "";
    const key = `${cat.id}-${breedName}`;

    if (seen.has(key) || seen.has(breedName)) return false;

    seen.add(key);
    seen.add(breedName);
    return true;
  });
}
