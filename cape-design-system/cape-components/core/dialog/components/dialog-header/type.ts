import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface DialogHeaderProps extends ComponentPropsWithRef<'div'> {
  /**
   * Toggle this prop to hide or show the close button
   * @defaultValue true
   */
  closeButton?: ReactNode;
}
