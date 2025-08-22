"use client";

import Image from "next/image";
import { useState } from "react";

import { ImagePlaceholder } from "../image-placeholder/image-placeholder";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <ImagePlaceholder width={width} height={height} className={className} />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
}
