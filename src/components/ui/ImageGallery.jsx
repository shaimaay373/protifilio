import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import LazyImage from './LazyImage';

export default function ImageGallery({ images, title, gradient, fallbackIcon }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasImages = images && images.length > 0;

  const next = (e) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const prev = (e) => {
    e?.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  if (!hasImages) {
    return (
      <div className="project-gallery project-gallery--fallback" style={{ background: gradient }}>
        <span className="project-gallery-icon" aria-hidden="true">
          {fallbackIcon}
        </span>
        <div className="project-gallery-overlay" />
      </div>
    );
  }

  return (
    <div className="project-gallery">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="project-gallery-slide"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <LazyImage src={images[currentIndex]} alt={`${title} screenshot ${currentIndex + 1}`} />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button type="button" className="gallery-nav gallery-nav--prev" onClick={prev} aria-label="Previous image">
            <FiChevronLeft />
          </button>
          <button type="button" className="gallery-nav gallery-nav--next" onClick={next} aria-label="Next image">
            <FiChevronRight />
          </button>
          <div className="gallery-dots">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`gallery-dot ${i === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
      <div className="project-gallery-overlay" />
    </div>
  );
}

const PROJECT_ICONS = {
  'online-courses': '🎓',
  'next-ecommerce': '🛒',
  'stylish-ecommerce': '👗',
  hosto: '🏠',
  casmart: '🛍️',
  'beauty-products': '💄',
};

export function getProjectIcon(id) {
  return PROJECT_ICONS[id] || '💻';
}
