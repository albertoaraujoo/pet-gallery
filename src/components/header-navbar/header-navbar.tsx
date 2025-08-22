"use client";

import { Heart, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderNavbar() {
  const pathname = usePathname();
  const isOnFavoritesPage = pathname === "/favoritos";

  return (
    <nav className="flex items-center gap-4">
      {pathname !== "/" && (
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 transition-colors hover:bg-gray-700"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Início</span>
        </Link>
      )}

      {!isOnFavoritesPage && (
        <Link
          href="/favoritos"
          className="flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 transition-colors hover:bg-gray-700"
        >
          <Heart className="h-4 w-4" />
          <span className="hidden sm:inline">Favoritos</span>
        </Link>
      )}
    </nav>
  );
}
