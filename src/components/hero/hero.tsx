import { Cat } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full px-6 py-8">
      <div className="relative mx-auto max-w-4xl text-center">
        {/* Icon */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg">
            <Cat className="h-8 w-8 text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Pet{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Gallery
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          Descubra as mais belas raças de gatos do mundo todo
        </p>

        {/* Scroll Indicator */}
        <div className="mt-16">
          <div className="mx-auto flex h-6 w-4 animate-bounce justify-center rounded-full border-2 border-gray-400">
            <div className="mt-1 h-1 w-1 animate-pulse rounded-full bg-gray-400"></div>
          </div>
          <p className="mt-2 text-xs text-gray-500">Role para ver mais</p>
        </div>
      </div>
    </section>
  );
}
