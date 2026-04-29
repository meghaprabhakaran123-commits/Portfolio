import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ borderTop: '1px solid rgba(140,133,119,0.15)', padding: '48px clamp(24px,5vw,80px)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', flexWrap: 'wrap',
        justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--color-stone)', fontWeight: 300 }}>
          &copy; {new Date().getFullYear()} Megha Prabhakaran. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {['Dribbble', 'Behance', 'Instagram', 'LinkedIn'].map((s) => (
            <motion.a key={s} href="#" data-cursor={s} whileHover={{ y: -2 }}
              style={{ fontSize: '0.8rem', color: 'var(--color-stone)', letterSpacing: '0.06em',
                textTransform: 'uppercase', fontWeight: 400 }}>
              {s}
            </motion.a>
          ))}
        </div>
        <motion.button onClick={scrollToTop} data-cursor="Top" whileHover={{ y: -3 }}
          style={{ fontSize: '0.8rem', color: 'var(--color-stone)', letterSpacing: '0.06em',
            textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'none', fontWeight: 400 }}>
          ↑ Back to Top
        </motion.button>
      </div>
    </footer>
  );
}
