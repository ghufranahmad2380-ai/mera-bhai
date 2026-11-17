'use client';

import { motion } from 'framer-motion';

interface FloatingElementsProps {
  className?: string;
  count?: number;
}

const emojis = ['🍝', '🧀', '🍝', '🍴', '😋', '🍝', '🧀', '✨', '🌟', '🎉'];

export function FloatingElements({ className = '', count = 15 }: FloatingElementsProps) {
  const items = Array.from({ length: count }, (_, i) => ({
    emoji: emojis[i % emojis.length],
    delay: i * 0.3,
    duration: 8 + (i % 4) * 2,
    size: 20 + (i % 3) * 12,
    x: (i * 73) % 100,
    y: (i * 37) % 100,
  }));

  return (
    <div className={'floating-elements ' + className} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          style={{
            position: 'absolute',
            fontSize: item.size,
            left: item.x + '%',
            top: item.y + '%',
            filter: 'drop-shadow(0 4px 12px rgba(183, 216, 148, 0.4))',
            userSelect: 'none',
          }}
          animate={{
            y: [0, -40 - (i % 3) * 20, 0],
            x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
            rotate: [0, 15 * (i % 2 === 0 ? 1 : -1), 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: item.delay,
          }}
        >
          {item.emoji}
        </motion.span>
      ))}
    </div>
  );
}
