import { forwardRef } from 'react';
import { usePaginationItem } from './hooks/use-pagination-item';
import type { PaginationItemProps } from './type';

/**
 * PaginationItem is children of PaginationItems
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/5739fc-pagination
 */
export const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ ellipsis, value, ...restProps }, ref) => {
    const { rootProps, contentProps } = usePaginationItem({
      value,
      ...restProps,
    });

    return (
      <li ref={ref} {...rootProps}>
        {ellipsis ? (
          '...'
        ) : (
          <button tabIndex={0} type="button" {...contentProps}>
            {value}
          </button>
        )}
      </li>
    );
  },
);

PaginationItem.displayName = 'PaginationItem';
