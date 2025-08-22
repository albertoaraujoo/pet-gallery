import { Cat } from "lucide-react";
import Link from "next/link";

import { HeaderNavbar } from "../header-navbar/header-navbar";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between bg-gray-900 px-8 py-6 text-white">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-lg">
              <Cat className="h-4 w-4 text-white" />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white">
            Pet{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
        </Link>
      </div>

      {/* Navigation */}
      <HeaderNavbar />
    </header>
  );
}
