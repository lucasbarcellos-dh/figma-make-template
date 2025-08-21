import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface DialogTriggerProps extends ComponentPropsWithRef<'div'> {
  /**
   * Click this element to open dialog
   */
  children: ReactNode;
}
