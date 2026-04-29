import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition, { staggerItem } from '../components/PageTransition';
import LazyImage from '../components/LazyImage';

const tools = [
  { name: 'Photoshop', path: 'M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z', color: '#31A8FF' },
  { name: 'Illustrator', path: 'M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z', color: '#FF9A00' },
  { name: 'InDesign', path: 'M4.25.3C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm11.31 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.5.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28-.01-.74.18-1.47.55-2.11.38-.65.93-1.19 1.59-1.55.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zm-8.93.86h1.95c.06-.01.12.03.13.1.01.01.01.02.01.03v10.26c0 .11-.05.16-.14.16H6.62c-.09 0-.13-.05-.13-.16V6.42c0-.09.05-.13.14-.13zm8.23 4.24c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.25-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02z', color: '#FF3366' },
  { name: 'CorelDRAW', path: 'M10.651 0C10.265.019 9.4.272 8.584.657c-.816.39-3.696 2.161-3.752 6.536.072 4.145 3.847 11.191 6.397 13.455 0 0-4.141-6.952-4.439-13.013C6.488 1.575 10.651 0 10.651 0Zm2.679 0s4.159 1.575 3.861 7.635c-.299 6.061-4.439 13.013-4.439 13.013 2.547-2.264 6.324-9.31 6.396-13.455-.057-4.375-2.936-6.146-3.752-6.536C14.58.272 13.715.019 13.33 0Zm-1.38.019a1.088 1.088 0 0 0-.555.144C9.864.99 8.909 3.982 9.177 8.66c.185 3.242 1.009 7.291 2.422 11.988h.7c1.413-4.697 2.24-8.742 2.425-11.984.268-4.677-.688-7.674-2.219-8.501a1.088 1.088 0 0 0-.555-.144ZM7.017 1.066S2.543 2.909 3.431 8.225c.884 5.32 5.588 10.995 6.986 12.2.503.457-5.777-6.548-6.386-12.699-.291-2.323.39-4.9 2.986-6.66Zm9.966 0c2.595 1.76 3.276 4.337 2.985 6.66-.608 6.151-6.888 13.156-6.386 12.699 1.398-1.205 6.103-6.88 6.987-12.2.888-5.316-3.586-7.159-3.586-7.159Zm-6.815 20.78L10.647 24h2.599l.488-2.154h-3.566Z', color: '#00B050' },
  { name: 'After Effects', path: 'M8.54 10.73c-.1-.31-.19-.61-.29-.92s-.19-.6-.27-.89c-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.13.51-.29.98-.44 1.4h2.54c-.06-.21-.14-.46-.23-.72-.09-.27-.18-.56-.27-.86zm8.58-.29c-.55-.03-1.07.26-1.33.76-.12.23-.19.47-.22.72h2.109c.26 0 .45 0 .57-.01.08-.01.16-.03.23-.08v-.1c0-.13-.021-.25-.061-.37-.178-.56-.708-.94-1.298-.92zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.04 16.511h-2.09c-.07.01-.14-.041-.16-.11l-.82-2.4H5.92l-.76 2.36c-.02.09-.1.15-.19.14H3.09c-.11 0-.14-.06-.11-.18L6.2 7.39c.03-.1.06-.19.1-.31.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.07 0 .12.03.13.08l3.65 10.25c.03.11.001.161-.1.161zm7.851-3.991c-.021.189-.031.33-.041.42-.01.07-.069.13-.14.13-.06 0-.17.01-.33.021-.159.02-.35.029-.579.029-.23 0-.471-.04-.73-.04h-3.17c.039.31.14.62.31.89.181.271.431.48.729.601.4.17.841.26 1.281.25.35-.011.699-.04 1.039-.11.311-.039.61-.119.891-.23.05-.039.08-.02.08.08v1.531c0 .039-.01.08-.021.119-.021.03-.04.051-.069.07-.32.14-.65.24-1 .3-.471.09-.94.13-1.42.12-.761 0-1.4-.12-1.92-.35-.49-.211-.921-.541-1.261-.95-.319-.39-.55-.83-.69-1.31-.14-.471-.209-.961-.209-1.461 0-.539.08-1.07.25-1.59.16-.5.41-.96.75-1.37.33-.4.739-.72 1.209-.95.471-.23 1.03-.31 1.67-.31.531-.01 1.06.09 1.55.31.41.18.77.45 1.05.8.26.34.47.72.601 1.14.129.4.189.81.189 1.22 0 .24-.01.45-.019.64z', color: '#9999FF' },
  { name: 'Premiere Pro', path: 'M10.15 8.42a2.93 2.93 0 00-1.18-.2 13.9 13.9 0 00-1.09.02v3.36l.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03a1.45 1.45 0 00-.93-1.46zM19.75.3H4.25A4.25 4.25 0 000 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.09 11.65c-.4.56-.96.98-1.61 1.22-.68.25-1.43.34-2.25.34l-.5-.01-.43-.01v3.21a.12.12 0 01-.11.14H5.82c-.08 0-.12-.04-.12-.13V6.42c0-.07.03-.11.1-.11l.56-.01.76-.02.87-.02.91-.01c.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.15.42.23.85.23 1.3 0 .86-.2 1.57-.6 2.13zm6.82-3.15v1.95c0 .08-.05.11-.16.11a4.35 4.35 0 00-1.92.37c-.19.09-.37.21-.51.37v5.1c0 .1-.04.14-.13.14h-1.97a.14.14 0 01-.16-.12v-5.58l-.01-.75-.02-.78c0-.23-.02-.45-.04-.68a.1.1 0 01.07-.11h1.78c.1 0 .18.07.2.16a3.03 3.03 0 01.13.92c.3-.35.67-.64 1.08-.86a3.1 3.1 0 011.52-.39c.07-.01.13.04.14.11v.04z', color: '#EA77FF' },
  { name: 'DaVinci Resolve', path: 'M17.621 0 5.977.004c-1.37 0-2.756.345-3.762 1.11a4.925 4.925 0 0 0-1.61 2.003C.233 3.93 0 5.02 0 5.951l.012 12.2c.002 1.604.479 3.057 1.461 4.112.984 1.056 2.462 1.683 4.331 1.691L16.856 24c1.26.005 3.095-.036 4.303-.714 1.075-.605 2.025-1.556 2.497-2.984.278-.84.345-2.084.344-3.147l-.021-11.13c-.002-.888-.15-2.023-.547-2.934-.425-.976-1.181-1.815-2.322-2.425C20.353.26 19.123 0 17.622 0zm0 .93c1.378 0 2.538.295 3.04.565.977.523 1.544 1.166 1.889 1.96.315.721.47 1.793.473 2.572l.018 11.13c.002 1.013-.097 2.257-.298 2.86-.396 1.202-1.146 1.946-2.063 2.462-.814.457-2.612.593-3.82.588l-11.05-.044c-1.657-.007-2.832-.534-3.626-1.386-.792-.851-1.212-2.06-1.212-3.485L.999 5.95c0-.829.196-1.827.474-2.437.345-.757.75-1.207 1.365-1.674C3.585 1.27 4.868.97 6.08.97zm-5.66 3.423c-1.976.089-3.204 1.658-3.214 3.29.019 1.443 1.635 3.481 2.884 4.53.12.099.154.109.33.18.062.025.198-.047.327-.135.36-.245.993-.947 1.648-1.738a7.67 7.67 0 0 0 1.031-1.683c.409-.89.261-1.599.235-1.888a3.983 3.983 0 0 0-.99-1.692 3.36 3.36 0 0 0-2.251-.864zm4.172 7.922a10.185 10.185 0 0 0-3.244.61c-.15.058-.26.1-.374.17-.057.036-.11.135-.105.292.017.433.29 1.278.624 2.27.384 1.135 1.066 2.27 1.844 2.74a3.23 3.23 0 0 0 2.53.342c.832-.243 1.595-.868 1.962-1.546.986-1.818.19-3.548-1.121-4.417-.447-.296-1.133-.445-1.89-.46-.074 0-.15-.002-.226-.001zm-8.432.038a6.201 6.201 0 0 0-.752.047c-.596.078-.932.273-1.29.51a3.177 3.177 0 0 0-1.365 1.979c-.075.552-.086 1.053.033 1.507.433 1.389 1.326 2.222 2.847 2.452.636.028 1.37-.063 1.99-.45 1.269-.782 2.08-3.17 2.412-4.742.053-.176.035-.357-.013-.42-.005-.067-.044-.113-.19-.183-.398-.192-1.32-.417-2.375-.6a7.68 7.68 0 0 0-1.297-.1z', color: '#0575E6' },
];

