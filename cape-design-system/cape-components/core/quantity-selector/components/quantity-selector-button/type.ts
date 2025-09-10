import type { ReactElement } from 'react';
import type { IconButtonProps } from '../../../icon-button';

export interface QuantitySelectorButtonProps extends IconButtonProps {
  /**
   * Set the action to show default icons.
   * By default, increment will show the Add icon, decrement will show the Remove icon and delete will show the Delete Icon of `@deliveryhero/cape-icons`.
   */
  action: 'increment' | 'decrement' | 'delete';
  /**
   * An optional ReactElement to customize the icon.
   */
  icon?: ReactElement;
}
