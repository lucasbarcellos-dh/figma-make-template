import { forwardRef } from 'react';
import type { PaginationProps } from './type';
import { usePagination } from './hooks/use-pagination';
import type { PaginationContextType } from './hooks/use-pagination-context';
import { PaginationContext } from './hooks/use-pagination-context';

/**
 * A Pagination can be used for navigating through the content which is listed under multiple pages
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/5739fc-pagination
 */
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ count, current = 1, onChange, children, ...restProps }, ref) => {
    const { rootProps } = usePagination({
      ...restProps,
    });

    const contextValues: PaginationContextType = {
      count,
      current,
      isFirst: current === 1,
      isLast: current === count,
      onChange,
    };

    return (
      <PaginationContext.Provider value={contextValues}>
        <div ref={ref} {...rootProps}>
          {children}
        </div>
      </PaginationContext.Provider>
    );
  },
);

Pagination.displayName = 'Pagination';
