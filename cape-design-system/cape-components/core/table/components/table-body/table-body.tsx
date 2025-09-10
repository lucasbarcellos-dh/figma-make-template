import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../table.module.scss';
import type { TableBodyProps } from './type';

/**
 * Used within the `<Table>` component to define the body of the table.
 */

const NAME = 'TableBody';

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, ...restProps }, ref) => {
    const classNames = useCombinedClassName({
      className: styles.body,
      overrideClassName: className,
    });

    return (
      <tbody ref={ref} {...restProps} className={classNames}>
        {children}
      </tbody>
    );
  },
);

TableBody.displayName = NAME;
