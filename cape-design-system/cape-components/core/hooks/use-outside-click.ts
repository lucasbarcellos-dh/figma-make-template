import type { RefObject } from 'react';
import { useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
  enabled = true,
): void => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mouseup', handleClickOutside);
    document.addEventListener('touchend', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
      document.removeEventListener('touchend', handleClickOutside);
    };
  }, [handler, ref, enabled]);
};
