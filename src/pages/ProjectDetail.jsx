import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import PageTransition, { staggerItem } from '../components/PageTransition';
import LazyImage from '../components/LazyImage';
import projects from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  useEffect(() => {
    document.title = project ? `${project.title} — Megha Prabhakaran` : 'Project — Megha Prabhakaran';
    window.scrollTo(0, 0);
  }, [slug, project]);

  if (!project) {
    return (
      <PageTransition>
        <div className="container section-padding" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem' }}>Project not found</h1>
          <Link to="/" style={{ color: 'var(--color-terracotta)', marginTop: 16, display: 'inline-block' }}>← Back to Work</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      {/* Hero */}
      <section style={{ paddingTop: 'clamp(40px,8vh,100px)', paddingBottom: 80 }}>
        <div className="container">
          <motion.div variants={staggerItem} style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 32 }}>
            <Link to="/" data-cursor="Back" style={{ fontSize: '0.8rem', color: 'var(--color-stone)',
              letterSpacing: '0.08em', textTransform: 'uppercase' }}>← Work</Link>
            <span style={{ color: 'var(--color-stone-light)' }}>/</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--color-stone)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {project.category}
            </span>
          </motion.div>

          <motion.h1 variants={staggerItem} style={{ fontSize: 'clamp(2.2rem,5.5vw,4.5rem)', marginBottom: 24, maxWidth: '16ch' }}>
            {project.title}
          </motion.h1>

          <motion.div variants={staggerItem} style={{ display: 'flex', gap: 'clamp(24px,4vw,56px)',
            flexWrap: 'wrap', marginBottom: 56 }}>
            {[
              { label: 'Client', value: project.client },
              { label: 'Role', value: project.role },
              { label: 'Year', value: project.year },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--color-stone-light)', marginBottom: 4 }}>{item.label}</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)' }}>{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Full-bleed hero image with parallax */}
        <motion.div style={{ y: heroY, overflow: 'hidden', marginBottom: 0 }}>
          <motion.div layoutId={`project-image-${project.slug}`}>
            <LazyImage src={project.thumbnail} alt={project.title}
              style={{ width: '100%', height: 'auto', borderRadius: 0 }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(24px,5vw,80px)' }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', marginBottom: 24 }}>Overview</motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(1rem,1.3vw,1.15rem)', color: 'var(--color-stone)', lineHeight: 1.9 }}>
            {project.overview}
          </motion.p>
        </div>
      </section>

      {/* Process */}
      <section style={{ backgroundColor: 'var(--color-ivory)', padding: 'clamp(64px,10vh,120px) 0' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(24px,5vw,80px)' }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', marginBottom: 56 }}>Process</motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {project.process.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', gap: 'clamp(16px,3vw,32px)', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-stone-light)',
                  lineHeight: 1, minWidth: 40 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: 8,
                    color: 'var(--color-charcoal)', fontWeight: 400 }}>{step.step}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-stone)', lineHeight: 1.8 }}>{step.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 24 }}>
            {/* Render Videos if available */}
            {project.videos && project.videos.map((vid, i) => (
              <motion.div key={`vid-${i}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
                <div style={{ borderRadius: 12, overflow: 'hidden', backgroundColor: '#000', lineHeight: 0 }}>
                  <video src={vid} controls muted loop playsInline
                    style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </motion.div>
            ))}
            
            {/* Render Images */}
            {project.images.map((img, i) => (
              <motion.div key={`img-${i}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: (project.videos?.length || 0 + i) * 0.15 }}>
                <LazyImage src={img} alt={`${project.title} - ${i + 1}`}
                  style={{ borderRadius: 12, width: '100%', height: 'auto' }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: 'clamp(64px,10vh,120px) 0' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 clamp(24px,5vw,80px)' }}>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', marginBottom: 24 }}>Results</motion.h2>
          <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(1.05rem,1.4vw,1.25rem)', fontFamily: 'var(--font-serif)',
              fontStyle: 'italic', color: 'var(--color-charcoal)', lineHeight: 1.8 }}>
            "{project.results}"
          </motion.p>
        </div>
      </section>

      {/* Next Project */}
      <section style={{ backgroundColor: 'var(--color-charcoal)', padding: 'clamp(64px,10vh,120px) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--color-stone)', marginBottom: 16 }}>Next Project</p>
          <Link to={`/project/${nextProject.slug}`} data-cursor="Next"
            style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem,4vw,3.5rem)',
              color: 'var(--color-cream)', lineHeight: 1.15, display: 'inline-block' }}>
            <motion.span whileHover={{ opacity: 0.7 }} transition={{ duration: 0.3 }}>
              {nextProject.title}
            </motion.span>
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
