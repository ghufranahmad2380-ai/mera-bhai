'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ScratchRevealProps {
  revealImage: string;
  coverImage?: string;
  width?: number | string;
  height?: number | string;
  brushSize?: number;
  revealThreshold?: number;
  onReveal?: () => void;
  className?: string;
  alt?: string;
}
export function ScratchReveal({
  revealImage,
  coverImage,
  width = '100%',
  height = '400px',
  brushSize = 50,
  revealThreshold = 60,
  onReveal,
  className = '',
  alt = 'Scratch to reveal',
}: ScratchRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const revealImgRef = useRef<HTMLImageElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const [scratchedPercent, setScratchedPercent] = useState(0);
  const revealedCalled = useRef(false);
useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.parentElement?.clientWidth || 800;
    const h = canvas.parentElement?.clientHeight || 400;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(dpr, dpr);
const drawCover = () => {
      ctx.clearRect(0, 0, w, h);
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, '#36415A');
      g.addColorStop(0.5, '#202734');
      g.addColorStop(1, '#36415A');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = 'rgba(183, 216, 148, 0.05)';
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = Math.random() * 3 + 1;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = 'rgba(255,255,255,0.3)';
      ctx.font = 'bold 24px "Space Grotesk", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Scratch to Reveal', w / 2, h / 2);
    };
    drawCover();

    if (revealImage) {
      revealImgRef.current = new Image();
      revealImgRef.current.crossOrigin = 'anonymous';
      revealImgRef.current.src = revealImage;
    }

    const onResize = () => {
      const nw = canvas.parentElement?.clientWidth || 800;
      const nh = canvas.parentElement?.clientHeight || 400;
      const dpr = window.devicePixelRatio || 1;
      const data = ctx.getImageData(0, 0, canvas.width / dpr, canvas.height / dpr);
      canvas.width = nw * dpr;
      canvas.height = nh * dpr;
      canvas.style.width = nw + 'px';
      canvas.style.height = nh + 'px';
      ctx.scale(dpr, dpr);
      ctx.putImageData(data, 0, 0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [coverImage, revealImage]);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const cx = (x - rect.left) * dpr;
    const cy = (y - rect.top) * dpr;
    const bs = brushSize * dpr;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(cx, cy, bs, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    if (revealImgRef.current?.complete) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, bs, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(revealImgRef.current, 0, 0, rect.width, rect.height);
      ctx.restore();
    }

    const data = ctx.getImageData(0, 0, rect.width * dpr, rect.height * dpr);
    let tp = 0;
    const tot = data.data.length / 4;
    for (let i = 3; i < data.data.length; i += 4) if (data.data[i] < 128) tp++;
    const pct = Math.round((tp / tot) * 100);
    setScratchedPercent(pct);
    if (pct >= revealThreshold && !isRevealed && !revealedCalled.current) {
      revealedCalled.current = true;
      setIsRevealed(true);
      onReveal?.();
    }
  }, [brushSize, revealThreshold, isRevealed, onReveal]);
const md = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => { setIsScratching(true); scratch(e.nativeEvent.clientX, e.nativeEvent.clientY); }, [scratch]);
  const mm = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => { if (isScratching) scratch(e.nativeEvent.clientX, e.nativeEvent.clientY); }, [isScratching, scratch]);
  const mu = useCallback(() => setIsScratching(false), []);
  const ts = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => { e.preventDefault(); setIsScratching(true); scratch(e.touches[0].clientX, e.touches[0].clientY); }, [scratch]);
  const tm = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => { e.preventDefault(); if (isScratching) scratch(e.touches[0].clientX, e.touches[0].clientY); }, [isScratching, scratch]);
  const te = useCallback(() => setIsScratching(false), []);

  return (
    <div className={'scratch-reveal-container ' + className} style={{ width, height, position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: 'url(' + revealImage + ')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: isRevealed ? 1 : 0, transition: 'opacity 0.8s ease-out', borderRadius: '16px' }} aria-hidden="true" />
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 2, borderRadius: '16px', cursor: isScratching ? 'none' : 'crosshair', touchAction: 'none' }} onMouseDown={md} onMouseMove={mm} onMouseUp={mu} onMouseLeave={mu} onTouchStart={ts} onTouchMove={tm} onTouchEnd={te} aria-label={alt} role="img" />
      {!isRevealed && (
        <motion.div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', pointerEvents: 'none' }} animate={{ opacity: [0.5, 1, 0.5], y: [0, -5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <span style={{ background: 'rgba(32,39,52,0.9)', color: '#B7D894', padding: '8px 16px', borderRadius: '20px', fontSize: '14px', fontFamily: '"Space Grotesk",sans-serif', fontWeight: 500, backdropFilter: 'blur(10px)', border: '1px solid rgba(183,216,148,0.3)' }}>Scratch to reveal</span>
          <motion.div style={{ width: '40px', height: '40px', border: '2px solid #B7D894', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(32,39,52,0.8)' }} animate={{ rotate: [0, -15, 15, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>+</motion.div>
        </motion.div>
      )}
      <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 4, background: 'rgba(32,39,52,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(183,216,148,0.3)', borderRadius: '12px', padding: '8px 12px', fontFamily: '"Space Grotesk",sans-serif', fontSize: '13px', fontWeight: 600, color: '#B7D894', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>{scratchedPercent}%</span>
        <motion.div style={{ width: '60px', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
          <motion.div style={{ width: scratchedPercent + '%', height: '100%', background: 'linear-gradient(90deg, #B7D894, #E0F8C7)', borderRadius: '3px' }} animate={{ width: scratchedPercent + '%' }} transition={{ type: 'spring', stiffness: 100, damping: 15 }} />
        </motion.div>
      </div>
    </div>
  );
}
