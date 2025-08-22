import { ArrowLeft, Cat, Home } from "lucide-react";
import Link from "next/link";

import { fetchCatById } from "@/actions/fetch-cat-by-id";
import { CatDescription } from "@/components/pet-page/cat-description/cat-description";
import { PetPageDesktopContent } from "@/components/pet-page/pet-page-desktop-content/pet-page-desktop-content";
import { PetPageMobileContent } from "@/components/pet-page/pet-page-mobile-content/pet-page-mobile-content";

interface PetPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PetPage({ params }: PetPageProps) {
  const { id } = await params;

  try {
    const cat = await fetchCatById(id);

    return (
      <div className="min-h-screen bg-gray-900">
        {/* Background pattern */}

        {/* Header com botão voltar */}
        <header className="relative z-10 border-b border-gray-800 bg-gray-900 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
            >
              <ArrowLeft size={20} />
              <span>Voltar à galeria</span>
            </Link>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="relative z-10 mx-auto max-w-6xl px-6 py-12">
          {/* Layout Desktop: Duas colunas com altura da imagem */}
          <PetPageDesktopContent cat={cat} />

          {/* Layout Mobile: Coluna única */}
          <PetPageMobileContent cat={cat} />

          {/* Informações adicionais abaixo das colunas */}
          <CatDescription cat={cat} />

          {/* Seção adicional - Gatos relacionados */}
        </main>
      </div>
    );
  } catch (error) {
    console.error("Erro ao carregar pet:", error);

    return (
      <div className="min-h-screen bg-gray-900">
        {/* Background pattern */}

        {/* Header com botão voltar */}
        <header className="relative z-10 border-b border-gray-800 bg-gray-900 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
            >
              <ArrowLeft size={20} />
              <span>Voltar à galeria</span>
            </Link>
          </div>
        </header>

        {/* Página de erro estilizada */}
        <main className="relative z-10 flex min-h-[80vh] items-center justify-center">
          <div className="mx-auto max-w-md px-6 text-center">
            {/* Ilustração do gato */}
            <div className="mb-8 flex justify-center">
              <div className="rounded-full bg-white p-6">
                <Cat className="h-20 w-20 text-gray-900" />
              </div>
            </div>

            {/* Título e mensagem */}
            <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
            <h2 className="mb-4 text-2xl font-semibold text-gray-300">
              Gatinho não encontrado!
            </h2>
            <p className="mb-8 text-lg text-gray-400">
              Parece que este gatinho fugiu ou nunca existiu. Que tal conhecer
              outros felinos adoráveis?
            </p>

            {/* Botões de ação */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-gray-900 transition-colors hover:bg-gray-200"
              >
                <Home className="mr-2 h-5 w-5" />
                Voltar ao início
              </Link>
            </div>

            {/* Ilustração adicional */}
            <div className="mt-12">
              <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 p-8">
                <Cat className="h-full w-full text-gray-500 opacity-50" />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
