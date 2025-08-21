import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface ListItemProps extends ComponentPropsWithRef<'li'> {
  /**
   * Show Divider below list item
   * The default value is inherited from the parent element (List)
   * @defaultValue false
   */
  divider?: boolean;

  /**
   * The size of the List Item. It can be one of 'small', 'medium', or 'large'.
   * The default value is inherited from the parent element (List)
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Show selected state for list item
   * The default value is inherited from the parent element (List)
   * @defaultValue false
   */
  selected?: boolean;

  /**
   * Content rendered at end of list item
   */
  secondaryAction?: ReactNode;

  /**
   * Show disabled state for list item
   * The default value is inherited from the parent element (List)
   * @defaultValue false
   */
  disabled?: boolean;
}
