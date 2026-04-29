import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    if (!form.message.trim()) e.message = true;
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setSubmitted(true);
  };

  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({ ...p, [field]: false }));
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          style={{ textAlign: 'center', padding: '80px 0' }}>
          {/* Animated checkmark */}
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
            style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: 'var(--color-sage)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
            <motion.svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}>
              <motion.path d="M5 13l4 4L19 7" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }} />
            </motion.svg>
          </motion.div>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem,3vw,2rem)',
            marginBottom: 12, color: 'var(--color-charcoal)' }}>Thank you!</h3>
          <p style={{ color: 'var(--color-stone)', fontSize: '1.05rem' }}>
            Your message has been received. I'll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {[
            { field: 'name', type: 'text', placeholder: 'Your Name' },
            { field: 'email', type: 'email', placeholder: 'Your Email' },
          ].map(({ field, type, placeholder }) => (
            <motion.div key={field} animate={errors[field] ? { x: [0, -8, 8, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}>
              <input id={`contact-${field}`} type={type} placeholder={placeholder}
                className="form-input" value={form[field]}
                onChange={(e) => handleChange(field, e.target.value)}
                style={{ borderBottomColor: errors[field] ? 'var(--color-terracotta)' : undefined }} />
            </motion.div>
          ))}
          <motion.div animate={errors.message ? { x: [0, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.4 }}>
            <textarea id="contact-message" placeholder="Your Message" rows={4}
              className="form-input" value={form.message}
              onChange={(e) => handleChange('message', e.target.value)}
              style={{ resize: 'vertical', borderBottomColor: errors.message ? 'var(--color-terracotta)' : undefined }} />
          </motion.div>
          <motion.button id="contact-submit" type="submit" data-cursor="Send"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            style={{ alignSelf: 'flex-start', padding: '16px 48px', backgroundColor: 'var(--color-charcoal)',
              color: 'var(--color-cream)', border: 'none', borderRadius: 100, fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem', fontWeight: 400, letterSpacing: '0.06em', cursor: 'none' }}>
            Send Message
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
