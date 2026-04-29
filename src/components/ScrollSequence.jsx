import { useEffect, useRef, useState, useMemo } from 'react';
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';

const TOTAL_FRAMES = 240;

export default function ScrollSequence({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map scroll progress to frame index
  const frameIndex = useTransform(smoothProgress, [0, 1], [1, TOTAL_FRAMES]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];

    const preloadImages = () => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        const img = new Image();
        // Construct path - assuming they are in /src/assets/cover/ezgif-frame-001.png
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/assets/cover/ezgif-frame-${frameNumber}.jpg`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setIsLoaded(true);
          }
        };
        loadedImages.push(img);
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  // Draw to canvas when frame index changes
  useEffect(() => {
    if (!isLoaded || !canvasRef.current) return;

    const context = canvasRef.current.getContext('2d');

    const renderFrame = (index) => {
      const idx = Math.floor(index) - 1;
      const img = images[idx];
      if (img && context) {
        // Clear canvas
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        // Calculate cover fit
        const canvas = canvasRef.current;
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    };

    // Listen to frameIndex changes
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(latest);
    });

    // Initial render
    renderFrame(frameIndex.get());

    return () => unsubscribe();
  }, [isLoaded, images, frameIndex]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render current frame on resize
        if (isLoaded) {
          const context = canvasRef.current.getContext('2d');
          const idx = Math.floor(frameIndex.get()) - 1;
          const img = images[idx];
          if (img && context) {
            const scale = Math.max(canvasRef.current.width / img.width, canvasRef.current.height / img.height);
            const x = (canvasRef.current.width / 2) - (img.width / 2) * scale;
            const y = (canvasRef.current.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [isLoaded, images, frameIndex]);

  return (
    <div ref={containerRef} style={{ height: '400vh', position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}>
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />

        {/* Loading Overlay */}
        {!isLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--color-cream)',
            zIndex: 10
          }}>
            <div style={{ textAlign: 'center' }}>
              <div className="mb-4" style={{
                width: 40, height: 40, border: '2px solid var(--color-stone-light)',
                borderTopColor: 'var(--color-terracotta)', borderRadius: '50%',
                animation: 'spin 1s linear infinite', margin: '0 auto 16px'
              }} />
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--color-stone)' }}>
                Loading Experience...
              </p>
            </div>
          </div>
        )}

        {/* Content Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.5))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

