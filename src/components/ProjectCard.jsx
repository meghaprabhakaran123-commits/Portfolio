import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

export default function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      className="masonry-item"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.65, 0, 0.35, 1] }}
    >
      <div 
        onClick={onClick}
        id={`project-card-${project.slug}`} 
        data-cursor="View"
        style={{ display: 'block', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
      >
        <motion.div 
          whileHover="hover"
          initial="initial"
          style={{ position: 'relative' }}
        >
          <motion.div 
            layoutId={`project-image-${project.slug}`}
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
            style={{ borderRadius: 2, overflow: 'hidden', position: 'relative' }}
          >
            <LazyImage src={project.thumbnail} alt={project.title}
              style={{ width: '100%', height: 'auto', display: 'block' }} />
            
            {project.videoThumbnail && (
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute', inset: 0, zIndex: 2 }}
              >
                <video 
                  src={project.videoThumbnail} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </motion.div>
            )}
          </motion.div>

          {/* Info Panel - Subtle Reveal */}
          <div style={{ marginTop: 24, paddingLeft: 4 }}>
             <motion.p 
               variants={{
                 initial: { opacity: 0.4, x: 0 },
                 hover: { opacity: 1, x: 10, color: 'var(--color-terracotta)' }
               }}
               style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 8 }}>
               {project.category}
             </motion.p>
             <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 400, letterSpacing: '-0.02em' }}>
               {project.title}
             </h3>
          </div>

          {/* Hover Gradient Overlay */}
          <motion.div
            variants={{
              initial: { opacity: 0 },
              hover: { opacity: 0.1 }
            }}
            style={{
              position: 'absolute', inset: 0,
              backgroundColor: 'var(--color-charcoal)',
              pointerEvents: 'none'
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

