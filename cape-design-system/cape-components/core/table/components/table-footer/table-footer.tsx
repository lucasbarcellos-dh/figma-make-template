import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../table.module.scss';
import type { TableFooterProps } from './type';

/**
 * Used within the `<Table>` component to define the footer of the table.
 */

const NAME = 'TableFooter';

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ children, className, ...restProps }, ref) => {
  const classNames = useCombinedClassName({
    className: styles.footer,
    overrideClassName: className,
  });

  return (
    <tfoot ref={ref} {...restProps} className={classNames}>
      {children}
    </tfoot>
  );
});

TableFooter.displayName = NAME;
