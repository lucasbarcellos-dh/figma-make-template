import { useEffect, useState } from 'react';

const getMatches = (query: string): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
};

/**
 * Subscribe and respond to media query changes with useMediaQuery.
 *
 * @remarks
 * The useMediaQuery hook leverages the window.matchMedia API to subscribe to CSS media query changes, thereby providing real-time responsiveness to dynamic changes in the viewport or screen orientation.
 * It allows the component to rerender whenever the media query’s result changes.
 * It throws an error if attempted to be used on the server-side (media queries only work in the browser).
 *
 * @param query - The media query to listen changes
 * @returns a boolean value indicating whether the media query matches the current state of the device.
 *
 * @example
 * ```
 * const isSmallDevice = useMediaQuery("(max-width : 768px)");
 * const isMediumDevice = useMediaQuery("(min-width : 769px) and (max-width : 992px)");
 * const isLargeDevice = useMediaQuery("(min-width : 993px)");
 * ```
 *
 * @see {@link https://usehooks-ts.com/react-hook/use-media-query}
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    function handleChange(): void {
      setMatches(getMatches(query));
    }
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}
