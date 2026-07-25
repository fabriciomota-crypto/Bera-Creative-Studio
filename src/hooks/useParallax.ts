import { useEffect, useRef, useState } from 'react';

/**
 * Subtle scroll parallax — offsets an element by a small amount as it
 * passes through the viewport, so it appears to move at a different speed
 * than normal page scroll. Kept in the same "near-invisible" motion
 * register as the rest of the site: a few pixels, no bounce, disabled
 * entirely under prefers-reduced-motion.
 *
 * @param strength max pixel offset at the extremes of the viewport pass (default 24px)
 */
export function useParallax<T extends HTMLElement>(strength = 24) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Normalized position of the element's center relative to viewport
      // center, from -1 (top of screen) to 1 (bottom of screen).
      const centerDelta = (rect.top + rect.height / 2 - viewportH / 2) / (viewportH / 2);
      setOffset(Math.max(-1, Math.min(1, centerDelta)) * strength);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [strength]);

  return { ref, offset };
}
