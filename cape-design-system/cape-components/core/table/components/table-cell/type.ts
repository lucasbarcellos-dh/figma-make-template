import type { ComponentPropsWithRef } from 'react';

export interface TableCellProps
  extends Omit<ComponentPropsWithRef<'td'>, 'width'> {
  /**
   * Aligns the content of the cell.
   */
  align?: 'left' | 'center' | 'right';

  /**
   * Vertical alignment of the cell content.
   */
  verticalAlign?: 'top' | 'middle' | 'bottom';
}
