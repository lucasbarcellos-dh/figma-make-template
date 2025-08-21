import type { ComponentPropsWithRef } from 'react';

export interface ListProps extends ComponentPropsWithRef<'ul'> {
  /**
   * Show Divider below each list item
   * @defaultValue 'true'
   */
  divider?: boolean;

  /**
   * The size of the List. It can be one of 'small', 'medium', or 'large'.
   * @defaultValue 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}
