"use server";

export async function fetchCatById(id: string) {
  const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": process.env.CAT_API_KEY || "",
  });

  const apiUrl = `https://api.thecatapi.com/v1/images/${id}`;

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
      throw new Error("Erro ao achar esse Pet.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Erro na API:", error);
    throw error;
  }
}
