'use client';

import { motion } from 'framer-motion';

interface BackgroundAnimationProps {
  className?: string;
}

const photos = [
  '/zain1.jpeg',
  '/zain2.jpeg',
  '/zain3.jpeg',
  '/zain4.jpeg',
  '/zain5.jpeg',
];

const shapes = [
  { type: 'circle', size: 80, color: 'rgba(183, 216, 148, 0.15)' },
  { type: 'circle', size: 120, color: 'rgba(183, 216, 148, 0.1)' },
  { type: 'square', size: 60, color: 'rgba(224, 248, 199, 0.1)' },
  { type: 'circle', size: 200, color: 'rgba(183, 216, 148, 0.05)' },
  { type: 'triangle', size: 90, color: 'rgba(224, 248, 199, 0.08)' },
];

export function BackgroundAnimation({ className = '' }: BackgroundAnimationProps) {
  return (
    <div className={'background-animation ' + className} style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', pointerEvents: 'none' }}>
      <motion.div
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 20%, rgba(183, 216, 148, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(224, 248, 199, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(54, 65, 90, 0.3) 0%, transparent 70%)' }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {photos.map((photo, i) => (
        <motion.img
          key={photo}
          src={photo}
          alt={'Zain photo ' + (i + 1)}
          style={{
            position: 'absolute',
            width: '180px',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '16px',
            opacity: 0.15,
            filter: 'blur(1px)',
            top: 10 + i * 18 + '%',
            left: 5 + (i * 15) % 70 + '%',
            border: '2px solid rgba(183, 216, 148, 0.2)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
          }}
          animate={{
            y: [0, -30 * (i % 3 + 1), 0],
            x: [0, 20 * ((i + 1) % 3 - 1), 0],
            rotate: [0, 5 * (i % 2 === 0 ? 1 : -1), 0],
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}
      
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: shape.size,
            height: shape.size,
            background: shape.color,
            borderRadius: shape.type === 'circle' ? '50%' : shape.type === 'square' ? '8px' : '0',
            clipPath: shape.type === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            top: 5 + i * 20 + '%',
            left: 10 + i * 18 + '%',
          }}
          animate={{
            y: [0, -40 * (i % 2 + 1), 0],
            x: [0, 30 * (i % 3 - 1), 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 1.2,
          }}
        />
      ))}
      
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 10% 10%, rgba(183, 216, 148, 0.03) 0%, transparent 30%), radial-gradient(circle at 90% 90%, rgba(224, 248, 199, 0.02) 0%, transparent 30%), radial-gradient(circle at 50% 50%, rgba(54, 65, 90, 0.2) 0%, transparent 60%)',
        }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
