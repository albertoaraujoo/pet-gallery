"use client";

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:border-gray-400 hover:bg-gray-50"
    >
      Voltar
    </button>
  );
}
