import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [text, setText] = useState('');

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setHidden(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setHovered(true);
        setText(target.getAttribute('data-cursor') || 'View');
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setHovered(false);
        setText('');
      }
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (hidden) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: 'var(--color-charcoal)',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
        }}
        animate={{
          scale: hovered ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Ring */}
      <motion.div
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        animate={{
          width: hovered ? 80 : 40,
          height: hovered ? 80 : 40,
          backgroundColor: hovered
            ? 'var(--color-charcoal)'
            : 'transparent',
          border: hovered ? 'none' : '1.5px solid var(--color-charcoal)',
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        <motion.span
          style={{
            color: 'var(--color-cream)',
            fontSize: 12,
            fontFamily: 'var(--font-sans)',
            fontWeight: 400,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          {text}
        </motion.span>
      </motion.div>
    </>
  );
}
