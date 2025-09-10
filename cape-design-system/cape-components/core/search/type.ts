import type { ComponentPropsWithRef } from 'react';

export interface SearchProps extends ComponentPropsWithRef<'div'> {
  /**
   * Callback fired when the user clicks outside the results dropdown.
   */
  onOutsideClick?: () => void;
}
