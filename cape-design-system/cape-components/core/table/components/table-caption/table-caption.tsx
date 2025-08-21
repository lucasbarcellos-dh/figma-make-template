import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../table.module.scss';
import type { TableCaptionProps } from './type';

/**
 * Used within the `<Table>` component to define the caption of the table.
 */

const NAME = 'TableCaption';

export const TableCaption = forwardRef<
  HTMLTableCaptionElement,
  TableCaptionProps
>(({ children, ...restProps }, ref) => {
  const classNames = useCombinedClassName({
    className: styles.caption,
    overrideClassName: restProps.className,
  });

  return (
    <caption ref={ref} {...restProps} className={classNames}>
      {children}
    </caption>
  );
});

TableCaption.displayName = NAME;
