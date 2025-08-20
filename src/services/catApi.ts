// src/services/catApi.ts
import "dotenv/config";

export async function getAllCats() {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": process.env.CAT_API_KEY || "",
  });

  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
    {
      method: "GET",
      headers,
      redirect: "follow",
    }
  );

  if (!response.ok) throw new Error("Erro ao buscar gatos");
  return response.json();
}
