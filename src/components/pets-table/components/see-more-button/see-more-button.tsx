import { Eye } from "lucide-react";
import Link from "next/link";

import { Cat } from "../../pets-table";

interface SeeMoreButtonProps {
  cat: Cat;
}

export function SeeMoreButton({ cat }: SeeMoreButtonProps) {
  return (
    <button>
      <Link
        className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-blue-400 to-purple-500 px-4 py-2 text-sm font-semibold text-gray-900 transition-colors hover:from-blue-500 hover:to-purple-600 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
        href={`/pet/${cat.id}`}
      >
        <Eye size={16} /> Ver mais
      </Link>
    </button>
  );
}
