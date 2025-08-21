"use server";

export async function fetchCats(page: number = 0) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": process.env.CAT_API_KEY || "",
  });

  // Sempre 20 itens por requisição
  const limit = 20;
  const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=${limit}&has_breeds=1&page=${page}`;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers,
      redirect: "follow",
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar dados dos gatos");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro na API:", error);
    throw error;
  }
}
