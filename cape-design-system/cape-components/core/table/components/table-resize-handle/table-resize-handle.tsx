import { forwardRef } from 'react';
import { useCombinedClassName } from '../../../common/hooks';
import styles from '../../table.module.scss';
import type { TableResizeHandleProps } from './type';

/**
 * Used within the `<Table>` component to create a resize handle.
 */

const NAME = 'TableResizeHandle';

export const TableResizeHandle = forwardRef<
  HTMLSpanElement,
  TableResizeHandleProps
>(({ resizing, dir, ...restProps }, ref) => {
  const classNames = useCombinedClassName({
    className: styles.resize,
    overrideClassName: restProps.className,
  });

  return (
    <span
      data-resizing={resizing || undefined}
      dir={dir || undefined}
      ref={ref}
      {...restProps}
      className={classNames}
    />
  );
});

TableResizeHandle.displayName = NAME;
