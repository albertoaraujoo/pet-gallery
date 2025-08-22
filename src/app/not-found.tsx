import { Cat, Home } from "lucide-react";
import Link from "next/link";

import { BackButton } from "@/components/back-button/back-button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <div className="mx-auto max-w-md text-center">
        {/* Ilustração do gato */}
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-gray-900 p-6">
            <Cat className="h-20 w-20 text-white" />
          </div>
        </div>

        {/* Título e mensagem */}
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Gatinho não encontrado!
        </h2>
        <p className="mb-8 text-lg text-gray-600">
          Parece que este gatinho fugiu ou nunca existiu. Que tal conhecer
          outros felinos adoráveis?
        </p>

        {/* Botões de ação */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-800"
          >
            <Home className="mr-2 h-5 w-5" />
            Voltar ao início
          </Link>

          <BackButton />
        </div>

        {/* Ilustração adicional */}
        <div className="mt-12">
          <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 p-8">
            <Cat className="h-full w-full text-gray-600 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
