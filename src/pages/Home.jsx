import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import PageTransition, { staggerItem } from '../components/PageTransition';
import MasonryGrid from '../components/MasonryGrid';
import ScrollSequence from '../components/ScrollSequence';
import Lightbox from '../components/Lightbox';
import projects from '../data/projects';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    document.title = 'Megha Prabhakaran — Design Portfolio';
  }, []);

  return (
    <PageTransition>
      {/* Hero Section with Scroll Sequence */}
      <div ref={heroRef} className="grain">
        <ScrollSequence>
          <motion.div className="container" style={{ opacity: textOpacity, y: textY }}>
            <div style={{ maxWidth: '800px' }}>
              <motion.p variants={staggerItem} style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem',
                fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)', marginBottom: 24 }}>
                Graphic Designer & Video Editor
              </motion.p>
              <motion.h1 variants={staggerItem} className="text-balance" style={{
                fontSize: 'clamp(3rem, 10vw, 7.5rem)', marginBottom: 40, color: '#fff',
                maxWidth: '12ch', lineHeight: 0.9, textIndent: '-0.05em' }}>
                Crafting Visual Narratives
              </motion.h1>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 40, flexWrap: 'wrap' }}>
                <div style={{ maxWidth: '50ch' }}>

                  <motion.p variants={staggerItem} style={{ 
                    fontFamily: 'var(--font-sans)', 
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.6)', 
                    lineHeight: 1.6 
                  }}>
                    Specializing in brand identity, digital design, and video content, combining creativity with strategy to deliver impactful results.
                  </motion.p>
                </div>
                <motion.div variants={staggerItem} style={{ paddingTop: 8 }}>
                  <a href="#selected-works" style={{ color: '#fff', fontSize: '0.8rem', 
                    textTransform: 'uppercase', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: 12 }}>
                    Explore Works <span style={{ fontSize: '1.2rem' }}>↓</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollSequence>
      </div>

      {/* Selected Works Section */}
      <section id="selected-works" className="section-padding" style={{ backgroundColor: 'var(--color-cream)' }}>
        <div className="container">
          <motion.div variants={staggerItem} style={{ display: 'flex', flexDirection: 'column',
            alignItems: 'flex-start', marginBottom: 80 }}>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', 
              color: 'var(--color-terracotta)', marginBottom: 20 }}>
              Selected Projects
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'baseline' }}>
               <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-charcoal)' }}>
                 Visual Stories
               </h2>
               <span style={{ fontSize: '0.85rem', color: 'var(--color-stone)', opacity: 0.6 }}>
                 {projects.length} Entries / 2022—2025
               </span>
            </div>
          </motion.div>
          <MasonryGrid projects={projects} onProjectClick={setSelectedProject} />
        </div>
      </section>

      {/* Lightbox popup */}
      <AnimatePresence>
        {selectedProject && (
          <Lightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}

