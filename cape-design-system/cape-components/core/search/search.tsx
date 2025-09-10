import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useOutsideClick } from '../hooks/use-outside-click';
import { useSearch } from './hooks/use-search';
import type { SearchProps } from './type';

/**
 * The Search component is used to search for any information and the results/suggestions
 * are displayed as a list in a results dropdown
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/34b998-search
 */
export const Search = forwardRef<HTMLDivElement, SearchProps>(
  ({ className, onOutsideClick, children, ...restProps }, ref) => {
    const resultsRef = useRef<HTMLDivElement>(null);
    const { ...rootProps } = useSearch({
      className,
      children,
      ...restProps,
    });

    useImperativeHandle(
      ref,
      () => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We are making sure that ref is handled.
        return resultsRef.current!;
      },
      [],
    );

    useOutsideClick(
      resultsRef,
      () => {
        onOutsideClick?.();
      },
      onOutsideClick && typeof onOutsideClick === 'function',
    );

    return (
      <div ref={resultsRef} {...rootProps}>
        {children}
      </div>
    );
  },
);

Search.displayName = 'Search';
