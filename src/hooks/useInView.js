"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Observa um elemento e retorna `true` quando ele entra na viewport.
 * Dispara uma única vez (ideal para animações de revelação no scroll).
 * Respeita `prefers-reduced-motion`: se o usuário pedir menos movimento,
 * já retorna visível de imediato, sem animar.
 *
 * @param {Object} [options]
 * @param {number} [options.threshold=0.2] Fração visível para disparar.
 * @param {string} [options.rootMargin="0px 0px -10% 0px"] Margem do root.
 * @returns {[React.RefObject, boolean]} [ref, inView]
 */
export default function useInView({
  threshold = 0.2,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
}
