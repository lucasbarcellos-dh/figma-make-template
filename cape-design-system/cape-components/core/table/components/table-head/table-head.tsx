import { forwardRef } from 'react';
import { useTableHead } from './hooks/use-table-head';
import type { TableHeadProps } from './type';

/**
 * Used within the `<Table>` component to define the cells of the thead.
 */

const NAME = 'TableHead';

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useTableHead({
      ...restProps,
    });

    return (
      <th ref={ref} {...rootProps}>
        {children}
      </th>
    );
  },
);

TableHead.displayName = NAME;
