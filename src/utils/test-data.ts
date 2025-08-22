// Teste simples para verificar fallback de imagens
import { Cat } from "@/components/pets-table/pets-table";

export const testCatWithBrokenImage: Cat = {
  id: 99999,
  url: "https://invalid-url-that-does-not-exist.com/broken-image.jpg",
  breeds: [
    {
      name: "Gato de Teste",
      origin: "Test Land",
      country_code: "US",
      temperament: "Playful, Friendly",
      life_span: "12 - 15",
      weight: { metric: "4 - 6" },
      description: "Um gato de teste para verificar o fallback de imagens",
    },
  ],
};

export const testCatWithNoImage: Cat = {
  id: 99998,
  url: "", // URL vazia
  breeds: [
    {
      name: "Gato sem Imagem",
      origin: "Unknown",
      country_code: "BR",
      temperament: "Calm, Gentle",
      life_span: "10 - 14",
      weight: { metric: "3 - 5" },
      description: "Um gato de teste sem URL de imagem",
    },
  ],
};
