import { useEffect, useRef } from 'react';

export const useScrollReveal = (threshold = 0.1, activeClass = 'visible') => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(activeClass);
          }
        });
      },
      { threshold }
    );

    const reveals = containerRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, activeClass]);

  return containerRef;
};
