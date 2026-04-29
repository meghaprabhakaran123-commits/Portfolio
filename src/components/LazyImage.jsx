import { useEffect, useRef, useState } from 'react';

export default function LazyImage({ src, alt, className = '', style = {} }) {
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imgRef}
      src={inView ? src : undefined}
      alt={alt}
      className={`lazy-image ${loaded ? 'loaded' : ''} ${className}`}
      style={{
        width: '100%',
        height: 'auto',
        display: 'block',
        ...style,
      }}
      onLoad={() => setLoaded(true)}
      loading="lazy"
    />
  );
}
