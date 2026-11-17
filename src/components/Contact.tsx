'use client';

import { motion } from 'framer-motion';

interface ContactProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Contact({ className = '' }: ContactProps) {
  return (
    <footer className={'contact-section section ' + className} id="contact" style={{ position: 'relative', zIndex: 1, paddingBottom: '4rem' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <motion.div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse at center, rgba(183, 216, 148, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #FFFFFF 0%, #B7D894 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Let's Connect! Wave
          </motion.h2>
          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Got a question? Want to share your favorite macaroni recipe? Just want to say hi? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          {[
            { icon: 'Mail', title: 'Email Me', desc: 'zain@example.com', color: '#B7D894', link: 'mailto:zain@example.com' },
            { icon: 'Github', title: 'GitHub', desc: 'github.com/zain', color: '#E0F8C7', link: 'https://github.com' },
            { icon: 'Twitter', title: 'Twitter', desc: '@zain_codes', color: '#B7D894', link: 'https://twitter.com' },
            { icon: 'Linkedin', title: 'LinkedIn', desc: 'linkedin.com/in/zain', color: '#E0F8C7', link: 'https://linkedin.com' },
          ].map((item, i) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                background: 'rgba(54, 65, 90, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(183, 216, 148, 0.15)',
                borderRadius: '20px',
                padding: '2rem',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.4s ease',
              }}
              whileHover={{ y: -8, borderColor: item.color, boxShadow: '0 20px 40px rgba(183, 216, 148, 0.15)', color: item.color }}
            >
              <motion.span
                style={{ fontSize: '2.5rem', marginBottom: '1rem', color: item.color }}
                animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.15 }}
              >
                {item.icon}
              </motion.span>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '0.5rem', color: '#FFFFFF' }}>
                {item.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', margin: 0, fontSize: '0.9rem' }}>
                {item.desc}
              </p>
            </motion.a>
          ))}
        </motion.div>
<motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', paddingTop: '3rem', borderTop: '1px solid rgba(183, 216, 148, 0.2)' }}>
          <motion.p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Made with love, curiosity, and lots of macaroni Pasta
          </motion.p>
          <motion.p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
            2025 Zain's Portfolio | Built with React, Framer Motion & a sprinkle of magic Sparkles
          </motion.p>
          
          <motion.div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {['Heart', 'Star', 'Sparkles', 'Zap'].map((icon, i) => (
              <motion.span
                key={icon}
                style={{ fontSize: '1.5rem', color: i % 2 === 0 ? '#B7D894' : '#E0F8C7' }}
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
              >
                {icon}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
