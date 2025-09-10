import { forwardRef } from 'react';
import type { ListProps } from './type';
import { useList } from './hooks/use-list';
import { ListContext } from './context';

/**
 * A List component organizes and displays a set of related items as a vertical group.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/06cae6-list/b/4333f7
 */
export const List = forwardRef<HTMLUListElement, ListProps>(
  ({ divider = true, size = 'medium', children, ...restProps }, ref) => {
    const { rootProps, listContextProps } = useList({
      divider,
      size,
      ...restProps,
    });

    return (
      <ListContext.Provider value={listContextProps}>
        <ul ref={ref} {...rootProps}>
          {children}
        </ul>
      </ListContext.Provider>
    );
  },
);

List.displayName = 'List';
