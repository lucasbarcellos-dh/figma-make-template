import type { ComponentPropsWithRef, ReactNode } from 'react';

export interface DrawerTriggerProps extends ComponentPropsWithRef<'div'> {
  /**
   * Click this element to open drawer
   */
  children: ReactNode;
}
