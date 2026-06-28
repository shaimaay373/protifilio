import { useState, useRef, useEffect } from 'react';

export default function LazyImage({ src, alt, className = '', ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`lazy-image-wrap ${loaded ? 'loaded' : ''} ${className}`}>
      {!loaded && <div className="lazy-image-skeleton" aria-hidden="true" />}
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`lazy-image ${loaded ? 'visible' : ''}`}
          {...props}
        />
      )}
    </div>
  );
}