export default function About() {
  useEffect(() => {
    document.title = 'About — Megha Prabhakaran';
  }, []);

  return (
    <PageTransition>
      <section className="section-padding grain" style={{ paddingTop: 'clamp(100px, 15vh, 200px)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px', alignItems: 'start' }}>
            
            {/* Title - Spans full width on mobile, half on desktop */}
            <div style={{ gridColumn: '1 / span 12', marginBottom: 'clamp(40px, 8vw, 80px)' }}>
              <motion.p variants={staggerItem} style={{ fontSize: '0.8rem', letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: 24 }}>
                The Designer
              </motion.p>
              <motion.h1 variants={staggerItem} style={{ fontSize: 'clamp(3rem, 8vw, 6rem)',
                lineHeight: 0.9, maxWidth: '10ch', textIndent: '-0.05em' }}>
                Megha Prabhakaran
              </motion.h1>
            </div>

            {/* Portrait - Large on the left */}
            <motion.div variants={staggerItem} style={{ gridColumn: '1 / span 7', position: 'relative' }}>
              <div className="designer-portrait-container" style={{ borderRadius: 4 }}>
                 <LazyImage 
                   src="/images/about-portrait.jpg" 
                   alt="Megha Prabhakaran Portrait"
                   className="designer-portrait"
                   style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} 
                 />
                 <motion.div initial={{ x: '-100%' }} whileInView={{ x: '100%' }} 
                   transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
                   style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--color-cream)', zIndex: 2 }} />
              </div>
              <motion.div variants={staggerItem} style={{ position: 'absolute', bottom: -40, right: -40, 
                width: 120, height: 120, borderRadius: '50%', border: '1px solid var(--color-terracotta)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
                <p style={{ fontSize: '0.65rem', textAlign: 'center', lineHeight: 1.3, color: 'var(--color-terracotta)',
                  textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Based in Kerala, India
                </p>
              </motion.div>
            </motion.div>

            {/* Bio Content - Right side */}
            <div style={{ gridColumn: '9 / span 4', paddingTop: '40px' }}>
              
              <motion.div variants={staggerItem} style={{ 
                color: 'var(--color-stone)', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 20, 
                marginBottom: 48,
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}>
                <p>
                  I specialize in brand identity, digital design, and video content, combining creativity with strategy to deliver impactful results. My approach is rooted in understanding each project’s purpose and audience, allowing me to craft designs that are both aesthetically strong and highly functional.
                </p>
                <p>
                  From concept to execution, I focus on clarity, detail, and storytelling to bring ideas to life. I’m passionate about creating work that not only looks good but also communicates effectively and leaves a lasting impression.
                </p>
              </motion.div>

              <motion.div variants={staggerItem} style={{ padding: '32px 0', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                  Philosophy
                </p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: 1.4 }}>
                  "Good design is as little design as possible. Less, but better — because it concentrates on the essential aspects."
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section - Sophisticated Grid */}
      <section style={{ backgroundColor: '#111', color: '#fff', padding: 'clamp(100px, 15vh, 200px) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px' }}>
            <div style={{ gridColumn: '1 / span 4' }}>
               <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }} style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                 The Toolkit
               </motion.h2>
               <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: 24 }}>
                 Leveraging industry-standard tools to bring creative visions to life with precision.
               </p>
            </div>
            
            <div style={{ gridColumn: '6 / span 7', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 1 }}>
              {tools.map((tool, i) => (
                <motion.div key={tool.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  style={{ padding: '40px 20px', border: '1px solid rgba(255,255,255,0.1)', 
                    display: 'flex', flexDirection: 'column', gap: 20, cursor: 'default' }}>
                  <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    fill={tool.color} 
                    style={{ filter: 'drop-shadow(0 0 8px ' + tool.color + '44)' }}
                  >
                    <path d={tool.path} />
                  </svg>
                  <span style={{ fontSize: '0.8rem', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.8)' }}>
                    {tool.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Minimalist List */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} style={{ fontSize: '2.5rem', marginBottom: 80 }}>
              Journey
            </motion.h2>
            {[
              { period: '2025 — Present', role: 'Graphic Designer & Video Editor', company: 'Invigo Software Solution' },
              { period: '2023 — 2024', role: 'Graphic Designer & Video Editor', company: 'Aeth Analytica' },
              { period: '2022 — 2023', role: 'Graphic Designer', company: 'Apple Sign' },
              { period: '2020 — 2022', role: 'Junior Designer', company: 'Freelance' },
            ].map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 40,
                  padding: '40px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-stone)' }}>{exp.period}</span>
                <span style={{ fontSize: '1.1rem', fontWeight: 500 }}>{exp.role}</span>
                <span style={{ fontSize: '0.9rem', color: 'var(--color-stone)', textAlign: 'right' }}>{exp.company}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

