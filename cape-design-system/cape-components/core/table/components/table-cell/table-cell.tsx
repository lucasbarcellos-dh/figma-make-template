import { forwardRef } from 'react';
import type { TableCellProps } from './type';
import { useTableCell } from './hooks/use-table-cell';

/**
 * Used within the `<Table>` component to define the cells of the table.
 */

const NAME = 'TableCell';

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useTableCell({
      ...restProps,
    });
    return (
      <td ref={ref} {...rootProps}>
        {children}
      </td>
    );
  },
);

TableCell.displayName = NAME;
