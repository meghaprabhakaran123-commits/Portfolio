import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      // Home page: wait for 80vh. Other pages: always black if not at top, or just always black?
      // User said "all top nav bar color also", implying they want it black elsewhere too.
      if (location.pathname === '/') {
        setScrolled(window.scrollY > window.innerHeight * 0.8);
      } else {
        setScrolled(true); // Always black on other pages
      }
    };
    onScroll(); // Call once to set initial state
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        id="main-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 clamp(24px, 5vw, 80px)', height: 80,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          backgroundColor: scrolled ? 'var(--color-charcoal)' : 'transparent',
          backdropFilter: (scrolled || location.pathname !== '/') ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: (scrolled || location.pathname !== '/') ? 'blur(10px)' : 'none',
          borderBottom: (scrolled || location.pathname !== '/') ? '1px solid rgba(255,255,255,0.1)' : 'none',
          transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease',
        }}
      >
        <NavLink to="/" id="nav-logo" data-cursor="Home" style={{
          fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.1rem,2vw,1.35rem)',
          fontWeight: 500, letterSpacing: '-0.02em', 
          color: 'var(--color-cream)',
          transition: 'color 0.4s'
        }}>
          Megha Prabhakaran
        </NavLink>

        <nav style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="hidden md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} id={`nav-${link.label.toLowerCase()}`}
              data-cursor={link.label} end={link.to === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 400,
                letterSpacing: '0.08em', textTransform: 'uppercase',
                color: isActive ? 'var(--color-cream)' : 'rgba(255, 255, 255, 0.7)',
                position: 'relative',
                transition: 'color 0.4s'
              })}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div layoutId="nav-indicator" style={{
                      position: 'absolute', bottom: -4, left: 0, right: 0,
                      height: 1.5, backgroundColor: 'var(--color-terracotta)', borderRadius: 1,
                    }} transition={{ type: 'spring', stiffness: 500, damping: 35 }} />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button id="nav-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}
          data-cursor="Menu" className="flex md:hidden" aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', cursor: 'none', padding: 8,
            display: 'flex', flexDirection: 'column', gap: menuOpen ? 0 : 5,
            width: 32, height: 32, alignItems: 'center', justifyContent: 'center' }}
        >
          <motion.span animate={{ 
            rotate: menuOpen ? 45 : 0, 
            y: menuOpen ? 1 : 0,
            backgroundColor: 'var(--color-cream)' 
          }}
            style={{ display: 'block', width: 24, height: 1.5, transformOrigin: 'center' }} />
          <motion.span animate={{ 
            opacity: menuOpen ? 0 : 1, 
            scaleX: menuOpen ? 0 : 1,
            backgroundColor: 'var(--color-cream)'
          }}
            style={{ display: 'block', width: 24, height: 1.5 }} />
          <motion.span animate={{ 
            rotate: menuOpen ? -45 : 0, 
            y: menuOpen ? -1 : 0,
            backgroundColor: 'var(--color-cream)'
          }}
            style={{ display: 'block', width: 24, height: 1.5, transformOrigin: 'center' }} />
        </button>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            style={{ position: 'fixed', inset: 0, zIndex: 999, backgroundColor: 'var(--color-charcoal)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 40 }}
          >
            {links.map((link, i) => (
              <motion.div key={link.to} initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
              >
                <NavLink to={link.to} end={link.to === '/'} id={`mobile-nav-${link.label.toLowerCase()}`}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,6vw,3.5rem)', fontWeight: 400,
                    color: isActive ? 'var(--color-terracotta)' : 'var(--color-cream)',
                  })}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
