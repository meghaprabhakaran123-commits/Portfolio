import { motion } from 'framer-motion';

const overlayVariants = {
  initial: { scaleY: 1 },
  animate: { 
    scaleY: 0,
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1], delay: 0.1 } 
  },
  exit: { 
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] } 
  }
};

const contentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.4 }
  },
  exit: { 
    opacity: 0, 
    y: -30,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function PageTransition({ children }) {
  return (
    <>
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
      
      {/* Cinematic Shutter Overlay */}
      <motion.div
        className="page-overlay"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ 
          position: 'fixed',
          inset: 0,
          backgroundColor: 'var(--color-charcoal)',
          zIndex: 9999,
          pointerEvents: 'none',
          transformOrigin: 'top' // Enter: scale down from top
        }}
      />
      
      {/* Reverse the origin for exit animation if possible, or just use one way */}
      {/* For simplicity, we keep origin at top for both, or use a state */}
    </>
  );
}
