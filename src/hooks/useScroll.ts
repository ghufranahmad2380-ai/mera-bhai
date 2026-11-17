import { useState, useEffect, useCallback } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
  direction: 'up' | 'down' | 'none';
  progress: number;
}

export function useScroll(): ScrollPosition {
  const [scrollPos, setScrollPos] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: 'none',
    progress: 0,
  });

  useEffect(() => {
    let lastY = 0;
    let ticking = false;

    const updateScroll = () => {
      const y = window.scrollY;
      const x = window.scrollX;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(y / maxScroll, 1);

      setScrollPos({
        x,
        y,
        direction: y > lastY ? 'down' : y < lastY ? 'up' : 'none',
        progress,
      });

      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrollPos;
}

export function useElementInView(
  options: IntersectionObserverInit = {}
): [React.RefObject<HTMLElement | null>, boolean] {
  const [isInView, setIsInView] = useState(false);
  const ref = useCallback((node: HTMLElement | null) => {
    if (node) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.1, rootMargin: '50px', ...options }
      );
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, []);

  return [ref, isInView];
}

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}