"use server";

import { cookies } from "next/headers";

const FAVORITES_COOKIE_KEY = "pet-gallery-favorites";

export async function toggleFavorite(petId: string) {
  const cookieStore = await cookies();
  const favoritesData = cookieStore.get(FAVORITES_COOKIE_KEY)?.value || "[]";

  try {
    const favorites: string[] = JSON.parse(favoritesData);
    const petIndex = favorites.indexOf(petId);

    if (petIndex > -1) {
      // Remove dos favoritos
      favorites.splice(petIndex, 1);
    } else {
      // Adiciona aos favoritos
      favorites.push(petId);
    }

    // Salva no cookie com 30 dias de expiração
    cookieStore.set(FAVORITES_COOKIE_KEY, JSON.stringify(favorites), {
      maxAge: 30 * 24 * 60 * 60, // 30 dias
      httpOnly: false,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });

    return { success: true, favorites };
  } catch (error) {
    console.error("Erro ao toggle favorito:", error);
    return { success: false, error: "Erro ao atualizar favoritos" };
  }
}

export async function getFavorites(): Promise<string[]> {
  const cookieStore = await cookies();
  const favoritesData = cookieStore.get(FAVORITES_COOKIE_KEY)?.value || "[]";

  try {
    return JSON.parse(favoritesData);
  } catch (error) {
    console.error("Erro ao buscar favoritos:", error);
    return [];
  }
}

export async function isFavorite(petId: string): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.includes(petId);
}
