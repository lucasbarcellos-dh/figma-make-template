import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ListItemTextProps extends ComponentPropsWithRef<'div'> {
  /**
   * Title text
   */
  primaryText?: ReactNode;

  /**
   * SubTitle text
   */
  secondaryText?: ReactNode;

  /**
   * The size of the List Item Text. It can be one of 'small', 'medium', or 'large'.
   * The default value is inherited from the parent element (List)
   */
  size?: 'small' | 'medium' | 'large';
}
