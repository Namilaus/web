import { useEffect, useRef } from 'react';

/**
 * Tracks the pointer (and scroll) over a section and writes normalised
 * offsets to CSS custom properties on the element:
 *   --pointer-x / --pointer-y   range roughly [-1, 1], 0 = centre
 *   --scroll-y                  px the section has scrolled past the top
 *
 * Updates are coalesced into a single rAF frame, and the listeners are
 * skipped entirely when the user prefers reduced motion.
 */
export const usePointerParallax = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches) return;

    let frame = 0;
    let px = 0;
    let py = 0;
    let sy = 0;

    const apply = () => {
      frame = 0;
      el.style.setProperty('--pointer-x', px.toFixed(4));
      el.style.setProperty('--pointer-y', py.toFixed(4));
      el.style.setProperty('--scroll-y', `${sy.toFixed(1)}px`);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      px = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      py = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      schedule();
    };

    const onScroll = () => {
      sy = Math.max(0, -el.getBoundingClientRect().top);
      schedule();
    };

    const onLeave = () => {
      px = 0;
      py = 0;
      schedule();
    };

    el.addEventListener('pointermove', onPointerMove, { passive: true });
    el.addEventListener('pointerleave', onLeave, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      el.removeEventListener('pointermove', onPointerMove);
      el.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return ref;
};
