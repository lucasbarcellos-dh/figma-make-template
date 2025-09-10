import type { ComponentPropsWithRef } from 'react';

export interface TableProps
  extends Omit<ComponentPropsWithRef<'table'>, 'border'> {
  /**
   * The size of the table. Will be applied to the table cells.
   * @defaultValue 'medium'
   */
  size?: 'small' | 'medium';

  /**
   * Whether the table should have a border or not
   * @defaultValue false
   */
  border?: boolean;
}
