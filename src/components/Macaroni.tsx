'use client';

import { motion } from 'framer-motion';

interface MacaroniProps {
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

const macaroniImages = [
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
  'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80',
  'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80',
  'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=800&q=80',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80',
  'https://images.unsplash.com/photo-1615937699228-6d2a8c24e1de?w=800&q=80',
];

const funFacts = [
  { icon: 'Cheese', title: 'Cheese Pulls', desc: 'The longer the cheese pull, the better the macaroni!' },
  { icon: 'Pasta', title: 'Shape Matters', desc: 'Elbow macaroni holds the most cheese sauce - science!' },
  { icon: 'Fire', title: 'Baked is Best', desc: 'That crispy golden top layer? Chef kiss perfection!' },
  { icon: 'Clock', title: 'Anytime Food', desc: 'Breakfast, lunch, dinner, or midnight snack - always yes!' },
  { icon: 'Chef', title: 'Secret Recipe', desc: 'Extra cheese, breadcrumbs on top, baked till golden!' },
  { icon: 'Heart', title: 'Comfort Food', desc: 'One bowl fixes any bad day - guaranteed happiness!' },
];
export function Macaroni({ className = '' }: MacaroniProps) {
  return (
    <section className={'macaroni-section section ' + className} id="macaroni" style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {macaroniImages.slice(0, 8).map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Macaroni decoration"
            style={{
              position: 'absolute',
              width: 80 + (i % 3) * 40,
              height: 80 + (i % 3) * 40,
              objectFit: 'cover',
              borderRadius: '16px',
              opacity: 0.08,
              top: 10 + i * 12 + '%',
              left: 5 + (i * 17) % 85 + '%',
              filter: 'drop-shadow(0 10px 30px rgba(183, 216, 148, 0.2))',
            }}
            animate={{
              y: [0, -30 - (i % 3) * 15, 0],
              x: [0, 20 * (i % 2 === 0 ? 1 : -1), 0],
              rotate: [0, 8 * (i % 2 === 0 ? 1 : -1), 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.7,
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #E0F8C7 0%, #B7D894 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            My Love for Macaroni! Pasta
          </motion.h2>
          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Why this cheesy goodness is the ultimate comfort food
          </motion.p>
        </motion.div>

        <motion.div variants={cardVariants} style={{ marginBottom: '4rem', borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: '0 30px 60px rgba(0,0,0,0.4), 0 0 100px rgba(183, 216, 148, 0.2)' }}>
          <img
            src={macaroniImages[0]}
            alt="Delicious baked macaroni and cheese"
            style={{ width: '100%', height: 'auto', maxHeight: '450px', objectFit: 'cover', display: 'block', borderRadius: '24px' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(32,39,52,0.9) 100%)', borderRadius: '24px', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.span
              style={{ background: 'rgba(183, 216, 148, 0.2)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '30px', fontSize: '1rem', color: '#E0F8C7', border: '1px solid rgba(183,216,148,0.4)', fontWeight: 600 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ultimate Comfort Food
            </motion.span>
            <motion.span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '30px', fontSize: '1rem', color: '#E0F8C7', border: '1px solid rgba(183,216,148,0.3)' }}>
              Made with Extra Cheese
            </motion.span>
            <motion.span style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '30px', fontSize: '1rem', color: '#E0F8C7', border: '1px solid rgba(183,216,148,0.3)' }}>
              Baked to Perfection
            </motion.span>
          </div>
        </motion.div>
<motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center' }}>
          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Let me tell you a secret: <strong style={{ color: '#B7D894' }}>macaroni is not just food, it is a lifestyle!</strong> 
            There is something magical about those little elbow pasta tubes swimming in a sea of creamy, melty cheese sauce. 
            Every bite is like a warm hug for your taste buds!
          </motion.p>
          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            My perfect macaroni has <span style={{ color: '#E0F8C7' }}>THREE kinds of cheese</span> (cheddar for sharpness, mozzarella for the stretch, and parmesan for that umami kick), 
            a crunchy <span style={{ color: '#E0F8C7' }}>breadcrumb topping</span>, and it is baked until the edges get all crispy and golden. 
            The cheese pull? <strong style={{ color: '#B7D894' }}>Infinite.</strong>
          </motion.p>
          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8 }}>
            Whether it is a celebration, a rough day at school, or just a Tuesday - macaroni is always the answer. 
            My mom makes the best one, but I am learning to make it myself too! 
            <strong style={{ color: '#B7D894' }}>Future chef in training!</strong>
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {funFacts.map((fact, i) => (
            <motion.div
              key={fact.title}
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
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.15 }}
              >
                {fact.icon}
              </motion.span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#FFFFFF' }}>
                {fact.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                {fact.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h3 variants={itemVariants} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '2rem', textAlign: 'center', color: '#E0F8C7' }}>
            Macaroni Inspiration Gallery
          </motion.h3>
          <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {macaroniImages.slice(1).map((img, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  aspectRatio: '1',
                  background: 'rgba(54, 65, 90, 0.6)',
                  border: '1px solid rgba(183, 216, 148, 0.15)',
                }}
                whileHover={{ y: -8, scale: 1.03, borderColor: '#B7D894', boxShadow: '0 20px 40px rgba(183, 216, 148, 0.2)' }}
              >
                <img
                  src={img}
                  alt={'Macaroni dish ' + (i + 1)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(32,39,52,0.8) 100%)', borderRadius: '16px', pointerEvents: 'none' }} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
