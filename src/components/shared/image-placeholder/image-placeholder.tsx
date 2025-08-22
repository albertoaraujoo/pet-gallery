import { Cat } from "lucide-react";

interface ImagePlaceholderProps {
  width: number;
  height: number;
  className?: string;
}

export function ImagePlaceholder({
  width,
  height,
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`flex items-center justify-center bg-gray-700 ${className}`}
      style={{ width, height }}
    >
      <div className="text-center">
        <Cat className="mx-auto mb-2 h-8 w-8 text-gray-500" />
        <p className="text-xs text-gray-500">Imagem não disponível</p>
      </div>
    </div>
  );
}
