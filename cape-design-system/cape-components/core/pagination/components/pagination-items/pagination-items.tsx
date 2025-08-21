import { forwardRef } from 'react';
import type { PaginationItemsProps } from './type';
import { usePaginationItems } from './hooks/use-pagination-items';
import { PaginationItem } from './pagination-item';

/**
 * PaginationItems is children of Pagination
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/5739fc-pagination
 */
export const PaginationItems = forwardRef<
  HTMLUListElement,
  PaginationItemsProps
>((props, ref) => {
  const { rootProps, items } = usePaginationItems(props);

  return (
    <nav aria-label="Pagination" ref={ref} {...rootProps}>
      <ul>
        {items.map(({ value, key, ...rest }) => (
          <PaginationItem key={key} value={value} {...rest} />
        ))}
      </ul>
    </nav>
  );
});

PaginationItems.displayName = 'PaginationItems';
