'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface GalleryProps {
  className?: string;
}

const photos = [
  { src: '/zain1.jpeg', alt: 'Zain smiling', caption: 'Big smile day!' },
  { src: '/zain2.jpeg', alt: 'Zain having fun', caption: 'Adventure time' },
  { src: '/zain3.jpeg', alt: 'Zain being curious', caption: 'Curious explorer' },
  { src: '/zain4.jpeg', alt: 'Zain happy', caption: 'Pure joy moment' },
  { src: '/zain5.jpeg', alt: 'Zain playful', caption: 'Playful spirit' },
];

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

export function Gallery({ className = '' }: GalleryProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className={'gallery-section section ' + className} id="gallery" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #FFFFFF 0%, #B7D894 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            My Gallery
          </motion.h2>
          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            A collection of my favorite moments captured on camera
          </motion.p>
        </motion.div>

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            perspective: '1000px',
          }}
        >
{photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              variants={itemVariants}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: expandedIndex === i ? 'default' : 'pointer',
                background: 'rgba(54, 65, 90, 0.6)',
                border: '1px solid rgba(183, 216, 148, 0.2)',
              }}
              whileHover={expandedIndex !== i ? { y: -10, scale: 1.02, borderColor: '#B7D894', boxShadow: '0 30px 60px rgba(183, 216, 148, 0.2)' } : {}}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            >
              <motion.img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: '100%',
                  height: '280px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), filter 0.6s ease',
                }}
                whileHover={expandedIndex !== i ? { scale: 1.1, filter: 'brightness(1.1)' } : {}}
              />
              <motion.div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 40%, rgba(32,39,52,0.95) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.5rem',
                }}
              >
                <motion.h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.25rem', color: '#FFFFFF' }}>
                  {photo.caption}
                </motion.h3>
                <motion.p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
                  Click to view fullsize
                </motion.p>
              </motion.div>
              
              {expandedIndex === i && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 100,
                    background: 'rgba(32, 39, 52, 0.98)',
                    backdropFilter: 'blur(20px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem',
                  }}
                  onClick={() => setExpandedIndex(null)}
                >
                  <motion.div
                    style={{
                      position: 'relative',
                      maxWidth: '90vw',
                      maxHeight: '90vh',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      style={{
                        width: 'auto',
                        maxWidth: '90vw',
                        maxHeight: '80vh',
                        objectFit: 'contain',
                        display: 'block',
                        borderRadius: '16px',
                      }}
                    />
                    <motion.button
                      whileHover={{ scale: 1.1, background: '#B7D894' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setExpandedIndex(null)}
                      style={{
                        position: 'absolute',
                        top: '16px',
                        right: '16px',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        background: 'rgba(32,39,52,0.9)',
                        border: '1px solid rgba(183,216,148,0.3)',
                        color: '#B7D894',
                        fontSize: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        backdropFilter: 'blur(10px)',
                        zIndex: 10,
                      }}
                    >
                      x
                    </motion.button>
                    <motion.div
                      style={{
                        position: 'absolute',
                        bottom: '-60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '1rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {photo.caption}
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
