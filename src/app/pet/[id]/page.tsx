import { ArrowLeft, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { fetchCatById } from "@/actions/fetch-cat-by-id";
import { CatDescription } from "@/components/pet-page/cat-description/cat-description";
import { PetPageDesktopContent } from "@/components/pet-page/pet-page-desktop-content/pet-page-desktop-content";
import { PetPageMobileContent } from "@/components/pet-page/pet-page-mobile-content/pet-page-mobile-content";

interface PetPageProps {
  params: {
    id: string;
  };
}

export default async function PetPage({ params }: PetPageProps) {
  const { id } = await params;
  const cat = await fetchCatById(id);

  console.log(cat);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>

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
        <section className="mt-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            Outros gatos que você pode gostar
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <Link
                key={item}
                href={`/pet/${item}`}
                className="group overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm transition-transform hover:scale-105"
              >
                <Image
                  src={`/api/placeholder/300/300`}
                  alt={`Gato relacionado ${item}`}
                  width={300}
                  height={300}
                  className="h-48 w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-white">Raça #{item}</h3>
                  <p className="text-sm text-gray-400">Origem desconhecida</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
