import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../table.module.scss';
import type { TableRowProps } from './type';

/**
 * Used within the `<Table>` component to define the rows of the table.
 */

const NAME = 'TableRow';

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, disabled, selected, className, ...restProps }, ref) => {
    const classNames = useCombinedClassName({
      className: styles.row,
      overrideClassName: className,
    });

    return (
      <tr
        ref={ref}
        {...restProps}
        className={classNames}
        data-disabled={disabled || undefined}
        data-selected={selected || undefined}
      >
        {children}
      </tr>
    );
  },
);

TableRow.displayName = NAME;
