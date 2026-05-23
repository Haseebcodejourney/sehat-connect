import { useEffect, useState } from 'react';
import { ABOUT_ASSETS, ABOUT_IMAGE_FALLBACK } from '../constants/aboutAssets';

export default function AboutImage({
  assetKey,
  src,
  alt = '',
  className = '',
  fallbackSrc = ABOUT_IMAGE_FALLBACK,
}) {
  const resolvedSrc = src ?? (assetKey ? ABOUT_ASSETS[assetKey] : null) ?? fallbackSrc;
  const [currentSrc, setCurrentSrc] = useState(resolvedSrc);

  useEffect(() => {
    setCurrentSrc(resolvedSrc);
  }, [resolvedSrc]);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
