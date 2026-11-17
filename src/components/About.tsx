'use client';

import { motion } from 'framer-motion';

interface AboutProps {
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
const interests = [
  { icon: 'Book', title: 'Reading Comics', desc: 'I love getting lost in graphic novels and manga. The artwork inspires me!' },
  { icon: 'Gamepad', title: 'Video Games', desc: 'Minecraft, Roblox, and puzzle games are my favorites. I love building things!' },
  { icon: 'Palette', title: 'Drawing & Art', desc: 'Sketching characters and doodling in my notebook during breaks.' },
  { icon: 'Flask', title: 'Science Experiments', desc: 'Doing fun experiments at home - volcanoes, slime, and crystal growing!' },
  { icon: 'Bike', title: 'Outdoor Adventures', desc: 'Cycling, exploring parks, and finding cool rocks and leaves.' },
  { icon: 'Music', title: 'Music & Dance', desc: 'Listening to upbeat songs and making up silly dance moves with friends.' },
];

const personalityTraits = [
  { trait: 'Curious', desc: 'Always asking "why?" and "how?" about everything around me.', color: '#B7D894' },
  { trait: 'Energetic', desc: 'Full of energy from morning till night - never a dull moment!', color: '#E0F8C7' },
  { trait: 'Creative', desc: 'Love making up stories, building things, and imagining new worlds.', color: '#B7D894' },
  { trait: 'Kind', desc: 'Believe in being nice to everyone and sharing my snacks (especially macaroni!).', color: '#E0F8C7' },
];

export function About({ className = '' }: AboutProps) {
  return (
    <section className={'about-section section ' + className} id="about" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #FFFFFF 0%, #B7D894 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Get to know the human behind the macaroni obsession!
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {personalityTraits.map((trait) => (
            <motion.div
              key={trait.trait}
              variants={cardVariants}
              style={{
                background: 'rgba(54, 65, 90, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(183, 216, 148, 0.2)',
                borderRadius: '20px',
                padding: '2rem',
                transition: 'all 0.4s ease',
              }}
              whileHover={{ y: -8, borderColor: trait.color, boxShadow: '0 20px 40px rgba(183, 216, 148, 0.15)' }}
            >
              <motion.span
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, ' + trait.color + ' 0%, ' + trait.color + 'CC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  fontFamily: '"Space Grotesk", sans-serif',
                  marginBottom: '0.75rem',
                }}
              >
                {trait.trait}
              </motion.span>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, margin: 0 }}>
                {trait.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {interests.map((interest, idx) => (
            <motion.div
              key={interest.title}
              variants={cardVariants}
              style={{
                background: 'rgba(54, 65, 90, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(183, 216, 148, 0.15)',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.4s ease',
              }}
              whileHover={{ y: -8, transform: 'scale(1.02)', borderColor: '#B7D894', boxShadow: '0 20px 40px rgba(183, 216, 148, 0.15)' }}
            >
              <motion.span
                style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3 + idx * 0.5, repeat: Infinity, delay: idx * 0.2 }}
              >
                {interest.icon}
              </motion.span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#FFFFFF' }}>
                {interest.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                {interest.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
