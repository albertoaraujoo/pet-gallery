import { PawPrint } from "lucide-react";

export function Header() {
  return (
    <header className="flex w-full items-center gap-4 bg-gray-900 px-8 py-6 text-white">
      <PawPrint size={25} />
      <h1 className="gradient-text text-2xl font-bold">Pet Gallery</h1>
    </header>
  );
}
