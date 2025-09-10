import { useRef, useEffect } from 'react';

/**
 * Custom hook to manage scroll locking for Backdrop, Modal, Drawer or similar components.
 *
 * @example
 * ```
 * const [blockScroll, allowScroll] = useScrollBlock();
 * ```
 *
 * @see {@link https://gist.github.com/reecelucas/2f510e6b8504008deaaa52732202d2da}
 */
export function useScrollBlock(): [() => void, () => void] {
  const scrollBlocked = useRef(false);
  const isBrowser = typeof document !== 'undefined';
  const { body, documentElement: html } = isBrowser
    ? document
    : ({} as Document);

  const blockScroll = (): void => {
    if (!isBrowser && scrollBlocked.current) {
      return;
    }

    const scrollBarWidth = window.innerWidth - (html.clientWidth || 0);
    const bodyPaddingRight =
      parseInt(
        window.getComputedStyle(body).getPropertyValue('padding-right'),
      ) || 0;

    // Fix for iOS and desktop Safari where `overflow: hidden` doesn't always work
    html.style.position = 'relative';
    html.style.overflow = 'hidden';
    body.style.position = 'relative';
    body.style.overflow = 'hidden';
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

    scrollBlocked.current = true;
  };

  const allowScroll = (): void => {
    if (!isBrowser && !scrollBlocked.current) {
      return;
    }

    html.style.position = '';
    html.style.overflow = '';
    body.style.position = '';
    body.style.overflow = '';
    body.style.paddingRight = '';

    scrollBlocked.current = false;
  };

  // Cleanup: Unlock scroll when the component unmounts
  useEffect(() => {
    return () => {
      if (scrollBlocked.current) {
        allowScroll();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Don't need a dependency here
  }, []);

  return [blockScroll, allowScroll];
}
