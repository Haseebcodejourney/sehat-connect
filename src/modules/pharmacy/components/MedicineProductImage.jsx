import { useEffect, useState } from 'react';
import { MEDICINE_IMAGE_FALLBACK } from '../constants/medicineImages';

export default function MedicineProductImage({
  src,
  alt = '',
  className = '',
  fallbackSrc = MEDICINE_IMAGE_FALLBACK,
}) {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setCurrentSrc(src || fallbackSrc);
  }, [src, fallbackSrc]);

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
