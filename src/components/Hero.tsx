'use client';

import { motion } from 'framer-motion';

interface HeroProps {
  className?: string;
}

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 12,
      duration: 1,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      delay: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 12,
      delay: 0.4,
      duration: 1.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15,
      delay: 0.5,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: 0.7,
    },
  },
};
export function Hero({ className = '' }: HeroProps) {
  return (
    <section className={'hero-section section ' + className} id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '6rem 2rem' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: '1400px', width: '100%' }}>
        <motion.div variants={heroVariants} initial="hidden" animate="visible" style={{ zIndex: 1 }}>
          <motion.h1 variants={titleVariants} style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Hey, I<span style={{ color: '#B7D894' }}>'</span>m Zain!
          </motion.h1>
          
          <motion.h2 variants={subtitleVariants} style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 500, color: '#B7D894', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            12 Years Old | Student | Macaroni Lover
          </motion.h2>
          
          <motion.p variants={textVariants} style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '500px', marginBottom: '2.5rem' }}>
            Welcome to my little corner of the internet! I am a curious 12-year-old who loves exploring new things, 
            learning cool stuff, and eating way too much macaroni. This is my space to share my adventures, 
            my photos, and my favorite food!
          </motion.p>
          
          <motion.div variants={buttonVariants} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #B7D894 0%, #E0F8C7 100%)',
                color: '#202734',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: '"Space Grotesk", sans-serif',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(183, 216, 148, 0.3)',
                transition: 'all 0.3s ease',
              }}
            >
              Explore My World
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2, background: 'rgba(183, 216, 148, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                color: '#B7D894',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1rem',
                fontWeight: 600,
                fontFamily: '"Space Grotesk", sans-serif',
                border: '2px solid #B7D894',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              My Gallery
            </motion.button>
          </motion.div>
        </motion.div>
<motion.div variants={imageVariants} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 100px rgba(183, 216, 148, 0.15)' }}>
            <img 
              src="/zain1.jpeg" 
              alt="Zain smiling" 
              style={{ width: '100%', height: 'auto', maxHeight: '550px', objectFit: 'cover', display: 'block', borderRadius: '24px' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(32,39,52,0.8) 100%)', borderRadius: '24px', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', color: '#E0F8C7', border: '1px solid rgba(183,216,148,0.3)' }}>Age 12</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', color: '#E0F8C7', border: '1px solid rgba(183,216,148,0.3)' }}>Macaroni Fan</span>
              <span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', color: '#E0F8C7', border: '1px solid rgba(183,216,148,0.3)' }}>Curious</span>
            </div>
          </div>
          
          <motion.div
            style={{ position: 'absolute', bottom: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, #B7D894 0%, #E0F8C7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', boxShadow: '0 20px 50px rgba(183, 216, 148, 0.4)' }}
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            Pasta
          </motion.div>
          
          <motion.div
            style={{ position: 'absolute', top: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(54, 65, 90, 0.8)', border: '2px solid rgba(183, 216, 148, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', backdropFilter: 'blur(10px)' }}
            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            Sparkle
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <motion.span animate={{ rotate: [0, 90, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>Down</motion.span>
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}
