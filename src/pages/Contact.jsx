import { useEffect } from 'react';
import { motion } from 'framer-motion';
import PageTransition, { staggerItem } from '../components/PageTransition';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Megha Prabhakaran';
  }, []);

  return (
    <PageTransition>
      <section className="section-padding" style={{ paddingTop: 'clamp(80px,12vh,160px)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 'clamp(48px,8vw,120px)', alignItems: 'start' }}>
            {/* Left — Heading & Info */}
            <div>
              <motion.p variants={staggerItem} style={{ fontSize: '0.85rem', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: 'var(--color-terracotta)', marginBottom: 24 }}>
                Get in Touch
              </motion.p>
              <motion.h1 variants={staggerItem} className="text-balance" style={{
                fontSize: 'clamp(2rem,4.5vw,3.5rem)', marginBottom: 32, maxWidth: '12ch' }}>
                Let's create something together
              </motion.h1>
              <motion.p variants={staggerItem} style={{ fontSize: '1.05rem', color: 'var(--color-stone)',
                lineHeight: 1.9, marginBottom: 56 }}>
                Have a project in mind? I'd love to hear about it. Fill out the form and I'll get back 
                to you within 24 hours.
              </motion.p>

              {/* Contact Info */}
              <motion.div variants={staggerItem} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { label: 'Contact', value: '+91 9633632384' },
                  { label: 'Email', value: 'meghaprabhakaran123@gmail.com' },
                  { label: 'Location', value: 'Kerala, India' },
                  { label: 'Availability', value: 'Open for projects' },
                ].map((item) => (
                  <div key={item.label}>
                    <p style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                      color: 'var(--color-stone-light)', marginBottom: 4 }}>{item.label}</p>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-charcoal)' }}>{item.value}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Form */}
            <motion.div variants={staggerItem}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
