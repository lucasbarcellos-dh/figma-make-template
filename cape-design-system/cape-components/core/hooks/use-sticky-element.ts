import { useEffect, useImperativeHandle, useRef, useState } from 'react';

interface UseStickyElementReturn {
  stuck: boolean;
  stickyElementRef: React.RefObject<HTMLElement>;
}

/**
 * Custom hook to handle "sticky" behavior of an element based on its position in the viewport.
 * @param sticky - Flag to enable or disable the sticky functionality.
 * @param ref - external ref for the sticky element.
 * @returns stuck state indicating whether the element is currently "stuck" in the viewport.
 * @returns stickyElementRef a ref for the sticky element if there are no external ref defined.
 */
export const useStickyElement = (
  sticky: boolean,
  ref?: React.RefObject<HTMLElement>,
): UseStickyElementReturn => {
  const [stuck, setStuck] = useState<boolean>(false);
  const stickyElementRef = useRef<HTMLElement>(null);

  useImperativeHandle(
    ref,
    () => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We are making sure that ref is handled.
      return stickyElementRef.current!;
    },
    [],
  );

  useEffect(() => {
    if (!sticky || !stickyElementRef.current) return;
    const el = stickyElementRef.current;

    const observer = new IntersectionObserver(
      ([e]) => {
        if (!e) return;
        setStuck(e.intersectionRatio < 1);
      },
      { threshold: [1] },
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [sticky, stickyElementRef]);

  return { stuck, stickyElementRef };
};
