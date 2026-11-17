'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { ScratchReveal } from './ScratchReveal';

interface FunZoneProps {
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
export function FunZone({ className = '' }: FunZoneProps) {
  const [isHovering, setIsHovering] = useState(false);
  
  const cards = [
    { title: 'Scratch & Reveal', desc: 'Scratch the surface to uncover a hidden surprise!', emoji: 'Art', type: 'scratch' },
    { title: 'Parallax Cards', desc: 'Move your mouse to see the 3D tilt effect!', emoji: 'Cards', type: 'parallax' },
    { title: 'Floating Particles', desc: 'Watch the particles dance around your cursor!', emoji: 'Sparkles', type: 'particles' },
    { title: 'Color Wave', desc: 'Click anywhere to create a color ripple!', emoji: 'Waves', type: 'wave' },
  ];

  return (
    <section className={'funzone-section section ' + className} id="funzone" style={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: 4 + (i % 4) * 3,
              height: 4 + (i % 4) * 3,
              borderRadius: '50%',
              background: i % 3 === 0 ? '#B7D894' : i % 3 === 1 ? '#E0F8C7' : 'rgba(183, 216, 148, 0.5)',
              top: 10 + i * 4.5 + '%',
              left: 5 + (i * 13) % 90 + '%',
              opacity: 0.3 + (i % 3) * 0.2,
              filter: 'blur(0.5px)',
            }}
            animate={{
              y: [0, -50 - (i % 3) * 20, 0],
              x: [0, 30 * (i % 2 === 0 ? 1 : -1), 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2 variants={itemVariants} style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '1rem', background: 'linear-gradient(135deg, #E0F8C7 0%, #B7D894 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Fun Zone! Game
          </motion.h2>
          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(1.125rem, 2vw, 1.25rem)', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto' }}>
            Interactive playground - hover, click, and play around!
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              style={{
                background: 'rgba(54, 65, 90, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(183, 216, 148, 0.15)',
                borderRadius: '20px',
                padding: '2rem',
                transition: 'all 0.4s ease',
              }}
              whileHover={{ y: -8, borderColor: '#B7D894', boxShadow: '0 20px 40px rgba(183, 216, 148, 0.15)' }}
            >
              <motion.span
                style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3 + i * 0.3, repeat: Infinity, delay: i * 0.15 }}
              >
                {card.emoji}
              </motion.span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem', color: '#FFFFFF' }}>
                {card.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, fontSize: '0.95rem' }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ marginBottom: '4rem' }}>
          <motion.h3 variants={itemVariants} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center', color: '#E0F8C7' }}>
            Scratch Reveal Demo
          </motion.h3>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <ScratchReveal
              revealImage="https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80"
              height="350px"
              brushSize={60}
              revealThreshold={50}
              alt="Scratch to reveal delicious macaroni"
            />
          </div>
        </motion.div>
<motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ marginBottom: '4rem' }}>
          <motion.h3 variants={itemVariants} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center', color: '#E0F8C7' }}>
            Parallax Tilt Cards
          </motion.h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=400&q=80', title: 'Cheesy Delight' },
              { img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80', title: 'Perfect Pull' },
              { img: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=400&q=80', title: 'Golden Crust' },
            ].map((item, i) => (
              <ParallaxCard key={i} image={item.img} title={item.title} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.h3 variants={itemVariants} style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, marginBottom: '1.5rem', textAlign: 'center', color: '#E0F8C7' }}>
            Color Wave Click Effect
          </motion.h3>
          <ColorWaveCanvas />
        </motion.div>
      </div>
    </section>
  );
}
function ParallaxCard({ image, title, index }: { image: string; title: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const rotateX = useTransform(y, [-1, 1], ['10deg', '-10deg']);
  const rotateY = useTransform(x, [-1, 1], ['-10deg', '10deg']);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) / (rect.width / 2));
      y.set((e.clientY - centerY) / (rect.height / 2));
    };

    const handleLeave = () => {
      x.set(0);
      y.set(0);
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        aspectRatio: '4/3',
        background: 'rgba(54, 65, 90, 0.6)',
        border: '1px solid rgba(183, 216, 148, 0.15)',
        cursor: 'pointer',
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ z: 50, boxShadow: '0 30px 60px rgba(183, 216, 148, 0.2)' }}
    >
      <motion.img
        src={image}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transformStyle: 'preserve-3d',
          transform: 'rotateX(' + rotateX.get() + 'deg) rotateY(' + rotateY.get() + 'deg) scale(1.1)',
          transition: 'transform 0.1s linear',
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, transparent 50%, rgba(32,39,52,0.9) 100%)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1.5rem',
        }}
      >
        <motion.h4 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#FFFFFF', transform: 'translateZ(20px)' }}>
          {title}
        </motion.h4>
      </motion.div>
    </motion.div>
  );
}

function ColorWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [waves, setWaves] = useState<Array<{ x: number; y: number; radius: number; color: string; life: number }>>([]);

  const colors = ['#B7D894', '#E0F8C7', '#FFFFFF', '#36415A'];

  const createWave = (x: number, y: number) => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const newWave = { x, y, radius: 0, color, life: 1 };
    setWaves(prev => [...prev, newWave]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    let animationId: number;
    const animate = () => {
      const rect = parent.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      setWaves(prev => {
        const updated = prev.map(w => ({
          ...w,
          radius: w.radius + 2,
          life: w.life - 0.015,
        })).filter(w => w.life > 0);

        updated.forEach(w => {
          ctx.beginPath();
          ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
          ctx.strokeStyle = w.color;
          ctx.globalAlpha = w.life * 0.8;
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.globalAlpha = 1;
        });

        return updated;
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [waves]);

  return (
    <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: 'rgba(54, 65, 90, 0.4)', border: '1px solid rgba(183, 216, 148, 0.15)', cursor: 'crosshair' }}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        createWave(e.clientX - rect.left, e.clientY - rect.top);
      }}
    >
      <canvas ref={canvasRef} style={{ width: '100%', height: '300px', display: 'block', touchAction: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', color: 'rgba(255,255,255,0.4)', fontSize: '1rem', fontFamily: '"Space Grotesk", sans-serif' }}>
        Click anywhere to create waves
      </div>
    </div>
  );
}
