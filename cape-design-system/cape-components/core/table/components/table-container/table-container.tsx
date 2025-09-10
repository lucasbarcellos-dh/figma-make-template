import { forwardRef } from 'react';
import type { TableContainerProps } from './type';
import { useTableContainer } from './hooks/use-table-container';
/**
 * Used to wrap the `<Table>` component.
 */

const NAME = 'TableContainer';

export const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  ({ children, ...restProps }, ref) => {
    const { rootProps } = useTableContainer({
      ...restProps,
    });

    return (
      <div ref={ref} {...rootProps}>
        {children}
      </div>
    );
  },
);

TableContainer.displayName = NAME;
