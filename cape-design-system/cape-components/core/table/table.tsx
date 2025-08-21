import { forwardRef } from 'react';
import type { TableProps } from './type';
import { useTable } from './hooks/use-table';

/**
 * Table components are great for displaying tons of data in a tidy way.
 * They have lots of useful features like sticky headers, small screen support,
 * and can be used with filters which can make the data easy to find and understand.
 *
 * @see Docs https://cape.deliveryhero.com/2bfa22855/p/71d5fb-table
 */

const NAME = 'Table';

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useTable({
      ...restProps,
    });

    return (
      <table ref={ref} {...rootProps}>
        {children}
      </table>
    );
  },
);

Table.displayName = NAME;
