import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Lightbox({ project, onClose }) {
  // Prevent scrolling when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(42, 42, 42, 0.95)',
        backdropFilter: 'blur(10px)',
        padding: '24px',
        cursor: 'zoom-out'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{
          maxWidth: '1200px',
          width: '100%',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'transparent',
          borderRadius: '16px',
          overflow: 'hidden',
          cursor: 'default'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '24px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-cream)' }}>
              {project.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {project.category} — {project.year}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              color: 'var(--color-cream)',
              cursor: 'pointer',
              lineHeight: 1
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '32px'
        }}>
          {project.videos && project.videos.length > 0 ? (
            <div style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: '#000', marginBottom: 32, lineHeight: 0 }}>
              <video src={project.videos[0]} controls muted autoPlay loop playsInline
                style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          ) : (
            <img
              src={project.thumbnail}
              alt={project.title}
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                marginBottom: '32px',
                display: 'block'
              }}
            />
          )}
          <div style={{ maxWidth: '800px' }}>
            <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.8, marginBottom: '24px' }}>
              {project.description}
            </p>
            <Link
              to={`/project/${project.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                color: 'var(--color-terracotta)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                borderBottom: '1.5px solid var(--color-terracotta)',
                paddingBottom: '4px'
              }}
            >
              View Full Case Study →
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
