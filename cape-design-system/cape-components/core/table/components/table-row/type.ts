import type { ComponentPropsWithRef } from 'react';

export interface TableRowProps extends ComponentPropsWithRef<'tr'> {
  /**
   * Disables the row.
   */
  disabled?: boolean;

  /**
   * Indicates whether the row is selected.
   */
  selected?: boolean;
}
